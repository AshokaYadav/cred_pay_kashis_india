// screens/drawerScreen/AboutUsScreen.tsx
import React from 'react';
import {View, Text, ScrollView, Pressable, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutUsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-white px-4 pb-4 flex-row items-center shadow-md rounded-b-2xl"
        style={{paddingTop: Platform.OS === 'ios' ? 15 : 15}}>
        <Pressable onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={32} color="#16a34a" />
        </Pressable>

        <Text className="text-xl font-semibold text-gray-800">About Us</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={true}>
        <Text className="text-sm text-gray-800 leading-6">
          KredPay makes the recharge of prepaid DTH account quick and
          comfortable. You do not have to visit the retail outlets for getting
          your online DTH account recharged. Online DTH Recharge through KredPay
          Recharge facilitates recharging of prepaid DTH account for operators
          like Dish TV, Big TV, Sun Direct, Videocon D2H and Tata Sky.{'\n\n'}
          Data card recharging service is another amenity that furthers in the
          list of the services provided by us. Through our data card recharge
          service you can recharge prepaid data card connection easily and
          instantly for BSNL Data Card, Idea Data Card, Reliance Netconnect. You
          can now recharge the prepaid data card using our online recharging
          facility. So, the customers can now enjoy the benefit of anytime and
          anywhere connectivity via Internet wirelessly.{'\n\n'}
          History of KredPay{'\n'}
          Mobile phones have become an important component of our daily life.
          It's hard to imagine your life without mobile. Gone are the days when
          it was regarded as a necessity for rich. Mobile phones have become a
          necessity for everyone these days. But a mobile without talktime is
          absolutely useless. Catering to this need of mobile users we provide
          instant and easy online recharge of prepaid mobile.{'\n\n'}
          KredPay Recharge provides service in India for the mobile networks
          like Airtel, BSNL ,BSNL - Validity and Vodafone. Our online recharge
          service is convenient and fast that facilitates recharge of prepaid
          mobile at competitive prices through internet. Recharging is simple,
          convenient, secure and totally.{'\n\n'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutUsScreen;
