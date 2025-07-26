import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator ';

import { RouteProp } from '@react-navigation/native';
// import type { RootStackParamList, PlanType } from '../navigation/RootNavigator';

type RechargeDetailRouteProp = RouteProp<RootStackParamList, 'PlanDetailsScreen'>;

const RechargeDetailScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    //   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RechargeDetailRouteProp>();
  const { plan } = route.params;

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
          <Text style={styles.amount}>{plan.price}</Text>
          <Text style={styles.userName}>Ajit Kadam</Text>
          <Text style={styles.circle}>Airtel Rajasthan</Text>
          <Text style={styles.mobile}>9633448483</Text>

          <View style={styles.benefitsRow}>
            <Text style={styles.benefit}>{plan.days}</Text>
            <Text style={styles.benefit}>{plan.data}/day</Text>
            <Text style={styles.benefit}>{plan.voice}</Text>
          </View>
        </View>

        {/* Middle Banner */}
        <Image
          source={require('../assets/Banner.png')}
          style={styles.middleImage}
          resizeMode="cover"
        />

        {/* Change Plan Button */}
        <TouchableOpacity style={styles.changePlanBtn}>
          <Text style={styles.changePlanText}>Change Plan</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Fixed Pay Section */}
      <View style={styles.paySection}>
        <View>
          <Text style={styles.selectAccountLabel}>Select Account</Text>
          <Text style={styles.accountNumber}>● ● ● ● 7362</Text>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('RechargeSuccessScreen')}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RechargeDetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingBottom: 150,
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
    width: '92%',
    alignSelf: 'center',
    height: 160,
    borderRadius: 12,
    marginVertical: 16,
  },
  planCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    padding: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  amount: {
    fontSize: 26,
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
    marginTop: 12,
  },
  benefit: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
  },
  middleImage: {
    width: '92%',
    alignSelf: 'center',
    height: 140,
    borderRadius: 10,
    marginBottom: 24,
  },
  changePlanBtn: {
    marginHorizontal: 40,
    borderWidth: 1.2,
    borderColor: '#10B981',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 100,
  },
  changePlanText: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: '600',
  },
  paySection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectAccountLabel: {
    color: '#6B7280',
    fontSize: 14,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
    color: '#1F2937',
  },
  payButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
