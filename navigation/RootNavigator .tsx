import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import {View, Text, Button} from 'react-native';
import BottomTabs from './BottomTabs';
import RechargeScreen from '../screens/RechargeScreen';
import PlanDetailsScreen from '../screens/PlanDetailsScreen';
import PlanDetailsScreen1 from '../screens/PlanDetailsScreen1';
import RechargeSuccessScreen from '../screens/RechargeSuccessScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PhoneNumberForm from '../screens/PhoneNumberForm';
import OTPScreen from '../screens/OTPScreen';

// Root Stack Navigator
export type RootStackParamList = {
  Login: undefined;
  MainApp: undefined;
  Recharge: undefined;
  PlanDetailsScreen: {
    plan: {price: string; days: string; data: string; voice: string};
  };
   PlanDetailsScreen1: {
    plan: {rs: number; validity: string; desc: string;};
  };
  RechargeSuccessScreen: undefined;
  RegisterScreen: {phoneNumber: string};
  PhoneNumberForm: undefined;
  OTPScreen: {phoneNumber: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {props => (
            <LoginScreen
              {...props}
              setIsLoggedIn={setIsLoggedIn}
              onLoginSuccess={() => setIsLoggedIn(true)}
            />
          )}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="PhoneNumberForm" component={PhoneNumberForm} />
          <Stack.Screen name="MainApp" component={BottomTabs} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Recharge" component={RechargeScreen} />
          <Stack.Screen
            name="PlanDetailsScreen"
            component={PlanDetailsScreen}
          />
          <Stack.Screen
            name="PlanDetailsScreen1"
            component={PlanDetailsScreen1}
          />
          <Stack.Screen
            name="RechargeSuccessScreen"
            component={RechargeSuccessScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
