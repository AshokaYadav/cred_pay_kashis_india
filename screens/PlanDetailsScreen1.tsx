// interface PaymentPayload {
//   razorpay_order_id: string;
//   razorpay_payment_id: string;
//   razorpay_signature: string;
//   amount: number;
// }

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   Alert,
//   Platform
// } from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RouteProp} from '@react-navigation/native';

// // import {RootStackParamList} from '../navigation/RootNavigator';
// import {API_TOKEN} from '../config';
// import RazorpayCheckout from 'react-native-razorpay';
// import MPINModal from '../components/MPINModal';
// import {useWallet} from '../hooks/useWallet';
// import { RootStackParamList } from '../navigation/RootNavigator ';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// type RechargeDetailRouteProp = RouteProp<
//   RootStackParamList,
//   'PlanDetailsScreen1'
// >;

// const RechargeDetailScreen1 = () => {
//   const [showMpinModal, setShowMpinModal] = useState(false);
//   const {data} = useWallet();
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const route = useRoute<RechargeDetailRouteProp>();
//   const {plan, mobileNumber, circleData, operatorData} = route.params;
//   console.log(plan);

//   // ✅ Create Razorpay Order
//   const Pay = async () => {
//     try {
//       const response = await fetch(
//         'https://api.recharge.kashishindiapvtltd.com/payments/create-order',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: `Bearer ${API_TOKEN}`,
//           },
//           body: JSON.stringify({
//             amount: plan?.rs * 100,
//           }),
//         },
//       );

//       const data = await response.json();
//       razorPayment(data);
//     } catch (e) {
//       console.error('❌ Create Order Error:', e);
//       Alert.alert('Error', 'Failed to create order');
//     }
//   };

//   // ✅ Razorpay Payment Handler
//   const razorPayment = async (data: any) => {
//     try {
//       const options = {
//         description: 'Payment for order',
//         currency: 'INR',
//         key: data?.data?.key,
//         amount: data?.data?.amount,
//         order_id: data?.data?.order_id,
//         name: 'KASHISHINDIAPRIVATELIMITED',
//         method: {
//           upi: true,
//           card: false,
//           netbanking: false,
//           wallet: false,
//         },
//         flow: 'intent',
//         upi: {
//           vpa: data?.data?.pa || '',
//         },
//       };

//       RazorpayCheckout.open(options)
//         .then(paymentData => {
//           handlePayment({
//             razorpay_order_id: paymentData.razorpay_order_id,
//             razorpay_payment_id: paymentData.razorpay_payment_id,
//             razorpay_signature: paymentData.razorpay_signature,
//             amount: options.amount,
//           });
//         })
//         .catch(error => {
//           console.log('❌ Razorpay Cancel/Error:', error.description);
//         });
//     } catch (e) {
//       console.error('❌ Razorpay Error:', e);
//       Alert.alert('Error', 'Something went wrong with Razorpay');
//     }
//   };

//   // ✅ Verify Payment with Backend
//   const handlePayment = async (paymentData: PaymentPayload) => {
//     try {
//       const response = await fetch(
//         'https://api.recharge.kashishindiapvtltd.com/payments/verify-payment',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${API_TOKEN}`,
//           },
//           body: JSON.stringify(paymentData),
//         },
//       );

//       if (!response.ok) throw new Error('Failed to verify payment');

//       const result = await response.json();

//       if (
//         result?.data?.success === true ||
//         result?.data?.message === 'Payment has been verified'
//       ) {
//         setShowMpinModal(true);
//       } else {
//         Alert.alert('Error', 'Payment verification failed.');
//       }
//     } catch (error) {
//       console.error('❌ Error during verification:', error);
//       Alert.alert('Error', 'Payment verification failed. Please try again.');
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//   <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
//     {/* Header */}
//     <View
//       className="bg-white px-4 pt-4 pb-4 flex-row items-center 
//                border-b border-green-500 shadow-md rounded-b-2xl"
//       style={{paddingTop: Platform.OS === 'ios' ? 50 : 50}}>
//       {/* Back Button */}
//       <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
//         <Ionicons name="arrow-back" size={32} color="#16a34a" />
//       </TouchableOpacity>

//       {/* Header Title / Operator Info - REMOVED EXTRA PARENTHESIS */}
//       <View className="flex-row items-center">
//         {operatorData?.image_url ? (
//           <Image
//             source={{
//               uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}`,
//             }}
//             className="w-10 h-10 mr-3 rounded-full bg-white border border-gray-300"
//             resizeMode="cover"
//           />
//         ) : (
//           <View className="w-10 h-10 mr-3 rounded-full bg-green-100 justify-center items-center">
//             <Text className="text-green-700 font-bold text-lg">
//               {operatorData?.name?.charAt(0) || 'O'}
//             </Text>
//           </View>
//         )}

//         <View>
//           <Text className="text-lg font-semibold text-gray-900">
//             {operatorData?.name || 'Operator'}
//           </Text>
//           <Text className="text-sm text-gray-600">
//             {mobileNumber}
//           </Text>
//           <Text className="text-sm text-gray-600">
//             {circleData?.name || 'Circle'} • Prepaid
//           </Text>
//         </View>
//       </View>
//     </View>

//     {/* Plan Details Card */}
//     <View className="bg-white rounded-3xl p-6 mx-4 mt-6 mb-5 shadow-lg border border-gray-100">
      
//       {/* Amount Section */}
//       <View className="items-center mb-5">
//         <Text className="text-5xl font-extrabold text-green-600">
//           ₹{plan?.rs}
//         </Text>
//         <Text className="text-sm text-gray-400 mt-1">Recharge Amount</Text>
//       </View>

//       {/* Benefits */}
//       <View className="space-y-3">
//         {/* Validity */}
//         <View className="flex-row items-center">
//           <Ionicons name="time-outline" size={18} color="#16a34a" />
//           <Text className="ml-2 text-sm font-semibold text-green-600">
//             Validity: {plan?.validity}
//           </Text>
//         </View>

//         {/* Dynamic Desc Parsing */}
//         <View className="mt-2 space-y-2">
//           {plan?.desc
//             ?.split("|")
//             .map((item, index) => {
//               const trimmed = item.trim();
//               let icon = "gift-outline"; // default
              
//               if (trimmed.toLowerCase().includes("call")) icon = "call-outline";
//               else if (trimmed.toLowerCase().includes("data")) icon = "wifi-outline";
//               else if (trimmed.toLowerCase().includes("sms")) icon = "chatbox-outline";
//               else if (trimmed.toLowerCase().includes("validity")) icon = "time-outline";

//               return (
//                 <View key={index} className="flex-row items-start mb-1">
//                   <Ionicons name={icon} size={18} color="#16a34a" />
//                   <Text className="ml-2 text-sm text-gray-700 flex-1">{trimmed}</Text>
//                 </View>
//               );
//             })}
//         </View>
//       </View>
//     </View>
//   </ScrollView>

//   {/* Pay Button */}
//   <View>
//     <TouchableOpacity
//       className="absolute bottom-5 left-5 right-5 bg-green-500 py-3 rounded-full shadow-lg"
//       onPress={() => {
//         if (data?.data?.balance >= plan?.rs) {
//           setShowMpinModal(true);
//         } else {
//           Pay();
//         }
//       }}>
//       <Text className="text-white text-xl font-bold text-center">Pay</Text>
//     </TouchableOpacity>
//   </View>

//   {/* MPIN Modal */}
//   <MPINModal
//     visible={showMpinModal}
//     onClose={() => setShowMpinModal(false)}
//     apiToken={API_TOKEN}
//     circleData={circleData}
//     operatorData={operatorData}
//     mobile={mobileNumber}
//     amount={plan?.rs}
//     onSuccess={data => {
//       const readableDate = new Date(data?.createdAt).toLocaleString();
//       navigation.navigate('PaymentReceipt1', {
//         transactionId: data?.api_txn_id,
//         amount: data?.price,
//         timestamp: readableDate,
//         mobile: data?.mobile,
//       });
//     }}
//     onFailure={data => {
//       const readableDate = new Date(data?.createdAt).toLocaleString();
//       navigation.navigate('PaymentReceiptFail', {
//         transactionId: data?.api_txn_id,
//         amount: data?.price,
//         timestamp: readableDate,
//         mobile: data?.mobile,
//       });
//     }}
//   />
// </SafeAreaView>
//   );
// };

// export default RechargeDetailScreen1;


// RechargeDetailScreen1.tsx (refactored)
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// import {RootStackParamList} from '../navigation/RootNavigator';
// import MPINModal from '../components/MPINModal';
import {useWallet} from '../hooks/useWallet';
import {usePayment} from '../hooks/usePayment';
import {useRazorpay} from '../hooks/useRazorpay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../navigation/RootNavigator ';
import MPINModal from '../components/MPINModal';
import { API_TOKEN } from '../config';

type RechargeDetailRouteProp = RouteProp<
  RootStackParamList,
  'PlanDetailsScreen1'
>;

const RechargeDetailScreen1 = () => {
  const [showMpinModal, setShowMpinModal] = useState(false);
  const {data: walletData} = useWallet();
  const {createOrder, verifyPayment, isLoading} = usePayment();
  const {initiatePayment} = useRazorpay();
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RechargeDetailRouteProp>();
  const {plan, mobileNumber, circleData, operatorData} = route.params;

  // Handle payment process
  const handlePayment = async () => {
    try {
      // Check if wallet balance is sufficient
      if (walletData?.data?.balance >= plan?.rs) {
        setShowMpinModal(true);
        return;
      }

      // Create Razorpay order
      const orderData = await createOrder(plan?.rs);
      
      // Prepare Razorpay options
      const razorpayOptions = {
        description: 'Payment for recharge',
        currency: 'INR',
        key: orderData?.data?.key,
        amount: orderData?.data?.amount,
        order_id: orderData?.data?.order_id,
        name: 'KASHISHINDIAPRIVATELIMITED',
        method: {
          upi: true,
          card: false,
          netbanking: false,
          wallet: false,
        },
        flow: 'intent',
        upi: {
          vpa: orderData?.data?.pa || '',
        },
      };

      // Initiate Razorpay payment
      const paymentData = await initiatePayment(razorpayOptions);
      
      // Verify payment
      const verificationData = await verifyPayment({
        razorpay_order_id: paymentData.razorpay_order_id,
        razorpay_payment_id: paymentData.razorpay_payment_id,
        razorpay_signature: paymentData.razorpay_signature,
        amount: razorpayOptions.amount,
      });

      // If payment verified successfully, show MPIN modal
      if (
        verificationData?.data?.success === true ||
        verificationData?.data?.message === 'Payment has been verified'
      ) {
        setShowMpinModal(true);
      }
    } catch (error) {
      console.error('Payment process error:', error);
      // Error handling is already done in the hooks
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
        {/* Header */}
        <View
          className="bg-white px-4 pt-4 pb-4 flex-row items-center 
                   border-b border-green-500 shadow-md rounded-b-2xl"
          style={{paddingTop: Platform.OS === 'ios' ? 50 : 50}}>
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <Ionicons name="arrow-back" size={32} color="#16a34a" />
          </TouchableOpacity>

          {/* Header Title / Operator Info */}
          <View className="flex-row items-center">
            {operatorData?.image_url ? (
              <Image
                source={{
                  uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}`,
                }}
                className="w-10 h-10 mr-3 rounded-full bg-white border border-gray-300"
                resizeMode="cover"
              />
            ) : (
              <View className="w-10 h-10 mr-3 rounded-full bg-green-100 justify-center items-center">
                <Text className="text-green-700 font-bold text-lg">
                  {operatorData?.name?.charAt(0) || 'O'}
                </Text>
              </View>
            )}

            <View>
              <Text className="text-lg font-semibold text-gray-900">
                {operatorData?.name || 'Operator'}
              </Text>
              <Text className="text-sm text-gray-600">
                {mobileNumber}
              </Text>
              <Text className="text-sm text-gray-600">
                {circleData?.name || 'Circle'} • Prepaid
              </Text>
            </View>
          </View>
        </View>

        {/* Plan Details Card */}
        <View className="bg-white rounded-3xl p-6 mx-4 mt-6 mb-5 shadow-lg border border-gray-100">
          
          {/* Amount Section */}
          <View className="items-center mb-5">
            <Text className="text-5xl font-extrabold text-green-600">
              ₹{plan?.rs}
            </Text>
            <Text className="text-sm text-gray-400 mt-1">Recharge Amount</Text>
          </View>

          {/* Benefits */}
          <View className="space-y-3">
            {/* Validity */}
            <View className="flex-row items-center">
              <Ionicons name="time-outline" size={18} color="#16a34a" />
              <Text className="ml-2 text-xl font-semibold text-green-600">
                Validity: {plan?.validity}
              </Text>
            </View>

            {/* Dynamic Desc Parsing */}
            <View className="mt-2 space-y-2">
              {plan?.desc
                ?.split("|")
                .map((item, index) => {
                  const trimmed = item.trim();
                  let icon = "gift-outline";
                  
                  if (trimmed.toLowerCase().includes("call")) icon = "call-outline";
                  else if (trimmed.toLowerCase().includes("data")) icon = "wifi-outline";
                  else if (trimmed.toLowerCase().includes("sms")) icon = "chatbox-outline";
                  else if (trimmed.toLowerCase().includes("validity")) icon = "time-outline";

                  return (
                    <View key={index} className="flex-row items-start mb-1">
                      <Ionicons name={icon} size={18} color="#16a34a" />
                      <Text className="ml-2 text-xl text-gray-700 flex-1">{trimmed}</Text>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Pay Button */}
      <View>
        <TouchableOpacity
          className="absolute bottom-5 left-5 right-5 bg-green-500 py-3 rounded-full shadow-lg"
          onPress={handlePayment}
          disabled={isLoading}>
          <Text className="text-white text-xl font-bold text-center">
            {isLoading ? 'Processing...' : 'Pay'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* MPIN Modal
      <MPINModal
        visible={showMpinModal}
        onClose={() => setShowMpinModal(false)}
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



      /> */}



      {/* MPIN Modal */}
   <MPINModal
     visible={showMpinModal}
     onClose={() => setShowMpinModal(false)}
     apiToken={API_TOKEN}
    
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