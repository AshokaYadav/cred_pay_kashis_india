// DTHPlansScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import api from '../../lib/axios';

import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator ';
// import { RootStackParamList } from '../../navigation/RootNavigator';

type DTHPlansNavProp = NativeStackNavigationProp<RootStackParamList, 'DTHPlansScreen'>;
type DTHPlansRouteProp = RouteProp<RootStackParamList, 'D2HRechargeScreen'>;

export default function DTHPlansScreen() {
  const [plansData, setPlansData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [selectedCategory,  setSelectedCategory] = useState<string>('');
  const e = useRoute<RouteProp<RootStackParamList, 'DTHPlansScreen'>>();
const { categoryId:rechargeId } = e.params as { categoryId: string };

console.log("Received Category ID:", rechargeId);

   const navigation = useNavigation<DTHPlansNavProp>();
     const route = useRoute<DTHPlansRouteProp>();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await api.post(`/recharge/fetch-plans-dth`, {
        opCode: '24',
      });

      console.log('📡 API Response:', res?.data?.data);

      const allPlans = res?.data?.data?.RDATA || {};
      console.log(allPlans);
      setPlansData(allPlans);

      // ✅ Default first category select
      const firstCategory = Object.keys(allPlans)[0];
      if (firstCategory) setSelectedCategory(firstCategory);
    } catch (error) {
      console.error('❌ Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#16a34a" />
        <Text className="mt-2">Loading Plans...</Text>
      </View>
    );
  }

  const categories = Object.keys(plansData);

  return (
    <>
      <View className=" bg-white p-3">
        <Text className="text-lg font-bold mb-3">Available Plans</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row  h-16">
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <TouchableOpacity
                  key={cat}
                  onPress={() => setSelectedCategory(cat)}
                  className={`mr-3 px-5 py-2 rounded-full justify-center items-center ${
                    isActive ? 'bg-green-600' : 'bg-gray-300'
                  }`}>
                  <Text
                    className={`text-sm font-semibold ${
                      isActive ? 'text-white' : 'text-gray-800'
                    }`}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View className="flex-1 bg-white p-3">
        {/* 🔹 Plans list for selected category */}
        <FlatList
        className="mt-4"
        data={plansData[selectedCategory] || []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.replace('D2HRechargeScreen', {
              categoryId: rechargeId,
              selectedAmount: item.rs || item.amount,
            })}
            className="border border-gray-300 rounded-lg p-3 mb-2"
          >
            <Text className="font-bold text-lg">₹{item.rs || item.amount}</Text>
            <Text className="text-gray-700">{item.desc || item.description}</Text>
            <Text className="text-sm text-gray-500">Validity: {item.validity}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    </>
  );
}
