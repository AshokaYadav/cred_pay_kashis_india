// components/Header.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator ';
// import { RootStackParamList } from '../navigation/RootNavigator';

interface HeaderProps {
  operatorData: any;
  mobileNumber: string;
  circleData: any;
}

const Header: React.FC<HeaderProps> = ({ operatorData, mobileNumber, circleData }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      className="bg-white px-4 pt-4 pb-4 flex-row items-center 
                 shadow-md rounded-b-2xl"
      style={{ paddingTop: Platform.OS === 'ios' ? 50 : 50 }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
        <Ionicons name="arrow-back" size={32} color="#16a34a" />
      </TouchableOpacity>

      <View className="flex-row items-center">
        {operatorData?.image_url ? (
          <Image
            source={{
              uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}`,
            }}
            className="w-10 h-10 mr-3 rounded-full bg-white border border-gray-300"
            resizeMode="cover"
          />
        ) : (
          <View className="w-10 h-10 mr-3 rounded-full bg-green-100 justify-center items-center">
            <Text className="text-green-700 font-bold text-lg">
              {operatorData?.name?.charAt(0) || 'O'}
            </Text>
          </View>
        )}

        <View>
          <Text className="text-lg font-semibold text-gray-900">
            {operatorData?.name || 'Operator'}
          </Text>
          <Text className="text-sm text-gray-600">{mobileNumber}</Text>
          <Text className="text-sm text-gray-600">
            {circleData?.name || 'Circle'} • Prepaid
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;