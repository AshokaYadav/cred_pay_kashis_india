// components/PlanDetailsCard.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Plan } from '../../types';

interface PlanDetailsCardProps {
  plan: Plan;
}

const PlanDetailsCard: React.FC<PlanDetailsCardProps> = ({ plan }) => {
  return (
    <View className='m-2'>
      <View className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 rounded-3xl p-8 relative">
        {/* Amount Section */}
        <View className="items-center mb-6">
          <Text className="text-5xl font-extrabold text-green-600">
            ₹{plan?.rs}
          </Text>
        </View>

        {/* Plan Benefits */}
        <View className="space-y-4">
          {/* Validity */}
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={20} color="#16a34a" />
            <Text className="ml-2 text-lg font-semibold text-green-600">
              Validity: {plan?.validity}
            </Text>
          </View>

          {/* Dynamic Description */}
          <View className="mt-3 space-y-3">
            {plan?.desc?.split('|').map((item: string, index: number) => {
              const trimmed = item.trim();
              let icon = 'gift-outline';

              if (trimmed.toLowerCase().includes('call')) icon = 'call-outline';
              else if (trimmed.toLowerCase().includes('data')) icon = 'wifi-outline';
              else if (trimmed.toLowerCase().includes('sms')) icon = 'chatbox-outline';
              else if (trimmed.toLowerCase().includes('validity')) icon = 'time-outline';

              return (
                <View key={index} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all flex-row items-start">
                  <Ionicons name={icon as any} size={20} color="#16a34a" />
                  <Text className="ml-3 text-base text-gray-800 font-medium flex-1">
                    {trimmed}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlanDetailsCard;
