import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {API_TOKEN} from '../config';

import {
  Plan,
  RData,
  PlansResponse,
  plansRes,
  OperatorCircleResponse,
} from '../types';

import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator ';


export default function RechargeScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [processedMobileNumber, setProcessedMobileNumber] = useState('');
  const [activeTab, setActiveTab] = useState<string>('');
  const [plansData, setPlansData] = useState<PlansResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchAmount, setSearchAmount] = useState('');
  const [showFullUI, setShowFullUI] = useState(false);


   const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const processMobileNumber = useCallback((number: string): string | null => {
    if (!number) return null;

    if (number.startsWith('+91')) {
      number = number.slice(3);
    } else if (number.startsWith('0')) {
      number = number.slice(1);
    }

    const digitsOnly = number.replace(/\D/g, '');
    const last10Digits = digitsOnly.slice(-10);

    return last10Digits.length === 10 ? last10Digits : null;
  }, []);

  const handleMobileNumberChange = (text: string) => {
    setMobileNumber(text.slice(-10));

    const processed = processMobileNumber(text);

    if (processed) {
      setProcessedMobileNumber(processed);
    } else {
      setProcessedMobileNumber('');
      setPlansData(null);
      setShowFullUI(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (processedMobileNumber.length !== 10) {
        setPlansData(null);
        setShowFullUI(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setShowFullUI(false);

        const circleResponse = await fetch(
          'https://api.recharge.kashishindiapvtltd.com/op-circle-link/fetch-op-circle',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({mobile: processedMobileNumber}),
          },
        );

        const circleData: OperatorCircleResponse = await circleResponse.json();

        console.log(circleData);

        const plansResponse = await fetch(
          'https://api.recharge.kashishindiapvtltd.com/recharge/fetch-plans',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({
              circleCode: circleData.data.circle_code,
              opCode: circleData.data.operator_code,
            }),
          },
        );

        const plansData: plansRes = await plansResponse.json();

        if (!plansData.data?.RDATA) throw new Error('No plans found');

        setPlansData(plansData.data);
        console.log(plansData.data);
        const firstTab = Object.keys(plansData.data.RDATA)[0];
        setActiveTab(firstTab || '');
        setShowFullUI(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    if (processedMobileNumber) {
      fetchData();
    }
  }, [processedMobileNumber]);

  const handleSearchChange = (text: string) => {
    setSearchAmount(text);
  };

  if (error)
    return <ErrorDisplay error={error} onRetry={() => setError(null)} />;

  const tabCategories = plansData?.RDATA ? Object.keys(plansData.RDATA) : [];
  let activePlans = activeTab ? plansData?.RDATA[activeTab] || [] : [];

  if (searchAmount && plansData?.RDATA) {
    const allPlans = Object.values(plansData.RDATA).flat();
    activePlans = allPlans
      .filter(plan => plan.rs.toString().includes(searchAmount))
      .sort((a, b) => a.rs - b.rs);
  }

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {plansData?.Operator || 'Operator'}
        </Text>
        <Text style={styles.headerSubtitle}>
          {plansData?.Circle || 'Circle'} | Mobile:{' '}
          {processedMobileNumber || 'XXXXXXX'}
        </Text>
      </View>

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          {paddingTop: showFullUI ? 100 : 20},
        ]}>
        {/* Mobile Number Input - Always visible */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Mobile Number:</Text>
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={handleMobileNumberChange}
            placeholder="Enter 10-digit mobile number"
            keyboardType="phone-pad"
            maxLength={14}
          />
          <Text style={styles.hintText}>With or without code (+91, 0, 91)</Text>
          {mobileNumber && !processedMobileNumber && (
            <Text style={styles.errorText}>
              Please enter valid 10-digit number
            </Text>
          )}
        </View>

        {/* Show plans UI only if number is valid */}
        {showFullUI && plansData?.RDATA && (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Search by Amount:</Text>
              <TextInput
                style={styles.input}
                value={searchAmount}
                onChangeText={handleSearchChange}
                placeholder="Enter amount"
                keyboardType="numeric"
              />
            </View>

            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {!searchAmount && (
                  <View style={styles.tabContainer}>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      <View style={styles.tabInnerContainer}>
                        {tabCategories.map(cat => (
                          <TouchableOpacity
                            key={cat}
                            style={[
                              styles.tabButton,
                              activeTab === cat && styles.activeTabButton,
                            ]}
                            onPress={() => setActiveTab(cat)}>
                            <Text
                              style={[
                                styles.tabButtonText,
                                activeTab === cat && styles.activeTabButtonText,
                              ]}>
                              {cat}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                )}

                {searchAmount && (
                  <View style={styles.searchHeader}>
                    <Text style={styles.searchTitle}>
                      Showing plans with ₹{searchAmount}
                    </Text>
                    <TouchableOpacity onPress={() => setSearchAmount('')}>
                      <Text style={styles.clearSearchText}>Clear search</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {activePlans.length > 0 ? (
                  <PlansList plans={activePlans} onNavigate={(plan) => navigation.navigate('PlanDetailsScreen1', { plan })}  />
                ) : (
                  <NoPlansForCategory />
                )}
              </>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}

// --- UI Components

function LoadingSpinner() {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#E53E3E" />
    </View>
  );
}
function PlansList({
  plans,
  onNavigate,
}: {
  plans: Plan[];
  onNavigate: (plan: Plan) => void;
}) {
  return (
    <View style={styles.plansListContainer}>
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} onPress={() => onNavigate(plan)}  />
      ))}
    </View>
  );
}

function PlanCard({
  plan,
  onPress,
}: {
  plan: Plan;
  onPress: () => void;
}) {
  return (
    <View style={styles.planCard}>
      <View style={styles.planHeader}>
        <View>
          <Text style={styles.planPrice}>₹{plan.rs}</Text>
          <Text style={styles.validityText}>{plan.validity}</Text>
        </View>
        <TouchableOpacity style={styles.rechargeButton} onPress={onPress}>
          <Text style={styles.rechargeButtonText}>Recharge Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.planDetails}>
        {plan.desc.split('|').map((line, i) => (
          <View key={i} style={styles.detailItem}>
            <Ionicons
              name="checkmark-circle"
              size={16}
              color="#4CAF50"
              style={styles.bulletIcon}
            />
            <Text style={styles.planDetailItem}>{line.trim()}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function NoPlansForCategory() {
  return (
    <View style={styles.noPlansContainer}>
      <Ionicons name="sad-outline" size={48} color="#718096" />
      <Text style={styles.noPlansText}>No plans found for this category</Text>
    </View>
  );
}

function ErrorDisplay({error, onRetry}: {error: string; onRetry: () => void}) {
  return (
    <View style={styles.errorContainer}>
      <Ionicons name="warning-outline" size={48} color="#E53E3E" />
      <Text style={styles.errorMessage}>{error}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E53E3E',
    padding: 16,
    zIndex: 10,
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  contentContainer: {
    paddingHorizontal: 16,
    // paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A5568',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  hintText: {
    fontSize: 12,
    color: '#718096',
    marginTop: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#E53E3E',
    marginTop: 4,
  },
  tabContainer: {
    marginBottom: 16,
  },
  tabInnerContainer: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  tabButton: {
    backgroundColor: '#EDF2F7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: '#E53E3E',
  },
  tabButtonText: {
    color: '#4A5568',
    fontSize: 14,
  },
  activeTabButtonText: {
    color: 'white',
  },
  searchHeader: {
    marginBottom: 16,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  clearSearchText: {
    color: '#E53E3E',
    fontSize: 14,
    marginTop: 4,
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  plansListContainer: {
    marginBottom: 20,
  },
  planCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planPrice: {
    color: '#E53E3E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  validityText: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  rechargeButton: {
    backgroundColor: '#E53E3E',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rechargeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDF2F7',
    marginVertical: 12,
  },
  planDetails: {
    marginTop: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletIcon: {
    marginRight: 8,
  },
  planDetailItem: {
    fontSize: 15,
    color: '#4A5568',
    flex: 1,
  },
  noPlansContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  noPlansText: {
    color: '#718096',
    fontSize: 16,
    marginTop: 16,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
  },
  errorMessage: {
    color: '#E53E3E',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  retryButton: {
    backgroundColor: '#E53E3E',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 16,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
