import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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

  const isFormValid = name.trim() !== '' && mobile.trim() !== '' && email.trim() !== '';

  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }
    console.log('this is aksha')

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
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'MainApp' }],
        // });
        navigation.navigate('PhoneNumberForm')
      } else {
        Alert.alert('Failed', data?.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>KRED</Text>
              <Text style={styles.logoSubText}>PAY</Text>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Let's register to access!</Text>

            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={name}
              placeholderTextColor="#000"
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={mobile}
              placeholderTextColor="#000"
              onChangeText={setMobile}
            />

            <TextInput
              style={styles.input}
              placeholder="Your E-mail"
              keyboardType="email-address"
              value={email}
              placeholderTextColor="#000"  
              onChangeText={setEmail}
            />

            <TouchableOpacity>
              <Text style={styles.inviteCode}>Have an Invite Code?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={isFormValid ? styles.registerButton : styles.disabledButton}
              onPress={handleRegister}
              disabled={!isFormValid}
            >
              <Text style={isFormValid ? styles.registerButtonText : styles.disabledButtonText}>
                Register
              </Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>
            <Text>
              Have an account? <Text style={styles.loginLink}>Login</Text>
            </Text>
          </ScrollView>

          {/* Help */}
          <View style={styles.helpContainer}>
            <Text style={{ fontWeight: '600' }}>Need help?</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:+918502949494')}>
              <Text style={styles.callText}>📞 Call Us</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18 }}>|</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/918502949494')}>
              <Text style={styles.whatsappText}>💬 WhatsApp Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#0049FF',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoCircle: {
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#0049FF',
  },
  logoSubText: {
    fontSize: 10,
    color: '#0049FF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    
    //  backgroundColor: '#0049FF', // ya #fff
  color: '#000', // text color  
  },
  inviteCode: {
    color: '#0049FF',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#0049FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    width: '100%',
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  disabledButtonText: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 10,
    fontWeight: '600',
  },
  loginLink: {
    color: '#0049FF',
    fontWeight: 'bold',
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  callText: {
    color: '#007BFF',
    marginLeft: 5,
  },
  whatsappText: {
    color: '#25D366',
    marginLeft: 5,
  },
});

export default RegisterScreen;
