import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RechargeGrid from '../components/RechargeGrid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  API_TOKEN,
  setToken,
  setUserData,
  setUserId,
  USER_DATA,
  USER_ID,
} from '../config';
// import {useWallet} from '../hooks/useWallet';
import {useCategories} from '../hooks/useCategories';
import {useWalletPayment} from '../hooks/useWalletPayment';
import PaymentModal from '../components/HomeModal/PaymentModal';
import {fetchWallet} from '../services/walletService';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useWallet} from '../hooks/useWallet';
import { RootStackParamList } from '../navigation/RootNavigator ';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const HomeScreen: React.FC = () => {
  
  const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [tokenn, setTokenn] = useState<string>('');
  //  const {isLoading,isWaitingForPayment,handlePayment}=useWalletPayment();
  const [showModal, setShowModal] = useState(false);
  // const {data} = useWallet();
  console.log(API_TOKEN);
  
  const {data, loadWallet} = useWallet(USER_ID);

  const [balance, setBalance] = useState<number | null>(null);

  useFocusEffect(
    useCallback(() => {
      const getUserData = async () => {
        const stored = await AsyncStorage.getItem('userData');
        if (stored) {
          const userData = JSON.parse(stored);

          setUserData(userData);
          setToken(userData.token);
          setUserId(userData?.user?.userId);
          setTokenn(userData.token);
          // loadWallet();

        }
      };

      getUserData();
    }, []),
  );

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
              {USER_DATA?.user?.name
                ? USER_DATA.user.name.split(' ')[0].charAt(0).toUpperCase() +
                  USER_DATA.user.name.split(' ')[0].slice(1)
                : ''}
            </Text>

            <Text className="text-sm text-gray-500">Main Balance</Text>
            <View className="flex-row items-center mt-1.5">
              <FontAwesome name="money" size={20} color="#28a745" />
              <Text className="text-lg text-green-600 font-bold ml-1.5">
                ₹{data?.data?.balance ?? '...'}
              </Text>
            </View>
          </View>

          {/* Actions */}
          <View className="flex-1 justify-between">
            <TouchableOpacity
             onPress={() => navigation.navigate("MarginRatesScreen")}
            className="bg-blue-500 py-3 rounded-xl items-center mb-2 shadow">
              <MaterialCommunityIcons name="gift" size={24} color="#fff" />
              <Text className="text-xs text-white font-semibold mt-1">
                Commission
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-blue-500 py-3 rounded-xl items-center shadow"
              onPress={() => setShowModal(true)}>
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
      <PaymentModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        loadWallet={loadWallet}
      />
    </View>
  );
};

export default HomeScreen;
