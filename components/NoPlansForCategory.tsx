import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NoPlansForCategory() {
  return (
    <View className="justify-center items-center py-8">
      <Ionicons name="sad-outline" size={48} color="#718096" />
      <Text className="text-gray-500 text-base mt-4">No plans found for this category</Text>
    </View>
  );
}