import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RechargeGrid from '../components/RechargeGrid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_TOKEN, setToken, setUserData, setUserId } from '../config';
import { useWallet } from '../hooks/useWallet';
import { useCategories } from '../hooks/useCategories';

const HomeScreen: React.FC = () => {

   const [tokenn, setTokenn] = useState<string>("");

  
  useEffect(() => {
    const getUserData = async () => {
      const stored = await AsyncStorage.getItem('userData');
      if (stored) {
        const userData = JSON.parse(stored);
        console.log('User Data:', userData);

        setUserData(userData);

        setToken(userData.token);
        setUserId(userData?.user?.userId);
         setTokenn(userData.token); // ✅ yahan state update hoga
      }
    };

    getUserData();
  }, []);

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Logo */}
        <Image
          source={require('../assets/load.jpg')}
          className="w-4/5 h-24 resize-contain rounded-xl self-center mb-4"
        />

        {/* Search Input */}
        <TextInput
          className="bg-white p-3.5 rounded-xl text-base border border-gray-300 mb-5 shadow"
          placeholder="Search services..."
          placeholderTextColor="#999"
        />

        {/* Header */}
        <View className="flex-row mb-5">
          {/* Profile Box */}
          <View className="flex-1.2 bg-white p-3.5 rounded-xl shadow mr-2">
            <Text className="text-base font-bold text-gray-800 mb-1">
              Ajeet Kadam
            </Text>
            <Text className="text-sm text-gray-500">Main Balance</Text>
            <View className="flex-row items-center mt-1.5">
              <FontAwesome name="money" size={20} color="#28a745" />
              <Text className="text-lg text-green-600 font-bold ml-1.5">
                ₹ 9000
              </Text>
            </View>
          </View>

          {/* Actions */}
          <View className="flex-1 justify-between">
            <TouchableOpacity className="bg-blue-500 py-3 rounded-xl items-center mb-2 shadow">
              <MaterialCommunityIcons name="gift" size={24} color="#fff" />
              <Text className="text-xs text-white font-semibold mt-1">Refer</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-blue-500 py-3 rounded-xl items-center shadow">
              <AntDesign name="pluscircle" size={24} color="#fff" />
              <Text className="text-xs text-white font-semibold mt-1">Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recharge Banner */}
        <View className="rounded-xl overflow-hidden my-2.5 mb-5">
          <Image
            source={require('../assets/recharge.jpg')}
            className="w-full h-44 resize-cover"
          />
        </View>

        {/* Recharge Grid Component */}
        <RechargeGrid token={tokenn} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;