// src/hooks/useRazorpay.ts
import {Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

interface RazorpayOptions {
  description: string;
  currency: string;
  key: string;
  amount: number;
  order_id: string;
  name: string;
  method: {
    upi: boolean;
    card: boolean;
    netbanking: boolean;
    wallet: boolean;
  };
  flow: string;
  upi: {
    vpa: string;
  };
}

export const useRazorpay = () => {
  const initiatePayment = (options: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      RazorpayCheckout.open(options)
        .then((paymentData) => {
          resolve(paymentData);
        })
        .catch((error) => {
          if (error.description !== 'Payment Cancelled') {
            Alert.alert('Error', error.description || 'Payment failed');
          }
          reject(error);
        });
    });
  };

  return {
    initiatePayment,
  };
};