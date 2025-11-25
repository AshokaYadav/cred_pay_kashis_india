import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  PhoneNumberForm: undefined;
  OTPScreen: {phoneNumber: string};
  RegisterScreen: {phoneNumber: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'PhoneNumberForm'>;

const PhoneNumberForm: React.FC<Props> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (mobile: string) => {
    if (!mobile.trim()) {
      Alert.alert('Error', 'Please enter your phone number.');
      return;
    }

    console.log('Final Mobile:', mobile);

    try {
      const response = await fetch(
        `https://api.recharge.kashishindiapvtltd.com/auth/login-app`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({mobile}),
        },
      );

      console.log('Response:', response);

      if (response.status === 200) {
        navigation.navigate('OTPScreen', {phoneNumber: mobile});
      } else if (response.status === 404) {
        navigation.navigate('RegisterScreen', {phoneNumber: mobile});
      } else {
        const error = await response.json();
        Alert.alert('Error', error.message || 'Unexpected response');
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Network Error', error.message || 'Something went wrong');
    }
  };

  const handleChange = (text: string) => {
    setPhoneNumber(text);
    console.log('Typing:', text);

    // 10 digit complete hote hi submit
    if (text.length === 10) {
      handleSubmit(text); // ✅ yaha latest text pass kar rahe hain
    }
  };

  return (
    <View className="flex-1 w-full bg-white items-center justify-center relative">
      {/* Logo */}
      <Image
        source={require('../assets/load.jpg')}
        className="w-[300px] h-[100px] mb-5"
        resizeMode="contain"
      />

      {/* Input Box */}
      <View className="w-full px-8">
        <TextInput
          ref={inputRef}
          className="h-16 border border-gray-300 rounded-full px-4  bg-white mb-5 text-2xl pl-8"
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handleChange}
          maxLength={10}
        />
      </View>

      {/* Fixed Bottom Section */}
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-center gap-4 p-6 border-t border-gray-200 bg-white">
        <Text className="font-semibold">Need help?</Text>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+919797517555')}>
          <Text className="text-green-600 ml-1">📞 Call Us</Text>
        </TouchableOpacity>
        <Text className="text-lg">|</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://wa.me/919797517555')}>
          <Text className="text-green-600 ml-1">💬 WhatsApp Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumberForm;
