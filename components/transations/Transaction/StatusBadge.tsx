import React from 'react';
import { View, Text } from 'react-native';

type StatusType = 'SUCCESS' | 'PENDING' | 'FAILED' | string;

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getColors = () => {
    switch (status) {
      case 'SUCCESS':
        return {
          bg: 'bg-green-100 border border-green-500',
          text: 'text-green-700',
        };
      case 'PENDING':
        return {
          bg: 'bg-yellow-100 border border-yellow-500',
          text: 'text-yellow-700',
        };
      default:
        return {
          bg: 'bg-red-100 border border-red-500',
          text: 'text-red-700',
        };
    }
  };

  const { bg, text } = getColors();

  return (
    // <View className={`px-3  rounded-full ${bg}`}>
      <Text className={`font-semibold text-sm  px-3  rounded-full ${bg} ${text}`}>
        {status}
      </Text>
    // </View>
  );
};

export default StatusBadge;
