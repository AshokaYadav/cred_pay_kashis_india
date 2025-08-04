import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// ✅ Navigation types define karna zaroori hai
type RootStackParamList = {
  PhoneNumberForm: undefined;
  OTPScreen: { phoneNumber: string }; // 👈 phoneNumber param bhejna hai
  RegisterScreen: { phoneNumber: string }; // 👈 yahan bhi bhejna hai
};

type Props = NativeStackScreenProps<RootStackParamList, 'PhoneNumberForm'>;

const PhoneNumberForm: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const handleSubmit = async () => {
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter your phone number.');
      return;
    }

    try {
      const response = await fetch(`https://api.recharge.kashishindiapvtltd.com/auth/login-app`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phoneNumber }),
      });

      console.log(response);

      

      if (response.status === 200) {
        navigation.navigate('OTPScreen', { phoneNumber });
      } else if (response.status === 404) {
        navigation.navigate('RegisterScreen', { phoneNumber });

      } else {
        const error = await response.json();
        Alert.alert('Error', error.message || 'Unexpected response');
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Network Error', error.message || 'Something went wrong');
    }
  };

  // const handleSubmit = () => {
  //   if (!phoneNumber.trim()) {
  //     Alert.alert('Error', 'Please enter your phone number.');
  //     return;
  //   }
  //   console.log('Phone Number:', phoneNumber);
  //   navigation.navigate('OTPScreen'); // ✅ Type-safe navigation
  // };

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/load.jpg')} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="(+91) 123 456 7890"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            tintColors={{ true: 'green', false: 'green' }}
          />
          <Text style={styles.checkboxText}>
            By proceeding, you allow KredPay to fetch your current and future plan expiry information.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign In using Mobile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    padding: 20,
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
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
    flex: 1,
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

export default PhoneNumberForm;
