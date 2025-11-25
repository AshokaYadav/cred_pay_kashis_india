import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  RegisterScreen: { phoneNumber: string };
  NameAndAadharForm: undefined;
  MainApp: undefined;
  PhoneNumberForm: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

const RegisterScreen: React.FC<Props> = ({ route, navigation }) => {
  const { phoneNumber } = route.params;

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState(phoneNumber);
  const [email, setEmail] = useState('');
  const [role] = useState('APP_USER');

  const isFormValid =
    name.trim() !== '' && mobile.trim() !== '' && email.trim() !== '';

  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    try {
      const response = await fetch(
        'https://api.recharge.kashishindiapvtltd.com/user/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, mobile, email, role }),
        }
      );

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (jsonError) {
        console.error('Invalid JSON:', text);
        throw new Error('Server did not return valid JSON.');
      }

      if (response.ok) {
        Alert.alert('Success', 'Registered Successfully!');
        navigation.navigate('PhoneNumberForm');
      } else {
        Alert.alert('Failed', data?.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 bg-white">
          {/* ✅ Header */}
          <View className="bg-green-600 w-full rounded-b-2xl py-12 items-center mb-5">
            <View className="bg-white h-20 w-20 rounded-full justify-center items-center">
              <Text className="font-bold text-2xl text-green-600">KRED</Text>
              <Text className="text-xs text-green-600">PAY</Text>
            </View>
          </View>

          <ScrollView
            className="px-5 pt-7"
            contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            <Text className="text-lg font-bold mb-6">
              Let's register to access!
            </Text>

            <TextInput
              className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-4 text-base text-black"
              placeholder="Your Name"
              value={name}
              placeholderTextColor="#000"
              onChangeText={setName}
            />

            <TextInput
              className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-4 text-base text-black"
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={mobile}
              placeholderTextColor="#000"
              onChangeText={setMobile}
            />
  
            <TextInput
              className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-4 text-base text-black"
              placeholder="Your E-mail"
              keyboardType="email-address"
              value={email}
              placeholderTextColor="#000"
              onChangeText={setEmail}
            />

            <TouchableOpacity>
              <Text className="text-green-600 text-sm self-end mb-6">
                Have an Invite Code?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`w-full py-4 rounded-lg items-center mb-4 ${
                isFormValid ? 'bg-green-600' : 'bg-gray-300'
              }`}
              onPress={handleRegister}
              disabled={!isFormValid}
            >
              <Text
                className={`text-base font-bold ${
                  isFormValid ? 'text-white' : 'text-gray-500'
                }`}
              >
                Register
              </Text>
            </TouchableOpacity>

            <Text className="my-2 font-semibold">OR</Text>
            <Text>
              Have an account?{' '}
              <Text className="text-green-600 font-bold">Login</Text>
            </Text>
          </ScrollView>

          {/* ✅ Help Section */}
          <View className="flex-row items-center justify-center gap-2 p-4 border-t border-gray-200 bg-white">
            <Text className="font-semibold">Need help?</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:+918502949494')}>
              <Text className="text-green-600 ml-1">📞 Call Us</Text>
            </TouchableOpacity>
            <Text className="text-lg">|</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://wa.me/918502949494')}
            >
              <Text className="text-green-600 ml-1">💬 WhatsApp Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
