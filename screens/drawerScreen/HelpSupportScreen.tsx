// src/screens/HelpSupportScreen.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Linking,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HelpSupportScreenProps {
  onGoBack?: () => void;
}

const HelpSupportScreen: React.FC<HelpSupportScreenProps> = ({onGoBack}) => {
  const handleCall = (phoneNumber: string) => {
    Alert.alert('Make a Call', `Do you want to call ${phoneNumber}?`, [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Call', onPress: () => Linking.openURL(`tel:${phoneNumber}`)},
    ]);
  };

  const handleWhatsApp = (phoneNumber: string) => {
    Linking.openURL(`https://wa.me/${phoneNumber}?text=Hello, I need help`);
  };

  const handleEmail = () => {
    Linking.openURL('mailto:Support@kredpay.in?subject=Support Request');
  };

  const handleSocialMedia = (url: string) => {
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'Could not open link'),
    );
  };

  const ContactButton = ({icon, label, color, bgColor, onPress}: any) => (
    <Pressable
      className={`flex-row items-center justify-center px-5 py-3 rounded-xl flex-1 mx-1 ${bgColor} active:opacity-80`}
      onPress={onPress}>
      <Icon name={icon} size={22} color={color} />
      <Text className={`ml-2 font-semibold`} style={{color}}>
        {label}
      </Text>
    </Pressable>
  );

  const InfoCard = ({icon, title, subtitle, onPress}: any) => (
    <Pressable
      className="flex-row items-center bg-white p-4 rounded-2xl shadow mb-3"
      onPress={onPress}>
      <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mr-4">
        <Text className="text-xl">{icon}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-gray-900 font-medium text-base">{title}</Text>
        {subtitle && (
          <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>
        )}
      </View>
      {onPress && <Icon name="chevron-forward" size={20} color="#9CA3AF" />}
    </Pressable>
  );

  const ServiceCard = ({title, subtitle, onPress}: any) => (
    <Pressable
      className="bg-white p-4 rounded-2xl shadow mb-3 border border-gray-100 active:bg-gray-50"
      onPress={onPress}>
      <Text className="text-gray-900 font-semibold text-base">{title}</Text>
      {subtitle && (
        <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>
      )}
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Header */}
      <View className="bg-green-600 px-4 pt-8 pb-3 shadow-md">
        <View className="flex-row items-center">
          <Pressable className="mr-3 p-1" onPress={onGoBack}>
            <Icon name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-xl font-bold flex-1">
            Help & Support
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{paddingBottom: 20}}>
        {/* Welcome */}
        <View className="mx-4 mt-6 rounded-3xl overflow-hidden shadow-lg">
          {/* Gradient background */}
          <View
            className="p-6 items-center"
            style={{
              backgroundColor: '#16a34a', // dark green
              // ya gradient ke liye Expo LinearGradient bhi use kar sakte ho
            }}>
            {/* Circle Icon with shadow */}
            <View className="w-20 h-20 bg-white/20 rounded-full items-center justify-center mb-4 shadow-lg">
              <Icon name="headset-outline" size={36} color="white" />
            </View>

            {/* Title */}
            <Text className="text-white text-2xl font-extrabold mb-2 text-center">
              Need Help?
            </Text>

            {/* Subtitle */}
            <Text className="text-white/90 text-center text-sm mb-4">
              Our support team is ready to assist you via Call, WhatsApp, or
              Email
            </Text>

            {/* Quick Action Buttons inside welcome card */}
            {/* <View className="flex-row mt-2 w-full justify-center space-x-3">
              <Pressable
                className="flex-row items-center px-4 py-2 bg-white/20 rounded-full active:opacity-80"
                onPress={() => handleCall('+919797517555')}>
                <Icon name="call" size={20} color="white" />
                <Text className="text-white ml-2 font-semibold">Tab to call</Text>
              </Pressable>

              <Pressable
                className="flex-row items-center px-4 py-2 bg-white/20 rounded-full active:opacity-80"
                onPress={() => handleWhatsApp('+919797517555')}>
                <Icon name="logo-whatsapp" size={20} color="white" />
                <Text className="text-white ml-2 font-semibold">WhatsApp</Text>
              </Pressable>
            </View> */}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mx-4 mt-6">
          <Text className="text-gray-900 text-lg font-bold mb-3">
            Contact Us
          </Text>
          <View className="flex-row mb-4">
            <ContactButton
              icon="call"
              label="Call Now"
              color="#3B82F6"
              bgColor="bg-blue-50"
              onPress={() => handleCall('+919797517555')}
            />
            <ContactButton
              icon="logo-whatsapp"
              label="WhatsApp"
              color="#16A34A"
              bgColor="bg-green-50"
              onPress={() => handleWhatsApp('+919797517555')}
            />
          </View>
        </View>

        {/* Info Cards */}
        <View className="mx-4 mt-2">
          {/* <InfoCard
            icon="📞"
            title="Phone Support"
            subtitle="9797517555 (24/7)"
            onPress={() => handleCall('9797517555')}
          />
          <InfoCard
            icon="💬"
            title="WhatsApp Support"
            subtitle="Chat instantly"
            onPress={() => handleWhatsApp('9797517555')}
          /> */}
          <InfoCard
            icon="✉️"
            title="Email Support"
            subtitle="Support@kredpay.in"
            onPress={handleEmail}
          />
          <InfoCard
            icon="📍"
            title="Office Address"
            subtitle="Jtm Mall, 2nd Floor, jaipur,JTM Mall , jagatpura railway station, near Jaipur, Jagatpura, Jaipur, Rajasthan 302017"
          />
          <InfoCard
            icon="🕐"
            title="Business Hours"
            subtitle="Mon-Saturday 9AM to 11PM"
          />
        </View>

        {/* Social Media */}
        <View className="mx-4 mt-6 mb-12">
          <Text className="text-gray-900 text-lg font-bold mb-3">
            Follow Us
          </Text>
          <View className="flex-row justify-between">
            <Pressable
              className="flex-1 mx-1 py-3 bg-red-50 rounded-2xl items-center active:opacity-80"
              onPress={() => handleSocialMedia('https://youtube.com/')}>
              <Icon name="logo-youtube" size={28} color="#EF4444" />
              <Text className="text-red-600 font-semibold mt-1 text-sm">
                YouTube
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 mx-1 py-3 bg-pink-50 rounded-2xl items-center active:opacity-80"
              onPress={() => handleSocialMedia('https://instagram.com')}>
              <Icon name="logo-instagram" size={28} color="#EC4899" />
              <Text className="text-pink-600 font-semibold mt-1 text-sm">
                Instagram
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 mx-1 py-3 bg-blue-50 rounded-2xl items-center active:opacity-80"
              onPress={() => handleSocialMedia('https://facebook.com/')}>
              <Icon name="logo-facebook" size={28} color="#3B82F6" />
              <Text className="text-blue-600 font-semibold mt-1 text-sm">
                Facebook
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpSupportScreen;
