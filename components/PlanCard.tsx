import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  onPress: () => void;
}

export default function PlanCard({ plan, onPress }: PlanCardProps) {
    console.log(plan);
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-sm flex-row justify-between items-center"
    >
      {/* Left Side - Details */}
      <View className="flex-1 pr-3">
        <Text className="text-gray-900 text-lg font-bold">₹{plan.rs}</Text>

        <View className="flex-row mt-1">
          <Text className="text-gray-600 text-xs mr-4">
            Validity: <Text className="font-semibold">{plan.validity}</Text>
          </Text>
          {/* <Text className="text-gray-600 text-xs">
            Data: <Text className="font-semibold">{plan.data}</Text>
          </Text> */}
        </View>

        {/* Description */}
        {plan.desc && (
          <Text className="text-gray-500 text-xs mt-1" numberOfLines={2}>
            {plan.desc}
          </Text>
        )}

        {/* Tag / Note */}
        {/* {plan.tag && (
          <Text className="text-green-700 text-xs mt-2 font-semibold">
            {plan.tag}
          </Text>
        )} */}
      </View>

      {/* Right Side - Arrow */}
      <Ionicons name="chevron-forward" size={20} color="#6B7280" />
    </TouchableOpacity>
  );
}
