import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DthInfoModal from '../../components/DthModal/DthInfoModal';
import {RootStackParamList} from '../../navigation/RootNavigator ';
import {useWallet} from '../../hooks/useWallet';
import {API_TOKEN, USER_ID} from '../../config';
import {useRechargePayment} from '../../hooks/useRechargePayment';
import MPINModal from '../../components/MPINModal1';
// import MPINModal from '../../components/MPINModal1';
// import { useRechargePayment } from "../../hooks/useRechargePayment1";

type D2HRechargeNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'D2HRechargeScreen'
>;
type D2HRechargeRouteProp = RouteProp<RootStackParamList, 'D2HRechargeScreen'>;

export default function D2HRechargeScreen() {
  const navigation = useNavigation<D2HRechargeNavProp>();
  const route = useRoute<D2HRechargeRouteProp>();
  const {catId,categoryId, selectedAmount,selectedOperator} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const {data, loadWallet} = useWallet(USER_ID);

  const {data: walletData} = useWallet(USER_ID);

  console.log(selectedOperator);
  
  const [amount, setAmount] = useState(selectedAmount?.toString() || '');
  const presetAmounts = [100, 200, 500, 1000];
  const {
    showMpinModal,
    setShowMpinModal,
    isLoading,
    isWaitingForPayment,
    handlePayment,
  } = useRechargePayment(walletData, {rs: amount});

  const handlePreset = (value: number) => {
    setAmount(value.toString());
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Scrollable Content */}
      <ScrollView className="px-4 pt-4 mb-24">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#16a34a" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-800 flex-1 text-center">
            DTH Recharge
          </Text>
          <View className="w-10 h-10 rounded-full bg-purple-600 items-center justify-center">
            <Text className="text-white font-bold">D2H</Text>
          </View>
        </View>

        {/* Recharge Info */}
        <View className="mb-4 p-4 bg-white rounded-xl shadow">
          <Text className="text-sm text-gray-500">Recharge for</Text>
          <Text className="text-lg font-bold mt-1">{categoryId}</Text>
        </View>

        {/* Wallet Balance */}
        <View className="mb-6 p-4 bg-white rounded-xl shadow">
          <Text className="text-sm text-gray-500">Wallet Balance</Text>
          <Text className="text-lg font-bold mt-1">
            ₹{data?.data?.balance ?? '...'}
          </Text>
        </View>

        {/* Enter Amount */}
        <View className="mb-4">
          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-semibold bg-white"
            placeholder="₹ Enter Amount"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <Text className="text-xs text-pink-500 mt-1">
            Minimum amount is ₹100 for this transaction
          </Text>
        </View>

        {/* Preset Amount Buttons */}
        <View className="flex-row justify-between mb-6">
          {presetAmounts.map(amt => (
            <TouchableOpacity
              key={amt}
              onPress={() => handlePreset(amt)}
              className="border border-gray-300 rounded-full px-5 py-3 bg-white shadow">
              <Text className="text-gray-800 font-medium">₹{amt}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Box */}
        <View className="bg-orange-100 border-l-4 border-orange-400 p-4 rounded-xl mb-6">
          <Text className="text-sm text-orange-800">
            ⚠ Keep your set top box SWITCHED ON & tune to channel number 96
            during recharge. If service is not resumed after recharge, give
            missed call @ 18001370777 from your RMN
          </Text>
        </View>

        {/* Buttons Row */}
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity
            onPress={() =>
              navigation.replace('DTHPlansScreen', {
                categoryId: categoryId,
              })
            }
            className="flex-1 bg-green-600 rounded-2xl py-4 mr-2 items-center justify-center shadow">
            <Text className="text-white text-lg font-semibold">View Plans</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-blue-600 rounded-2xl py-4 ml-2 items-center justify-center shadow"
            onPress={() => setModalVisible(true)}>
            <Text className="text-white text-lg font-semibold">
              Show DTH Info
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Sticky Pay Button */}
      {/* <View className="absolute bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-200">
        <TouchableOpacity className="bg-blue-700 rounded-2xl py-4 items-center justify-center shadow">
          <Text className="text-white text-lg font-semibold">Pay ₹{amount || 0}</Text>
        </TouchableOpacity>
      </View> */}

      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-200">
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

      {/* DTH Info Modal */}
      <DthInfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        dthNumber="3012287069"
      />
      {/* MPIN Modal */}
      <MPINModal
        visible={showMpinModal}
        onClose={() => setShowMpinModal(false)}
        apiToken={API_TOKEN}
        categoryId={catId}
        // circleData={{circleData}}  2e544da7-9e0c-4367-8af1-7ba12c70166f this is id static we have to use over
        operatorData={selectedOperator}
        mobile={categoryId}
        amount={amount}
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
    </View>
  );
}
