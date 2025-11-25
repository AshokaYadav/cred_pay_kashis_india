import {View, Text, Pressable, Platform, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReturnRefundScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-white px-4 flex-row items-center shadow-md rounded-b-2xl"
        style={{paddingTop: Platform.OS === 'ios' ? 15 : 15}}>
        <Pressable onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={32} color="#16a34a" />
        </Pressable>

        <Text className="text-xl font-semibold text-gray-800">
          Return, cancellation and refund policy
        </Text>
      </View>

      {/* Body */}
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={true}>
        <Text className="text-sm text-gray-800 leading-6">
          Refund Policy{"\n"}
          Thank you for using KredPay, the leading mobile recharge and utility payments platform. We strive to provide excellent service and ensure customer satisfaction. This refund policy outlines the terms and conditions regarding refunds for mobile recharge transactions made through the KredPay platform.{"\n\n"}

          Eligibility for Refunds:{"\n"}
          1.1 KredPay will provide refunds only in the following case:{"\n\n"}

          a) If a mobile recharge, utility payment or other transaction fails due to technical issues or errors on our platform.{"\n\n"}

          1.2 Refund requests for failed transactions must be reported by the user within 48hours from the date of the failed transaction.{"\n\n"}

          Refund Request Process:{"\n"}
          2.1 To request a refund for a failed transaction, the user must contact KredPay customer support within 48 hours from the date of the failed transaction.{"\n\n"}

          2.2 The user must provide the following details:{"\n\n"}

          a) Transaction ID or reference number.{"\n\n"}

          b) Mobile number for which the recharge was intended.{"\n\n"}

          c) Date and time of the transaction.{"\n\n"}

          d) Reason for the refund request.{"\n\n"}

          2.3 Refund requests can be submitted by contacting our customer support via email or phone. Contact details are available on our website.{"\n\n"}

          Refund Processing:{"\n"}
          3.1 KredPay will review the refund request and the provided details within 7 working days of receiving the request.{"\n\n"}

          3.2 If the refund request for a failed transaction is approved, the refund amount will be credited to the user's KredPay wallet within 3-5 working days.{"\n\n"}

          3.3 The refunded amount can be used for future mobile recharges or other transactions on the KredPay platform.{"\n\n"}

          Refund Exceptions:{"\n"}
          4.1 KredPay will not provide refunds for transactions that fail due to errors in user inputs, including incorrect mobile numbers or other user-related errors.{"\n\n"}

          4.2 KredPay will not entertain refund requests made after the specified 48 hours timeframe for failed transactions.{"\n\n"}

          4.3 The customer is not allowed to withdraw the amount added in the KredPay wallet. The same can only be utilized for Utility Payments and Recharges on the Platform.{"\n\n"}

          Changes to the Refund Policy:{"\n"}
          5.1 KredPay reserves the right to modify or update this refund policy at any time. Any changes to the policy will be effective immediately upon posting on our website.{"\n\n"}

          5.2 It is the user's responsibility to review the refund policy periodically to stay informed about any updates or changes.{"\n\n"}

          If you have any questions or concerns regarding our refund policy, please contact our customer support team, who will be happy to assist you.{"\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}

export default ReturnRefundScreen;