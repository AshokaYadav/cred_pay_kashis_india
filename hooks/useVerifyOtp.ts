import { useState } from "react";
// import axiosInstance from "../api/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../lib/axiosInstance";

export const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);

  const verifyOtp = async (otp: string, phoneNumber: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/auth/verify-otp", {
        otp,
        token: phoneNumber,
      });

      // ✅ Save user data on success
      await AsyncStorage.setItem("userData", JSON.stringify(response.data));

      return { success: true, data: response.data };
    } catch (error: any) {
      console.error("OTP verification failed:", error?.response?.data || error);
      return {
        success: false,
        message:
          error?.response?.data?.message || "Something went wrong while verifying OTP.",
      };
    } finally {
      setLoading(false);
    }
  };

  return { verifyOtp, loading };
};
