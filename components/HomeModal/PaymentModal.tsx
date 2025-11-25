import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useWalletPayment } from "../../hooks/useWalletPayment";

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
   loadWallet: () => Promise<void>; // 👈 yeh add kar
}

const quickAmounts = [100, 500, 1000, 2000];

const PaymentModal: React.FC<PaymentModalProps> = ({ visible, onClose,loadWallet }) => {
  const [amount, setAmount] = useState("");
  const { isLoading, isWaitingForPayment, handlePayment } = useWalletPayment(onClose,loadWallet);

  return (
    <Modal animationType="slide" transparent visible={visible} statusBarTranslucent>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Overlay background */}
        <View className="flex-1 justify-end relative">
          <View className="absolute inset-0 bg-black/50" />

          {/* Modal Content */}
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10 shadow-2xl relative">
              
              {/* Close Button */}
              <Pressable
                onPress={onClose}
                className="absolute top-4 right-5 z-50"
              >
                <Text className="text-2xl font-bold text-gray-400">✕</Text>
              </Pressable>

              {/* Title */}
              <Text className="text-lg font-bold text-center mb-6 text-gray-800">
                Add Payment
              </Text>

              {/* Enter Amount */}
              <TextInput
                placeholder="Enter Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                className="border border-gray-300 rounded-2xl px-4 py-4 text-center text-lg mb-6 bg-gray-50"
              />

              {/* Quick Amount Buttons */}
              <View className="flex-row justify-between mb-8">
                {quickAmounts.map((val) => (
                  <TouchableOpacity
                    key={val}
                    onPress={() => setAmount(String(val))}
                    className="border border-blue-500 px-2 py-3 rounded-xl bg-blue-50 flex-1 mx-1"
                  >
                    <Text className="text-blue-600 font-semibold text-center">+₹{val}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Pay Button */}
              <TouchableOpacity
                onPress={async () => {
                  if (!amount) return;
                  await handlePayment(Number(amount));
                }}
                disabled={isLoading || isWaitingForPayment}
                className={`py-4 rounded-2xl items-center shadow-lg ${
                  isLoading || isWaitingForPayment ? "bg-green-300" : "bg-green-600"
                }`}
              >
                {isLoading || isWaitingForPayment ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white font-bold text-lg">Pay</Text>
                )}
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default PaymentModal;
