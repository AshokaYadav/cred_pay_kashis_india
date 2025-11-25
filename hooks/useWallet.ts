import { useEffect, useState, useCallback } from "react";
import { fetchWallet } from "../services/walletService";
import { Alert } from "react-native";

export const useWallet = (userId: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadWallet = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    try {
      const walletData = await fetchWallet(userId);
      setData(walletData);
      setError(null);
    } catch (err: any) {
      // console.warn("Wallet fetch error:", err.message);
      setError(err.message || "Failed to fetch wallet");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      loadWallet();
    }
  }, [userId, loadWallet]);

  return { data, loading, error, loadWallet };
};

