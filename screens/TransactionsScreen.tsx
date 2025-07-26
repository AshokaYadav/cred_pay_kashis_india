import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TransactionScreen</Text>
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
