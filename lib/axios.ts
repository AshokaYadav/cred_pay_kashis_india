// src/services/api.ts
import axios from 'axios';
import {API_TOKEN} from '../config';

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
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;