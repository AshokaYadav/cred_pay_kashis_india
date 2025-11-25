import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

interface ServiceItem {
  name: string;
  icon: string;
}

const BillPaymentsScreen: React.FC = () => {
  const navigation = useNavigation();

  // 🔹 Service data
  const popularServices: ServiceItem[] = [
    { name: 'Mobile Postpaid', icon: '📱' },
    { name: 'FasTag Recharge', icon: '🚗' },
    { name: 'DTH/TV Recharge', icon: '📺' },
  ];

  const utilityServices: ServiceItem[] = [
    { name: 'Piped Gas', icon: '🔥' },
    { name: 'LPG Booking', icon: '🏺' },
    { name: 'Water', icon: '💧' },
    { name: 'Electricity', icon: '💡' },
    { name: 'Broadband', icon: '🌐' },
    { name: 'DataCard Prepaid', icon: '📶' },
    { name: 'Landline', icon: '☎️' },
    { name: 'Hospital', icon: '🏥' },
  ];

  const otherServices: ServiceItem[] = [
    { name: 'EMI Payment', icon: '💰' },
    { name: 'LIC/Insurance', icon: '🛡️' },
    { name: 'Municipality', icon: '🏛️' },
  ];

  // 🔹 Individual service card
  const ServiceCard: React.FC<ServiceItem> = ({ name, icon }) => (
    <TouchableOpacity className="bg-white rounded-lg m-1 p-4 shadow-sm border border-gray-200 items-center justify-center">
      <Text className="text-2xl mb-2">{icon}</Text>
      <Text
        className="text-xs text-gray-700 text-center font-medium"
        numberOfLines={2}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );

  // 🔹 Section component (Popular / Utilities / Others)
  interface SectionProps {
    title: string;
    services: ServiceItem[];
  }

  const Section: React.FC<SectionProps> = ({ title, services }) => {
    const filledServices = [...services];
    while (filledServices.length % 4 !== 0) {
      filledServices.push({ name: '', icon: '' });
    }

    return (
      <View className="mb-6">
        <Text className="text-lg font-bold text-gray-900 mb-3 px-4">{title}</Text>
        <View className="flex-row flex-wrap px-2">
          {filledServices.map((service, index) => (
            <View key={`${title}-${index}`} className="w-1/4">
              {service.name !== '' && (
                <ServiceCard name={service.name} icon={service.icon} />
              )}
            </View>
          ))}
        </View>
      </View>
    );
  };

  // 🔹 Main component return
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        {/* 🔸 Header */}
        <View className="bg-white px-4 py-4 border-b border-gray-200 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()} className="flex-row items-center">
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>

          <Text className="text-md font-bold text-gray-900">
            Bill Payments & Recharges
          </Text>

          <View style={{ width: 24 }} />
        </View>

        {/* 🔸 Bharat Connect Label */}
        <View className="flex items-end mr-3 mt-2">
          <View className="flex-row items-center">
            <Image
              source={require('../assets/Home/seeAll.png')}
              style={{ width: 20, height: 30 }}
              resizeMode="contain"
            />
            <Text className="text-blue-600 font-bold ml-2">Bharat Connect</Text>
          </View>
        </View>

        {/* 🔸 Sections */}
        <View className="bg-white mt-4 py-4">
          <Section title="Popular" services={popularServices} />
        </View>

        <View className="bg-white mt-4 py-4">
          <Section title="Utilities" services={utilityServices} />
        </View>

        <View className="bg-white mt-4 py-4">
          <Section title="Others" services={otherServices} />
        </View>

        {/* 🔸 Footer */}
        <View className="items-center py-8 mt-4 border-t border-gray-200 bg-white">
          <Text className="text-gray-500 text-sm mb-2">Powered by</Text>
          <View className="flex-row items-center">
            <Image
              source={require('../assets/Home/seeAll.png')}
              style={{ width: 25, height: 35 }}
              resizeMode="contain"
            />
            <Text className="text-blue-600 font-extrabold text-xl tracking-wide">
              Bharat Connect
            </Text>
          </View>
          <Text className="text-gray-400 text-xs mt-2">
            Fast • Secure • Reliable
          </Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default BillPaymentsScreen;
