// src/services/api.ts
import axios from 'axios';
import {API_TOKEN} from '../config';
import { NavigationService } from '../services/NavigationService';

const api = axios.create({
  baseURL: 'https://api.recharge.kashishindiapvtltd.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add authorization token to requests
api.interceptors.request.use(
  (config) => {
    if (API_TOKEN) {
      config.headers.Authorization = `Bearer ${API_TOKEN}`;
    }
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
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;