import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerItem from './DrawerItem';
// import DrawerItem from './DrawerItem';

const DrawerContent: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Profile Section */}
      <View className="bg-green-600 p-5">
        <View className="w-16 h-16 rounded-full bg-white justify-center items-center mb-3">
          <Text className="text-lg font-bold text-green-800">GWB</Text>
        </View>
        <Text className="text-white text-lg font-bold mb-1">Gwge</Text>
        <Text className="text-white text-sm mb-1">8529670548</Text>
        <Text className="text-white text-sm">gulshankumari30803@t (Verify)</Text>
      </View>

      {/* Quick Actions */}
      <View className="flex-row justify-around p-4 bg-green-600 border-t border-white/20">
        <TouchableOpacity className="items-center">
          <Icon name="help-circle-outline" size={24} color="#fff" />
          <Text className="text-white text-xs mt-1">Help</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Icon name="key-outline" size={24} color="#fff" />
          <Text className="text-white text-xs mt-1">Reset PIN</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Icon name="globe-outline" size={24} color="#fff" />
          <Text className="text-white text-xs mt-1">Website</Text>
        </TouchableOpacity>
      </View>
      
      {/* Menu Heading */}
      <View className="px-4 py-2">
        <Text className="text-base font-bold text-gray-800">Menu</Text>
      </View>
      
      {/* Menu Items */}
      <ScrollView 
        className="flex-1 py-3"
        showsVerticalScrollIndicator={true}
      >
        <DrawerItem icon="person-circle-outline" label="My KYC" hasChevron />
        <DrawerItem icon="card-outline" label="My Bank Accounts" hasChevron />
        <DrawerItem icon="document-text-outline" label="Reports" hasChevron />
        <DrawerItem icon="lock-closed-outline" label="Screen Lock" hasChevron />
        <DrawerItem icon="information-circle-outline" label="About Us" hasChevron />
        <DrawerItem icon="help-outline" label="FAQs" hasChevron />
        <DrawerItem icon="chatbox-ellipses-outline" label="Feedback" hasChevron />
        <DrawerItem icon="star-outline" label="Rate Us" hasChevron />
        <DrawerItem icon="shield-checkmark-outline" label="Privacy Policy" hasChevron />
        <DrawerItem icon="document-outline" label="Terms & Conditions" hasChevron />
        <DrawerItem icon="lock-closed-outline" label="Screen Lock" hasChevron />
        <DrawerItem icon="information-circle-outline" label="About Us" hasChevron />
        <DrawerItem icon="help-outline" label="FAQs" hasChevron />
        <DrawerItem icon="chatbox-ellipses-outline" label="Feedback" hasChevron />
        <DrawerItem icon="star-outline" label="Rate Us" hasChevron />
        <DrawerItem icon="shield-checkmark-outline" label="Privacy Policy" hasChevron />
        <DrawerItem icon="document-outline" label="Terms & Conditions" hasChevron />
      </ScrollView>
    </View>
  );
};

export default DrawerContent;