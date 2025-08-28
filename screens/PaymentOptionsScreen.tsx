import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  Linking,
  Platform,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import DeviceInfo from 'react-native-device-info';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

type UpiApp = {
  id: string;
  name: string;
  packageName: string;
  deepLink: string;
  isInstalled: boolean;
};

const PaymentScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [upiApps, setUpiApps] = useState<UpiApp[]>([]);
  const [loading, setLoading] = useState(true);

  // Common UPI apps in India
  const commonUpiApps = [
    {
      id: 'googlepay',
      name: 'Google Pay',
      packageName: 'com.google.android.apps.nbu.paisa.user',
      deepLink: 'tez://upi/pay',
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      packageName: 'com.phonepe.app',
      deepLink: 'phonepe://pay',
    },
    {
      id: 'paytm',
      name: 'Paytm',
      packageName: 'net.one97.paytm',
      deepLink: 'paytmmp://pay',
    },
    {
      id: 'amazonpay',
      name: 'Amazon Pay',
      packageName: 'in.amazon.mShop.android.shopping',
      deepLink: 'amazonpay://pay',
    },
    {
      id: 'bhim',
      name: 'BHIM',
      packageName: 'in.org.npci.upiapp',
      deepLink: 'upi://pay',
    },
  ];

  useEffect(() => {
    checkInstalledApps();
  }, []);

  const checkInstalledApps = async () => {
  try {
    // 📌 Android 11+ ke liye QUERY_ALL_PACKAGES permission check karo
    if (Platform.OS === 'android' && Platform.Version >= 30) {
      const result = await check((PERMISSIONS.ANDROID as any).QUERY_ALL_PACKAGES);
      if (result !== RESULTS.GRANTED) {
        const requestResult = await request((PERMISSIONS.ANDROID as any).QUERY_ALL_PACKAGES);
        if (requestResult !== RESULTS.GRANTED) {
          Alert.alert(
            'Permission required',
            'We need permission to check installed apps for better payment experience',
          );
        }
      }
    }

    // 📌 Installed UPI apps check karo
  const installedApps = await Promise.all(
  commonUpiApps.map(async (app) => {
    const isInstalled = await (DeviceInfo as any).isAppInstalled(app.packageName);
    return { ...app, isInstalled };
  })
);


    setUpiApps(installedApps.filter(app => app.isInstalled));
    setLoading(false);

  } catch (error) {
    console.error('Error checking installed apps:', error);
    setLoading(false);
  }
};

  const handleAppSelection = (app: UpiApp) => {
    setSelectedOption(app.id);
    // Open the selected UPI app directly
    Linking.openURL(app.deepLink).catch(err => {
      Alert.alert('Error', `Failed to open ${app.name}. Please try another method.`);
    });
  };

  const initiateRazorpayPayment = async () => {
    if (!selectedOption) {
      Alert.alert('Error', 'Please select a payment option');
      return;
    }

    try {
      // Replace with your actual order creation API
      const orderResponse = await createOrder(1000); // Example amount

      const options = {
        description: 'Payment for services',
        image: 'https://your-logo-url.png',
        currency: 'INR',
        key: 'rzp_test_YOUR_KEY', // Replace with your Razorpay key
        amount: orderResponse.amount,
        order_id: orderResponse.id,
        name: 'Your App Name',
        prefill: {
          email: 'user@example.com',
          contact: '9876543210',
          name: 'User Name',
        },
        theme: {color: '#3399cc'},
        method: {
          upi: true,
        },
      };

      RazorpayCheckout.open(options)
        .then(data => {
          Alert.alert('Success', `Payment ID: ${data.razorpay_payment_id}`);
        })
        .catch(error => {
          Alert.alert('Error', error.description || 'Payment failed');
        });
    } catch (error) {
      Alert.alert('Error', 'Failed to initiate payment');
    }
  };

  // Mock function - replace with actual API call
  const createOrder = async (amount: number) => {
    return {
      id: 'order_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Convert to paise
    };
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading payment options...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionHeader}>Online Deposit</Text>

        {/* Dynamic UPI Apps */}
        {upiApps.length > 0 ? (
          upiApps.map(app => (
            <TouchableOpacity
              key={app.id}
              style={[
                styles.paymentOption,
                selectedOption === app.id && styles.selectedOption,
              ]}
              onPress={() => handleAppSelection(app)}>
              <Text style={styles.optionIcon}>➤</Text>
              <View style={styles.optionDetails}>
                <Text style={styles.optionName}>{app.name}</Text>
                <Text style={styles.amountRange}>
                  Min amount: 10    Max amount: 20000
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noAppsText}>
            No UPI apps detected. Please install a UPI app to continue.
          </Text>
        )}

        <Text style={styles.helpText}>Need Help? Contact Us</Text>

        <Text style={styles.sectionHeader}>Pay with...</Text>

        {/* Razorpay fallback option */}
        <TouchableOpacity
          style={[
            styles.bankOption,
            selectedOption === 'razorpay' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('razorpay')}>
          <Text style={styles.bankName}>Other Payment Methods</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Pay Button */}
      <View style={styles.payButtonContainer}>
        <TouchableOpacity
          style={styles.payButton}
          onPress={initiateRazorpayPayment}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  selectedOption: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#4CAF50',
  },
  optionDetails: {
    flex: 1,
  },
  optionName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#333',
  },
  amountRange: {
    fontSize: 14,
    color: '#666',
  },
  helpText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 16,
  },
  bankOption: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bankName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  payButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  payButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noAppsText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 20,
  },
});

export default PaymentScreen;