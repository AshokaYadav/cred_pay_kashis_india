import api from "../lib/axios";
import { useEffect, useState } from "react";

type Category = {
  id: string;
  name: string;
  status: string;
};

export const useCategories = (token: string) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {7
        const response = await api.get("/categories/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.message === "Success" && response.data.data) {
          setCategories(response.data.data);
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
