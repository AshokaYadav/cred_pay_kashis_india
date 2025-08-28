import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function LoadingSpinner() {
  return (
    <View className="justify-center items-center h-24">
      <ActivityIndicator size="large" color="#E53E3E" />
    </View>
  );
}