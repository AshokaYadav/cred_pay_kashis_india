import axios from 'axios';
import { API_TOKEN } from '../config';
import { Alert } from 'react-native';
import { NavigationService } from './NavigationService';
// import { NavigationService } from './NavigationService'; // You'll need to create this

const api = axios.create({
  baseURL: 'https://api.recharge.kashishindiapvtltd.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${API_TOKEN}`;
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor with authentication handling
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    
    // Check for authentication errors in response
    if (response.data?.err === 'Authentication required' || 
        response.data?.message === 'Failed' && response.data?.data === null) {
      // Redirect to Main page
      NavigationService.navigate('Main');
      return Promise.reject(new Error('Authentication required'));
    }
    
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    
    // Handle authentication errors
    if (error.response?.data?.err === 'Authentication required' || 
        error.response?.data?.message === 'Failed' && error.response?.data?.data === null) {
      // Redirect to Main page
      NavigationService.navigate('Main');
    }
    
    return Promise.reject(error);
  }
);

export default api;