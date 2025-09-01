import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerItemProps } from '../Types/navigation';

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, label, onPress, hasChevron }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between py-3 px-5"
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        <Icon 
          name={icon} 
          size={22} 
          color="green" 
          style={{ marginRight: 16, width: 24 }} 
        />
        <Text className="text-base text-gray-800 flex-1">{label}</Text>
      </View>
      {hasChevron && (
        <Icon name="chevron-forward" size={20} color="#ccc" />
      )}
    </TouchableOpacity>
  );
};

export default DrawerItem;