import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Navigation types define
type RootStackParamList = {
  OTPScreen: {phoneNumber: string}; // 👈 yahan phoneNumber bhejenge
  NameAndAadharForm: undefined;
  MainApp: undefined; // ✅ Add this line
};

type Props = NativeStackScreenProps<RootStackParamList, 'OTPScreen'>;

const OTPScreen: React.FC<Props> = ({navigation, route}) => {
  const {phoneNumber} = route.params; // 👈 yahan se milta hai
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const inputRefs = useRef<TextInput[]>([]);

  console.log(phoneNumber);

  const handleOTPChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // ✅ Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 4) {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP.');
      return;
    }

    try {
      const response = await fetch(
        'https://api.recharge.kashishindiapvtltd.com/auth/verify-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            otp: enteredOtp,
            token: phoneNumber, // 👈 Use actual token if required
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'OTP Verified Successfully!');

        // ✅ Store response data (e.g. token or user info)
        await AsyncStorage.setItem('userData', JSON.stringify(data));

        // ✅ Navigate to tab stack
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      } else {
        Alert.alert('Failed', data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
      Alert.alert('Error', 'Something went wrong while verifying OTP.');
    }
  };

  return (
    <View style={styles.container}>
      {/* ✅ इमेज ऐड की */}
      <Image source={require('../assets/load.jpg')} style={styles.logo} />
      <Text style={styles.title}>OTP Sent on (+91) {phoneNumber}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => {
              if (el) inputRefs.current[index] = el;
            }}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={value => handleOTPChange(index, value)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 60,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00C72C',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
