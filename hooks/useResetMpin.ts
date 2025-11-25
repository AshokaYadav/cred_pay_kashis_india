// src/hooks/useResetMpin.ts
import { useState, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import api from '../lib/axios';
import { Alert } from 'react-native';

export const useResetMpin = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'mpin' | 'otp'>('mpin');

  const updateMpin = useCallback(async (mpin: string) => {
    setLoading(true);
    try {
      const res = await api.post('/user/update-mpin', { mpin });
      console.log('update-mpin response:', res.data);

      Toast.show({
        type: 'success',
        text1: 'OTP Sent',
        text2: 'Please check your registered mobile/email.',
      });

      setStep('otp');
    } catch (err: any) {
      console.error(err);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err.response?.data?.message || 'Failed to send OTP',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyOtp = useCallback(async (otp: string, onSuccess?: () => void) => {
    // Alert.alert('heel')
    setLoading(true);
    try {
      const res = await api.post('/user/verify-mpin-update', { otp });
      console.log('verify-mpin-update response:', res.data);

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'MPIN updated successfully!',
      });

      onSuccess?.();
      setStep('mpin'); 
    } catch (err: any) {
      console.error(err);
      Toast.show({
        type: 'error',
        text1: 'Invalid OTP',
        text2: err.response?.data?.message || 'Failed to verify OTP',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const resetState = () => {
    setStep('mpin');
    setLoading(false);
  };

  return { loading, step, updateMpin, verifyOtp, resetState };
};
