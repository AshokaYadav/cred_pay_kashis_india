import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type ServiceItemProps = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

const ServiceItem = ({ icon, label, onPress }: ServiceItemProps) => (
  <TouchableOpacity style={styles.serviceBoxGrid} onPress={onPress}>
    <View style={styles.iconWrapper}>{icon}</View>
    <Text style={styles.serviceText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  serviceBoxGrid: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  serviceText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ServiceItem;
