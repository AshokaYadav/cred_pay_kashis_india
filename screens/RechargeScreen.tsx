import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import {API_TOKEN} from '../config';

import {
  Plan,
  RData,
  PlansResponse,
  plansRes,
  OperatorCircleResponse,
  Operator,
  Circle,
} from '../types';

import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator ';
import {useWallet} from '../hooks/useWallet';
import LoadingSpinner from '../components/LoadingSpinner';
import PlansList from '../components/PlansList';
import PlanCard from '../components/PlanCard';
import NoPlansForCategory from '../components/NoPlansForCategory';
import ErrorDisplay from '../components/ErrorDisplay';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RechargeScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [processedMobileNumber, setProcessedMobileNumber] = useState('');
  const [activeTab, setActiveTab] = useState<string>('');
  const [plansData, setPlansData] = useState<PlansResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchAmount, setSearchAmount] = useState('');
  const [showFullUI, setShowFullUI] = useState(false);

  const [operatorData, setOperatorData] = useState<Operator | null>(null);
  const [circleData, setCircleData] = useState<Circle | null>(null);

  const {data, loading: lodd, error: err} = useWallet();
  console.log('this', data, lodd, err);

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
    console.log(processed);

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

        // Store operator and circle data
        if (circleData.data && circleData.data.operator) {
          setOperatorData(circleData.data.operator);
        }

        if (circleData.data && circleData.data.circle) {
          setCircleData(circleData.data.circle);
        }

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
        console.log(plansData);
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
    <View className="flex-1 bg-gray-50">
      {/* Fixed Header */}
      {/* Fixed Header */}
      {/* Header */}
      <View
        className="bg-white px-4 pt-4 pb-4 flex-row items-center 
              shadow-md rounded-b-2xl"
        style={{paddingTop: Platform.OS === 'ios' ? 50 : 50}}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={32} color="#16a34a" />
          {/* Thoda chhota size & green color professional lagta hai */}
        </TouchableOpacity>

        {/* Header Title / Operator Info */}
        {!showFullUI ? (
          <Text className="text-xl font-semibold text-gray-800">
            Recharge or Pay Mobile Bill
          </Text>
        ) : (
          <View className="flex-row items-center">
            {operatorData?.image_url ? (
              <Image
                source={{
                  uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}`,
                }}
                className="w-10 h-10 mr-3 rounded-full bg-white border border-gray-300"
                resizeMode="cover"
              />
            ) : (
              <View className="w-10 h-10 mr-3 rounded-full bg-green-100 justify-center items-center">
                <Text className="text-green-700 font-bold text-lg">
                  {operatorData?.name?.charAt(0) || 'O'}
                </Text>
              </View>
            )}

            <View>
              <Text className="text-lg font-semibold text-gray-900">
                {operatorData?.name || 'Operator'}
              </Text>
              <Text className="text-sm text-gray-600">
                {processedMobileNumber}
              </Text>
              <Text className="text-sm text-gray-600">
                {circleData?.name || 'Circle'} • Prepaid
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={{paddingTop: showFullUI ? 0 : 0}}
        className="px-4">
        {/* Mobile Number Input - Always visible */}

        {!showFullUI && (
          <View className="mb-5">
            <TextInput
              className="bg-white border border-green-500 rounded-full px-4 py-3 text-base"
              value={mobileNumber}
              onChangeText={handleMobileNumberChange}
              placeholder="Enter 10-digit mobile number"
              keyboardType="phone-pad"
              maxLength={14}
            />
          </View>
        )}

        {/* Show plans UI only if number is valid */}
        {showFullUI && plansData?.RDATA && (
          <>
            <View className="mb-5">
              {/* <Text className="text-sm font-medium text-gray-600 mb-2">
                Search by Amount:
              </Text> */}
              <TextInput
                className="bg-white border border-green-300 rounded-full px-4 py-3 text-base"
                value={searchAmount}
                onChangeText={handleSearchChange}
                placeholder="Search By Amount"
                keyboardType="numeric"
              />
            </View>

            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {!searchAmount && (
                  <View className="mb-4">
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      <View className="flex-row pb-2">
                        {tabCategories.map(cat => (
                          <TouchableOpacity
                            key={cat}
                            className={`rounded-full px-4 py-2 mr-2 ${
                              activeTab === cat ? 'bg-green-600' : 'bg-gray-100'
                            }`}
                            onPress={() => setActiveTab(cat)}>
                            <Text
                              className={`text-sm font-medium ${
                                activeTab === cat
                                  ? 'text-white'
                                  : 'text-gray-600'
                              }`}>
                              {cat}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                )}

                {searchAmount && (
                  <View className="mb-4">
                    <Text className="text-lg font-semibold text-gray-800">
                      Showing plans with ₹{searchAmount}
                    </Text>
                    <TouchableOpacity onPress={() => setSearchAmount('')}>
                      <Text className="text-green-600 text-sm mt-1 font-medium">
                        Clear search
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}

                {activePlans.length > 0 ? (
                  <PlansList
                    plans={activePlans}
                    onNavigate={plan =>
                      navigation.navigate('PlanDetailsScreen1', {
                        plan,
                        mobileNumber: processedMobileNumber,
                        circleData,
                        operatorData,
                      })
                    }
                  />
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
