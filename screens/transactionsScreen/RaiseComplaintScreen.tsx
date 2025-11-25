import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../lib/axios';

const RaiseComplaintScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const {txn} = route.params;

  const [selectedReason, setSelectedReason] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // 🔹 Loading state

  const reasons = [
    'Recharge was not successful',
    'Operator was not correct',
    'Recharged with a wrong number',
    'Others',
  ];

  const submitComplaint = async () => {
    if (!selectedReason) {
      Alert.alert('Please select a reason');
      return;
    }

    const payload = {
      msg: selectedReason,
      ref_id: txn.clientRefNo,
      id: txn.id,
      mobile: txn.mobile,
    };

    try {
      setLoading(true); // 🔹 Start loading
      const response = await api.post('/ticket/recharge', payload);
      console.log('Response:', response.data);
      Alert.alert('Success', 'Complaint submitted successfully!', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (error: any) {
      console.log('Error:', error.response?.data || error.message);
      Alert.alert('Error', 'Failed to submit complaint.');
    } finally {
      setLoading(false); // 🔹 Stop loading
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">
          Raise a complaint
        </Text>
      </View>

      {/* Scroll Content */}
      <ScrollView className="flex-1 p-4">
        <View className="border-b border-gray-200 mb-3 pb-2">
          <Text className="text-gray-500 text-xs">Transaction ID</Text>
          <Text className="text-gray-800 font-semibold">{txn.clientRefNo}</Text>
        </View>

        <View className="border-b border-gray-200 mb-3 pb-2">
          <Text className="text-gray-500 text-xs">Date & Time</Text>
          <Text className="text-gray-800 font-semibold">
            {new Date(txn.createdAt).toLocaleString()}
          </Text>
        </View>

        <View className="border-b border-gray-200 mb-3 pb-2">
          <Text className="text-gray-500 text-xs">Transaction Amount</Text>
          <Text className="text-gray-800 font-semibold">₹{txn.price}</Text>
        </View>

        <Text className="text-gray-700 mb-2 font-semibold">
          Select a reason
        </Text>
        {reasons.map(reason => (
          <TouchableOpacity
            key={reason}
            onPress={() => setSelectedReason(reason)}
            className="flex-row items-center mb-3">
            <Icon
              name={
                selectedReason === reason
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={20}
              color={selectedReason === reason ? '#2563EB' : '#555'}
            />
            <Text className="ml-2 text-gray-700">{reason}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <View className="p-4 bg-white border-t border-gray-200 shadow-lg">
        <TouchableOpacity
          onPress={submitComplaint}
          disabled={loading} // disable when loading
          className={`py-4 rounded-full items-center ${
            loading ? 'bg-gray-400' : 'bg-green-500'
          }`}>
          {loading ? (
            <View className="flex-row items-center">
              <ActivityIndicator size="small" color="#fff" />
              <Text className="text-white font-semibold text-lg ml-2">
                Submitting...
              </Text>
            </View>
          ) : (
            <Text className="text-white font-semibold text-lg">
              Submit Complaint
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RaiseComplaintScreen;
