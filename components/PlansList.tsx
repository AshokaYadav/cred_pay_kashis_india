import React from 'react';
import { View } from 'react-native';
import PlanCard from './PlanCard';
import { Plan } from '../types';

interface PlansListProps {
  plans: Plan[];
  onNavigate: (plan: Plan) => void;
}

export default function PlansList({ plans, onNavigate }: PlansListProps) {
  return (
    <View className="mb-5">
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} onPress={() => onNavigate(plan)} />
      ))}
    </View>
  );
}