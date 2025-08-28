// src/hooks/usePayment.ts
import {useState} from 'react';
import {Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import api from '../lib/axios';
// import api from '../services/api';

interface PaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  amount: number;
}

interface UsePaymentReturn {
  isLoading: boolean;
  createOrder: (amount: number) => Promise<any>;
  verifyPayment: (paymentData: PaymentPayload) => Promise<any>;
}

export const usePayment = (): UsePaymentReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = async (amount: number) => {
    setIsLoading(true);
    try {
      const response = await api.post('/payments/create-order', {
        amount: amount * 100, // Convert to paise
      });
      return response.data;
    } catch (error) {
      console.error('Create Order Error:', error);
      Alert.alert('Error', 'Failed to create order');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyPayment = async (paymentData: PaymentPayload) => {
    setIsLoading(true);
    try {
      const response = await api.post('/payments/verify-payment', paymentData);
      return response.data;
    } catch (error) {
      console.error('Payment Verification Error:', error);
      Alert.alert('Error', 'Payment verification failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createOrder,
    verifyPayment,
  };
};