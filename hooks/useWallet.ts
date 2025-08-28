import { useState, useEffect } from "react";
import { API_TOKEN, API_URL, USER_ID } from "../config";
// import { API_URL, API_TOKEN, USER_ID } from "react-native-config";

export const useWallet = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 

  useEffect(() => {
    console.log(API_TOKEN);
    console.log(API_URL);
    console.log(USER_ID);
    const fetchWallet = async () => {
      try {
        const response = await fetch(`${API_URL}/wallet/getByUserId`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            userId: USER_ID,
          }).toString(),
        });

        const json = await response.json();

        if (json.err) {
          setError(json.err);
        } else {
          setData(json);
        }
      } catch (err) {
        console.error("Wallet fetch error:", err);
        setError("Failed to fetch wallet data");
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  return { data, loading, error };
};