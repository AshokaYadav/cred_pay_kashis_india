import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import {useWallet} from '../../hooks/useWallet';
import {useRechargePayment} from '../../hooks/useRechargePayment';
import MPINModal from '../../components/MPINModal';
import {API_TOKEN, USER_ID} from '../../config';
// import { RootStackParamList } from "../navigation/RootNavigator";
import Header from '../../components/Detail/Header';
// import PlanDetailsCard from "../components/Detail/PlanDetailsCard";
import {RootStackParamList} from '../../navigation/RootNavigator ';
import PlanDetailsCard from '../../components/Detail/PlanDetailsCard';

type RechargeDetailRouteProp = RouteProp<
  RootStackParamList,
  'PlanDetailsScreen1'
>;

const RechargeDetailScreen1 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RechargeDetailRouteProp>();
  const {plan, mobileNumber, circleData, operatorData, categoryId} =
    route.params;

  const {data: walletData} = useWallet(USER_ID);

  const {
    showMpinModal,
    setShowMpinModal,
    isLoading,
    isWaitingForPayment,
    handlePayment,
  } = useRechargePayment(walletData, plan);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{paddingBottom: 200}}>
        <Header
          operatorData={operatorData}
          mobileNumber={mobileNumber}
          circleData={circleData}
        />
        <PlanDetailsCard plan={plan} />
      </ScrollView>

      {/* Pay Button */}
      <View>
        <TouchableOpacity
          className="absolute bottom-5 left-5 right-5 bg-green-500 py-3 rounded-full shadow-lg"
          onPress={handlePayment}
          disabled={isLoading || isWaitingForPayment}>
          <Text className="text-white text-xl font-bold text-center">
            {isLoading
              ? 'Processing...'
              : isWaitingForPayment
                ? 'Payment in Progress...'
                : 'Pay'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* MPIN Modal */}
      <MPINModal
        visible={showMpinModal}
        onClose={() => setShowMpinModal(false)}
        apiToken={API_TOKEN}
        categoryId={categoryId}
        circleData={circleData}
        operatorData={operatorData}
        mobile={mobileNumber}
        amount={plan?.rs}
        onSuccess={data => {
          const readableDate = new Date(data?.createdAt).toLocaleString();
          navigation.navigate('PaymentReceipt1', {
            transactionId: data?.api_txn_id,
            amount: data?.price,
            timestamp: readableDate,
            mobile: data?.mobile,
          });
        }}
        onFailure={data => {
          const readableDate = new Date(data?.createdAt).toLocaleString();
          navigation.navigate('PaymentReceiptFail', {
            transactionId: data?.api_txn_id,
            amount: data?.price,
            timestamp: readableDate,
            mobile: data?.mobile,
          });
        }}
      />
    </SafeAreaView>
  );
};

export default RechargeDetailScreen1;
