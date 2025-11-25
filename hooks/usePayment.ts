// // // src/hooks/usePayment.ts
// // import {useState} from 'react';
// // import {Alert} from 'react-native';
// // import RazorpayCheckout from 'react-native-razorpay';
// // import api from '../lib/axios';
// // // import api from '../services/api';

// // interface PaymentPayload {
// //   razorpay_order_id: string;
// //   razorpay_payment_id: string;
// //   razorpay_signature: string;
// //   amount: number;
// // }

// // interface UsePaymentReturn {
// //   isLoading: boolean;
// //   createOrder: (amount: number) => Promise<any>;
// //   verifyPayment: (paymentData: PaymentPayload) => Promise<any>;
// // }

// // export const usePayment = (): UsePaymentReturn => {
// //   const [isLoading, setIsLoading] = useState(false);

// //   const createOrder = async (amount: number) => {
// //     setIsLoading(true);
// //     try {
// //       const response = await api.post('/payments/create-order', {
// //         amount: amount * 100, // Convert to paise
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error('Create Order Error:', error);
// //       Alert.alert('Error', 'Failed to create order');
// //       throw error;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const verifyPayment = async (paymentData: PaymentPayload) => {
// //     setIsLoading(true);
// //     try {
// //       const response = await api.post('/payments/verify-payment', paymentData);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Payment Verification Error:', error);
// //       Alert.alert('Error', 'Payment verification failed');
// //       throw error;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return {
// //     isLoading,
// //     createOrder,
// //     verifyPayment,
// //   };
// // };


// // src/hooks/usePayment.ts
// import { useState } from 'react';
// import { Alert } from 'react-native';
// import RazorpayCheckout from 'react-native-razorpay';
// import api from '../lib/axios';
// import { NavigationService } from '../services/NavigationService';
// // import NavigationService from '../services/NavigationService'; // <- apna navigation service import karna

// // import api from '../services/api';

// interface PaymentPayload {
//   razorpay_order_id: string;
//   razorpay_payment_id: string;
//   razorpay_signature: string;
//   amount: number;
// }

// interface UsePaymentReturn {
//   isLoading: boolean;
//   createOrder: (amount: number) => Promise<any>;
//   // verifyPayment: (paymentData: PaymentPayload) => Promise<any>;
// }

// export const usePayment = (): UsePaymentReturn => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleAuthError = (res: any) => {
//     if (
//       res?.err === 'Authentication required' ||
//       (res?.message === 'Failed' && res?.data === null)
//     ) {
//       Alert.alert('Session Expired', 'Please login again');
//       NavigationService.navigate('PhoneNumberForm');
//       return true;
//     }
//     return false;
//   };

//   const createOrder = async (amount: number) => {
//     setIsLoading(true);
//     try {
//       const response = await api.post('/payments/create-order', {
//         amount: amount * 100, // Convert to paise
//       });

//       if (handleAuthError(response.data)) return;

//       return response.data;
//     } catch (error: any) {
//       console.error('Create Order Error:', error);
//       Alert.alert('Error', 'Failed to create order');
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     isLoading,
//     createOrder,
//   };
// };



// src/hooks/usePayment.ts
import { useState } from "react";
import { Alert } from "react-native";
import api from "../lib/axios";
import { NavigationService } from "../services/NavigationService";

interface UsePaymentReturn {
  isLoading: boolean;
  createOrder: (amount: number) => Promise<any>;
}

export const usePayment = (): UsePaymentReturn => {
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 Order create function
  const createOrder = async (amount: number) => {
    setIsLoading(true);
    try {
      const response = await api.post("/payments/create-order", {
        amount: amount * 100, // Convert Rs → paise
      });

      // 🔹 Auth error handle yahin par
      if (
        response?.data?.err === "Authentication required" ||
        (response?.data?.message === "Failed" && response?.data?.data === null)
      ) {
        Alert.alert("Session Expired", "Please login again");
        NavigationService.navigate("PhoneNumberForm"); // apna login screen
        return;
      }

      return response.data;
    } catch (error: any) {
      console.error("Create Order Error:", error);
      Alert.alert("Error", "Failed to create order");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createOrder,
  };
};



