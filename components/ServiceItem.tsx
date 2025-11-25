import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

type ServiceItemProps = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

const ServiceItem = ({ icon, label, onPress }: ServiceItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="w-[25%] items-center mb-5"
  >
    <View className="bg-[#f5f5f5] p-4 rounded-full justify-center items-center shadow">
      {icon}
    </View>
    <Text className="text-xs font-bold text-[#333] mt-2 text-center">
      {label}
    </Text>
  </TouchableOpacity>
);

export default ServiceItem;
