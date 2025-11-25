// src/services/api.ts
import axios from 'axios';
import {API_TOKEN} from '../config';
import { NavigationService } from '../services/NavigationService';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://api.recharge.kashishindiapvtltd.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add authorization token to requests
api.interceptors.request.use(
  async (config) => {
    const stored = await AsyncStorage.getItem('userData');
    if (stored) {
      const userData = JSON.parse(stored);
      const token = userData?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
     console.log('➡️ Request URL:', `${config.baseURL}${config.url}`);
    console.log('➡️ Method:', config.method?.toUpperCase());
    console.log('➡️ Data:', config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) =>  {
    // Check for authentication errors in successful responses
    console.log(response);
    if (response.data?.err === 'Authentication required' || 
        (response.data?.message === 'Failed' && response.data?.data === null)) {
      console.warn('🔐 Authentication error detected in response');
      
      // Redirect to Main screen
      setTimeout(() => {
        NavigationService.navigate('Main');
      }, 100);
      
      // Return a rejected promise to stop further processing
      return Promise.reject(new Error('Authentication required'));
    }
    return response
  },
  (error) => {
    console.log(error);
    
    // console.log(error.status)
    // console.error('API Error:', error.response?.data || error.message);
     if (error.config) {
      console.log('❌ Error from:', `${error.config.baseURL}${error.config.url}`);
      console.log('❌ Method:', error.config.method?.toUpperCase());
      console.log('❌ Data:', error.config.data);
    }
    const errData = error.response?.data;
    if (
      errData?.err === 'Authentication required' ||
      (errData?.message === 'Failed' && errData?.data === null)
    ) {
      console.warn('🔐 Authentication error detected in error response');
// Alert.alert('h')
      Toast.show({
      type: 'error',
      text1: 'Authentication Error',
      text2: 'Session expired. Please login again.',
      visibilityTime: 500, // 👈 500ms ke liye
    });


      setTimeout(() => {
        NavigationService.navigate('PhoneNumberForm');
      }, 500);
    }
    return Promise.reject(error);
  }
);

export default api;