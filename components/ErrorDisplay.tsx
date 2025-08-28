import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ErrorDisplayProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  return (
    <View className="justify-center items-center py-12">
      <Ionicons name="warning-outline" size={48} color="#E53E3E" />
      <Text className="text-red-600 text-base font-semibold mt-4 text-center px-6">
        {error}
      </Text>
      <TouchableOpacity 
        className="bg-red-600 rounded px-6 py-3 mt-4"
        onPress={onRetry}>
        <Text className="text-white text-base font-semibold">Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}