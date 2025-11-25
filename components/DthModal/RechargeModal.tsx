// components/RechargeModal.tsx
import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type Operator = {
  id: string;
  name: string;
  image_url: string | null;
  category_id?: string;
  operator_code?: string;
  status?: string;
};

type RechargeModalProps = {
  visible: boolean;
  onClose: () => void;
  operator?: Operator;
  subscriberNo: string;
  setSubscriberNo: (value: string) => void;
  onContinue: () => void;
};

export default function RechargeModal({
  visible,
  onClose,
  operator,
  subscriberNo,
  setSubscriberNo,
  onContinue,
}: RechargeModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-1 bg-black/40 w-full justify-end items-center">
          {/* Card */}
          <View className="bg-white  rounded-t-2xl p-6 shadow-lg">
            {/* Title */}
            <Text className="text-xl font-bold text-center text-green-600 mb-4">
              Recharge {operator?.name}
            </Text>

            {/* Input */}
            <TextInput
              className=" border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
              placeholder="Enter Subscriber No"
              placeholderTextColor="#aaa"
              value={subscriberNo}
              onChangeText={setSubscriberNo}
              keyboardType="numeric"
            />

            {/* Helper */}
            <Text className="text-xs text-gray-500 text-center mb-6">
              How to find Subscriber No? {'\n'}
              Press <Text className="font-semibold">HOME</Text> button on your
              remote or give a missed call to{' '}
              <Text className="font-semibold">080-61-9999-11</Text>.
            </Text>

            {/* Buttons */}
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={onClose}
                className="flex-1 bg-gray-200 rounded-xl py-3 mr-2"
              >
                <Text className="text-center text-gray-700 font-medium">
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onContinue}
                className="flex-1 bg-green-600 rounded-xl py-3 ml-2"
              >
                <Text className="text-center text-white font-semibold">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
