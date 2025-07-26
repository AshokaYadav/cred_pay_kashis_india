import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
// import type { RootStackParamList } from '../navigation/RootNavigator'; // adjust path
import type { RootStackParamList } from '../navigation/RootNavigator ';
// import type { BottomTabParamList } from '../navigation/BottomTabs'; // adjust path
import type {TabParamList} from '../navigation/BottomTabs';

type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'RechargeSuccessScreen'>,
  BottomTabNavigationProp<TabParamList>
>;

const RechargeSuccessScreen = () => {
    const navigation = useNavigation<NavigationProp>();

  const handleDone = () => {
    navigation.reset({
  index: 0,
  routes: [{ name: 'MainApp', params: { screen: 'Home' } }],
})
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/success.png')} // ✅ green tick icon
          style={styles.successIcon}
        />
        <Text style={styles.successText}>Mobile Recharge Success</Text>
        <Text style={styles.rechargeId}>01859–489562</Text>
        <Text style={styles.paymentLabel}>Total Payment</Text>
        <Text style={styles.amount}>$132.00</Text>

        <View style={styles.separator} />

        <View style={styles.detailRow}>
          <Text style={styles.labelGreen}>Transaction ID</Text>
          <Text style={styles.value}>#71L69PJK3</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.labelGreen}>Amount</Text>
          <Text style={styles.value}>500.00 Tk.</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.labelGreen}>Charge</Text>
          <Text style={styles.value}>0 Tk.</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.labelGreen}>Total</Text>
          <Text style={styles.value}>500.00 Tk.</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.labelGreen}>Timestamp</Text>
          <Text style={styles.value}>01/11/22, 10:45PM</Text>
        </View>

        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>🔗 Share</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone} >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.payAgainButton}>
          <Text style={styles.payAgainText}>Pay again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RechargeSuccessScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  successIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  rechargeId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  paymentLabel: {
    color: '#888',
    fontSize: 14,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  labelGreen: {
    color: 'green',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontSize: 14,
  },
  shareButton: {
    marginTop: 10,
  },
  shareText: {
    color: 'green',
    fontWeight: 'bold',
  },
  bottomButtons: {
    marginTop: 20,
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: 'green',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
  payAgainButton: {
    borderWidth: 1.5,
    borderColor: 'green',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  payAgainText: {
    color: 'green',
    fontSize: 16,
  },
});
