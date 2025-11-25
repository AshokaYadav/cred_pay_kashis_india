import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import {View, Text, Button} from 'react-native';
import BottomTabs from './BottomTabs';
import RechargeScreen from '../screens/MobileScreen/RechargeScreen';
import PlanDetailsScreen1 from '../screens/MobileScreen/PlanDetailsScreen1';
import RechargeSuccessScreen from '../screens/RechargeSuccessScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PhoneNumberForm from '../screens/PhoneNumberForm';
import OTPScreen from '../screens/OTPScreen';
import PaymentOptionsScreen from '../screens/PaymentOptionsScreen';
import PaymentReceipt from '../screens/PaymentReceipt';
import PaymentReceipt1 from '../screens/PaymentReceipt1';
import PaymentReceiptFail from '../screens/PaymentReceiptFail';
import {Circle, Operator} from '../types';
import DrawerNavigation from './DrawerNavigation';
import SplashScreen from '../screens/SplashScreen';
import RaiseComplaintScreen from '../screens/transactionsScreen/RaiseComplaintScreen';
import DthRechargeScreen from '../screens/DthScreen/DthRechargeScreen';
import D2HRechargeScreen from '../screens/DthScreen/D2HRechargeScreen';
import DTHPlansScreen from '../screens/DthScreen/DTHPlansScreen';
import BillPaymentsScreen from '../screens/BillPaymentsScreen';
import MarginRatesScreen from '../screens/MarginRatesScreen';

type Operatorr = {
  id: string;
  name: string;
  image_url: string | null;
  category_id?: string;
  operator_code?: string;
  status?: string;
};

// Root Stack Navigator
export type RootStackParamList = {
  Login: undefined;
  Splash: undefined; // 👈 add kiya
  MainApp: undefined;
  Recharge: {categoryId: string};
  PlanDetailsScreen: {
    plan: {price: string; days: string; data: string; voice: string};
  };
  PlanDetailsScreen1: {
    plan: {rs: number; validity: string; desc: string};
    mobileNumber: string; // 👈 ab yaha define kar do
    operatorData: Operator | null;
    circleData: Circle | null;
    categoryId: string;
  };
  RechargeSuccessScreen: undefined;
  RegisterScreen: {phoneNumber: string};
  PhoneNumberForm: undefined;
  OTPScreen: {phoneNumber: string};
  PaymentOptionsScreen: undefined;
  PaymentReceipt: {
    transactionId: string;
    amount: string;
    timestamp: string;
    mobile: string;
  };
  PaymentReceipt1: {
    transactionId: string;
    amount: string;
    timestamp: string;
    mobile: string;
  };
  PaymentReceiptFail: {
    transactionId: string;
    amount: string;
    timestamp: string;
    mobile: string;
  };
  Main: undefined;
  RaiseComplaint:undefined;
  DthRechargeScreen:{categoryId: string};
  D2HRechargeScreen: { 
    catId?:string;
    categoryId?: string;
    selectedAmount?: number; // ✅ optional param
    selectedOperator?:Operatorr
  };
  DTHPlansScreen:{categoryId?: string;};
  BillPaymentsScreen:undefined;
  MarginRatesScreen:undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = ({isLoggedIn}: {isLoggedIn: boolean}) => {
  return (
    <Stack.Navigator
      screenOptions={{
    header: () => (
      <View style={{ height: 26, backgroundColor: 'green' }} />
    )
  }}
      initialRouteName={isLoggedIn ? 'Main' : 'PhoneNumberForm'}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="PhoneNumberForm" component={PhoneNumberForm} />
      <Stack.Screen name="Recharge" component={RechargeScreen} />
      {/* <Stack.Screen name="MainApp" component={BottomTabs} /> */}
      <Stack.Screen name="PaymentReceipt" component={PaymentReceipt} />
      <Stack.Screen name="PaymentReceipt1" component={PaymentReceipt1} />
      <Stack.Screen name="PaymentReceiptFail" component={PaymentReceiptFail} />
      <Stack.Screen
        name="Main"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="RaiseComplaint" component={RaiseComplaintScreen} />

      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      {/* <Stack.Screen name="PlanDetailsScreen" component={PlanDetailsScreen} /> */}
      <Stack.Screen name="PlanDetailsScreen1" component={PlanDetailsScreen1} />
      <Stack.Screen
        name="RechargeSuccessScreen"
        component={RechargeSuccessScreen}
      />
      <Stack.Screen
        name="PaymentOptionsScreen"
        component={PaymentOptionsScreen}
      />
      <Stack.Screen
        name="DthRechargeScreen"
        component={DthRechargeScreen}
      />
      <Stack.Screen
        name="D2HRechargeScreen"
        component={D2HRechargeScreen}
      />
      <Stack.Screen name="DTHPlansScreen" component={DTHPlansScreen} />
      <Stack.Screen name="BillPaymentsScreen" component={BillPaymentsScreen} />
      {/* MarginRatesScreen */}
      <Stack.Screen name="MarginRatesScreen" component={MarginRatesScreen} />

    </Stack.Navigator>
  );
};

export default RootNavigator;
