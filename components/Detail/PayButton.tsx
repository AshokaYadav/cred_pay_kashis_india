// components/PayButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface PayButtonProps {
  isLoading: boolean;
  onPress: () => void;
}

const PayButton: React.FC<PayButtonProps> = ({ isLoading, onPress }) => {
  return (
    <TouchableOpacity
      className="absolute bottom-5 left-5 right-5 bg-green-500 py-3 rounded-full shadow-lg"
      onPress={onPress}
      disabled={isLoading}
    >
      <Text className="text-white text-xl font-bold text-center">
        {isLoading ? 'Processing...' : 'Pay'}
      </Text>
    </TouchableOpacity>
  );
};

export default PayButton;