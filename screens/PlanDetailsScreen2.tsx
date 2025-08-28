import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator ';

import {RouteProp} from '@react-navigation/native';
import {API_TOKEN} from '../config';
import RazorpayCheckout from 'react-native-razorpay';
// import type { RootStackParamList, PlanType } from '../navigation/RootNavigator';

type RechargeDetailRouteProp = RouteProp<
  RootStackParamList,
  'PlanDetailsScreen1'
>;

const RechargeDetailScreen1 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  //   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RechargeDetailRouteProp>();
  const {plan} = route.params;
  console.log(plan);

  const Pay = async () => {
    console.log('hello');
    console.log(plan?.rs);
    try {
      const response = await fetch(
        'https://api.recharge.kashishindiapvtltd.com/payments/create-order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify({
            amount: 1000,
          }),
        },
      );

      const data = await response.json();
      console.log(data);
      razorPayment(data);
    } catch (e) {
      console.error('❌ Create Order Error:', e);
      Alert.alert('Error', 'Failed to create order');
    }
  };

  const razorPayment = async (data: any) => {
    console.log(data?.data);
    console.log('thsi is razor pay');
    try {
      const options = {
        description: 'Payment for order',
        image: '/Banner.png',
        currency: 'INR',
        key: data?.data?.key,
        amount: data?.data?.amount,
        order_id: data?.data?.order_id,
        name: 'Kashish India',
        prefill: {
          email: data?.data?.prefill?.email || 'default@gmail.com',
          contact: data?.data?.prefill?.contact || '0101010101',
          name: data?.data?.prefill?.name || 'Default User',
        },
        theme: {color: '#F37254'},
        method: {
          upi: true,
          card: false,
          netbanking: false,
          wallet: false,
        },
        upi: {
          flow: 'intent',
          vpa: data?.data?.pa || '',
        },
      };

      console.log(options);

      RazorpayCheckout.open(options)
        .then(paymentData => {
          console.log(
            'Success',
            `Payment ID: ${paymentData.razorpay_payment_id}`,
          );
          //   handlePayment()
        })
        .catch(error => {
          console.log(error);
          console.log(error.description);
          //   Alert.alert("Error", error.description || "Payment failed");
        });
    } catch (e) {
      console.error('❌ Razorpay Error:', e);
      Alert.alert('Error', 'Something went wrong with Razorpay');
    }
  };

  console.log(plan);
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mobile Recharge</Text>
        </View>

        {/* Top Banner */}
        <Image
          source={require('../assets/Banner.png')}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        {/* Plan Details */}
        <View style={styles.planCard}>
          <Text style={styles.amount}>{plan?.rs}</Text>
          <Text style={styles.userName}>Ajit Kadam</Text>
          <Text style={styles.circle}>Airtel Rajasthan</Text>
          <Text style={styles.mobile}>9633448483</Text>

          <View style={styles.benefitsRow}>
            <Text style={styles.benefit}>{plan.validity}</Text>
            <Text style={styles.benefit}>{plan.desc}/day</Text>
            {/* <Text style={styles.benefit}>{plan.voice}</Text> */}
          </View>
        </View>

        {/* Middle Banner */}
        {/* <Image
          source={require('../assets/Banner.png')}
          style={styles.middleImage}
          resizeMode="cover"
        /> */}

        {/* Change Plan Button */}
        <TouchableOpacity style={styles.changePlanBtn}>
          <Text style={styles.changePlanText}>Change Plan</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Fixed Pay Section */}
      <View>
        <TouchableOpacity
          style={styles.payButton}
        //   onPress={() => navigation.navigate('PaymentOptionsScreen')}
          onPress={Pay}
          >
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RechargeDetailScreen1;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingBottom: 200,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
  },
  bannerImage: {
    width: '95%',
    alignSelf: 'center',
    height: 180,
    borderRadius: 14,
    marginVertical: 16,
  },
  planCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 3},
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#059669',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#1F2937',
  },
  circle: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 2,
  },
  mobile: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 12,
  },
  benefitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  benefit: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
    marginVertical: 2,
  },
  changePlanBtn: {
    marginHorizontal: 40,
    borderWidth: 1.2,
    borderColor: '#10B981',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 140,
  },
  changePlanText: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: '600',
  },
  payButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 4,
  },
  payButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
