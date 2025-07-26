// components/PlanCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlanCardProps {
  amount: string;
  validity: string;
  dataPerDay: string;
  voice: string;
  number: string;
  name: string;
  circle: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ amount, validity, dataPerDay, voice, number, name, circle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.amount}>₹{amount}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{circle} - {number}</Text>

      <View style={styles.detailsRow}>
        <Text style={styles.detail}>{validity}</Text>
        <Text style={styles.detail}>{dataPerDay} Data/Day</Text>
        <Text style={styles.detail}>{voice}</Text>
      </View>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    marginVertical: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  number: {
    fontSize: 14,
    color: '#666',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detail: {
    fontSize: 14,
    color: '#444',
  },
});
