import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QRScreen = () => {
  return (
    <View style={styles.container}>
      <Text>QRScreen</Text>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
