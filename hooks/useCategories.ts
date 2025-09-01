import { useEffect, useState } from "react";
import { API_TOKEN } from "../config";
import { Alert } from "react-native";

type Category = {
  id: string;
  name: string;
  status: string;
};

export const useCategories = (token: string) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(token);

  useEffect(() => {
    
    const fetchCategories = async () => {
      try {
        console.log('hi');
        const response = await fetch(
          "https://api.recharge.kashishindiapvtltd.com/categories/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // 👈 token add here
            },
          }
        );

        const result = await response.json();
        // Alert.alert('hal')
        console.log('hi')
        console.log(result);

        if (result.message === "Success" && result.data) {
          setCategories(result.data);
        } else {
          setError("Failed to fetch categories");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchCategories();
    }
  }, [token]);

  return { categories, loading, error };
};
