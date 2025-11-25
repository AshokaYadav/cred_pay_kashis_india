import { useState, useEffect } from "react";
import { Alert, AppState, Linking } from "react-native";
import { NavigationService } from "../services/NavigationService";
import api from "../lib/axios";
import { API_TOKEN, USER_ID } from "../config";
import { useWallet } from "./useWallet";

export const useWalletPayment = (onClose: () => void,loadWallet:() => Promise<void>) => {
  const [pendingOrderId, setPendingOrderId] = useState<string | null>(null);
  const [isWaitingForPayment, setIsWaitingForPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //  const { loadWallet } = useWallet(USER_ID)






  // 🔹 Create Razorpay/UPI Order
  const createOrder = async (amount: number) => {
    setIsLoading(true);
    try {
      const response = await api.post("/payments/create-order", {
        amount: amount * 100, // Rs → paise
      });

      if (
        response?.data?.err === "Authentication required" ||
        (response?.data?.message === "Failed" && response?.data?.data === null)
      ) {
        Alert.alert("Session Expired", "Please login again");
        NavigationService.navigate("PhoneNumberForm");
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






  // 🔹 Open UPI App
  const openUpiApp = async (upiUrl: string) => {
    try {
      const canOpen = await Linking.canOpenURL(upiUrl);
      if (canOpen) {
        await Linking.openURL(upiUrl);
        setIsWaitingForPayment(true);
      } else {
        Alert.alert(
          "UPI App Not Found",
          "Please install a UPI app like PhonePe, Google Pay, or Paytm to make the payment."
        );
      }
    } catch (error) {
      console.error("Error opening UPI app:", error);
      Alert.alert("Error", "Failed to open UPI app");
    }
  };












  // 🔹 Verify Payment
  const handlePaymentVerification = async () => {
    if (!pendingOrderId) return;

    try {
      const response = await fetch(
        "https://api.recharge.kashishindiapvtltd.com/payments/check-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify({ id: pendingOrderId }),
        }
      );

      const result = await response.json();
      const paymentStatus = result?.data?.order;

      if (paymentStatus?.status === "paid" || paymentStatus?.success === true) {
        setIsWaitingForPayment(false);
        setPendingOrderId(null);
        loadWallet();

        if (onClose) onClose();
        // setShowMpinModal(true);
      } else if (paymentStatus?.status === "failed") {
        setIsWaitingForPayment(false);
        setPendingOrderId(null);
        Alert.alert("Payment Failed", "Your payment was not successful.");
      } else {
        Alert.alert("Payment Status", "Did you complete the payment?", [
          {
            text: "Not Yet",
            onPress: () => {
              setIsWaitingForPayment(false);
              setPendingOrderId(null);
            },
          },
          { text: "Yes, I Paid", onPress: () => setTimeout(handlePaymentVerification, 3000) },
        ]);
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      Alert.alert("Error", "Failed to verify payment status");
      setIsWaitingForPayment(false);
      setPendingOrderId(null);
    }
  };














  // 🔹 Main Payment Handler
  const handlePayment = async (Amt:number) => {
    try {
    //   if (walletData?.data?.balance >= plan?.rs) {
    //     // setShowMpinModal(true);
    //     return;
    //   }

      const orderData = await createOrder(Amt);

      console.log(orderData);

      if (orderData?.data?.qrTextContent) {
        setPendingOrderId(orderData.data.order_id);
        await openUpiApp(orderData.data.qrTextContent);
      } else {
        Alert.alert("Error", "Unable to generate UPI payment link");
      }
    } catch (error) {
      console.error("Payment process error:", error);
      Alert.alert("Payment Error", "Failed to initiate payment. Please try again.");
    }
  };





  // 🔹 Detect when user comes back from UPI app
  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === "active" && pendingOrderId && isWaitingForPayment) {
        setTimeout(() => handlePaymentVerification(), 2000);
      }
    };
    // Alert.alert('hee use effect')

    const subscription = AppState.addEventListener("change", handleAppStateChange);
    return () => subscription?.remove();
  }, [pendingOrderId, isWaitingForPayment]);







  return {
    // showMpinModal,
    // setShowMpinModal,
    isLoading,
    isWaitingForPayment,
    handlePayment,
  };
};
