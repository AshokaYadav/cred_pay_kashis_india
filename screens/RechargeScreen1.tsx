import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator ';

const RechargeScreen = () => {
  const [number, setNumber] = useState('');
  const [showPlans, setShowPlans] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setShowPlans(number.length === 10);
  }, [number]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Recharge & Pay Bill</Text>
      </View>

      {/* Banner Image */}
      <Image
        source={require('../assets/Banner.png')}
        style={styles.bannerImage}
        resizeMode="contain"
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Enter Mobile Number"
          style={styles.searchInput}
          keyboardType="numeric"
          maxLength={10}
          value={number}
          onChangeText={text => setNumber(text)}
        />
      </View>

      {/* Show Recharge Plans only if 10 digits entered */}
      {showPlans && (
        <View style={styles.planContainer}>
          <Text style={styles.sectionTitle}>Choose Plan</Text>

          {[
            {
              price: '₹249',
              days: '28 Days',
              data: '1.5 GB Data',
              voice: 'Unlimited Voice',
            },
            {
              price: '₹349',
              days: '28 Days',
              data: '2 GB Data',
              voice: 'Unlimited Voice',
            },
            {
              price: '₹649',
              days: '84 Days',
              data: '2 GB Data',
              voice: 'Unlimited Voice',
            },
            {
              price: '₹649',
              days: '84 Days',
              data: '2 GB Data',
              voice: 'Unlimited Voice',
            },
            {
              price: '₹649',
              days: '84 Days',
              data: '2 GB Data',
              voice: 'Unlimited Voice',
            },
            {
              price: '₹649',
              days: '84 Days',
              data: '2 GB Data',
              voice: 'Unlimited Voice',
            },
          ].map((plan, index) => (
            <TouchableOpacity
              key={index}
              style={styles.planBox}
              onPress={() => navigation.navigate('PlanDetailsScreen', {plan})}>
              <View style={styles.planLeft}>
                <Text style={styles.planPrice}>{plan.price}</Text>
                <Text>{plan.days}</Text>
                <Text>{plan.data} Per Day</Text>
              </View>
              <View style={styles.planRight}>
                <Ionicons name="call" color="green" size={18} />
                <Text>{plan.voice}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Footer Note */}
      <Text style={styles.footerNote}>
        By proceeding further, you allow KredPay to fetch your current and
        future plan expiry information and remind you
      </Text>
    </ScrollView>
  );
};

export default RechargeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#00C853',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
  },
  planContainer: {
    marginBottom: 20,
  },
  planBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planLeft: {
    flex: 1,
  },
  planRight: {
    flex: 1,
    alignItems: 'flex-start',
  },
  planPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C853',
  },
  footerNote: {
    fontSize: 12,
    color: 'gray',
    marginTop: 20,
    textAlign: 'center',
  },
});
