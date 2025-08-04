import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  NameAndAadharForm: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'NameAndAadharForm'>;

const NameAndAadharForm: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');

  const handleContinue = () => {
    if (!fullName.trim() || !aadharNumber.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    console.log('Full Name:', fullName);
    console.log('Aadhar Number:', aadharNumber);
    navigation.navigate('Home'); // Navigate to Home
  };

  return (
    <View style={styles.container}>
      {/* ✅ Image Header */}
      <Image source={require('../assets/load.jpg')} style={styles.logo} />
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <Text style={styles.label}>Aadhar Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Aadhar Number"
          value={aadharNumber}
          onChangeText={setAadharNumber}
          keyboardType="numeric"
          maxLength={12}
        />
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#00C72C',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NameAndAadharForm;
