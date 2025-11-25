// // components/MPINModal.tsx
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Modal,
//   ActivityIndicator,
//   Image,
// } from "react-native";
// import { API_TOKEN, setToken } from "../config";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Circle, Operator } from "../types";
// import { NavigationService } from "../services/NavigationService";

// interface MPINModalProps {
//   visible: boolean;
//   onClose: () => void;
//   onSuccess: (data: any) => void;
//   apiToken: string;
//   mobile: string;
//   amount: number;
//   onFailure: (data: any) => void;
//   circleData: Circle | null;
//   operatorData: Operator | null;
//   categoryId?: string;
// }

// export default function MPINModal({
//   visible,
//   onClose,
//   onSuccess,
//   apiToken,
//   mobile,
//   amount,
//   onFailure,
//   operatorData,
//   circleData,
//   categoryId,
// }: MPINModalProps) {
//   const [mpinDigits, setMpinDigits] = useState(["", "", "", ""]);
//   const [mpinError, setMpinError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const inputs = useRef<Array<TextInput | null>>([]);

//   console.log(operatorData);
//   console.log(circleData);
//   console.log(categoryId);

//   // restore token from AsyncStorage
//   useEffect(() => {
//     const getUserData = async () => {
//       const stored = await AsyncStorage.getItem("userData");
//       if (stored) {
//         const userData = JSON.parse(stored);
//         setToken(userData.token);
//       }
//     };
//     getUserData();
//   }, []);

//   const handleChange = (text: string, index: number) => {
//     if (text.length > 1) return;
//     const newDigits = [...mpinDigits];
//     newDigits[index] = text;
//     setMpinDigits(newDigits);

//     if (text && index < inputs.current.length - 1) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyPress = (e: any, index: number) => {
//     if (e.nativeEvent.key === "Backspace" && !mpinDigits[index] && index > 0) {
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   const handleRecharge = async () => {
//     const mpin = mpinDigits.join("");

//     if (mpin.length < 4) {
//       setMpinError("Please enter 4-digit MPIN");
//       return;
//     }

//     setMpinError("");
//     setLoading(true);

//     try {
//       const payload = {
//         mobile,
//         amount,
//         password: mpin,
//         operator_id: operatorData?.id || "",
//         circle_id: circleData?.id || "",
//         category_id: categoryId ?? "",
//       };

//       const res = await fetch(
//         "https://api.recharge.kashishindiapvtltd.com/recharge/recharge-app/recharge",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${API_TOKEN}`,
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       const data = await res.json();

//        // 🔑 Authentication check
//     if (
//       data?.err === "Authentication required" ||
//       (data?.message === "Failed" && data?.data === null)
//     ) {
//       setLoading(false);
//       onClose();
//       NavigationService.navigate("PhoneNumberForm");
//       return;
//     }

//       if (data?.msg === "Invalid mpin") {
//         setMpinError("Invalid MPIN");
//       } else if (data?.data?.status === "SUCCESS") {
//         onSuccess(data?.data);
//         onClose();
//       } else {
//         onFailure(data?.data);
//         onClose();
//       }
//     } catch (e) {
//       console.error("❌ Recharge Error:", e);
//       onClose();
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal visible={visible} transparent animationType="fade">
//       <View className="flex-1 justify-center items-center bg-black/40">
//         <View className="bg-white p-6 rounded-2xl w-[90%] shadow-2xl">
//           {/* Operator Info */}
//           <View className="flex-row items-center w-full mb-6">
//             {operatorData?.image_url ? (
//               <Image
//                 source={{
//                   uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}`,
//                 }}
//                 className="w-16 h-16 mr-4 rounded-full shadow-md"
//                 resizeMode="stretch"
//               />
//             ) : (
//               <View className="w-16 h-16 mr-4 rounded-full bg-blue-100 justify-center items-center shadow-md">
//                 <Text className="text-blue-600 font-bold text-2xl">
//                   {operatorData?.name?.charAt(0) || "O"}
//                 </Text>
//               </View>
//             )}
//             <View className="flex-1">
//               <Text className="text-lg font-semibold text-gray-900">
//                 {operatorData?.name || "Operator"}
//               </Text>
//               <Text className="text-lg font-semibold text-gray-900">
//                 {mobile}
//               </Text>
//               <Text className="text-lg font-semibold text-gray-900">
//                 {circleData?.name || "Circle"} • Prepaid
//               </Text>
//             </View>
//           </View>

//           {/* Warning */}
//           <View className="bg-red-50 rounded-lg p-4 mb-5 border border-red-200">
//                   <Text className="text-red-700 font-bold text-center text-base">
//                     ⚠️ Read Carefully: Wrong Number Successfully Recharge Will Not Be Refunded
//                   </Text>
//                   <Text className="text-red-700 font-bold text-center text-base mt-1">
//                     सावधानी से पढ़ें: गलत नंबर पर सफलतापूर्वक रिचार्ज रिफंड नहीं किया जाएगा
//                   </Text>
//                 </View>

//           {/* MPIN Inputs */}
//           <Text className="text-lg font-bold mb-3 text-center text-gray-800">
//             Enter MPIN
//           </Text>
//           <View className="flex-row justify-center mb-3">
//             {mpinDigits.map((digit, index) => (
//               <TextInput
//                 key={index}
//                 ref={(el) => {
//                   inputs.current[index] = el;
//                 }}
//                 className="border-2 border-gray-300 rounded-xl m-2 text-center text-lg font-bold w-12 h-12 shadow-sm"
//                 keyboardType="numeric"
//                 maxLength={1}
//                 secureTextEntry
//                 value={digit}
//                 onChangeText={(text) => handleChange(text, index)}
//                 onKeyPress={(e) => handleKeyPress(e, index)}
//               />
//             ))}
//           </View>

//           {/* Error */}
//           {mpinError ? (
//             <Text className="text-red-500 mb-3 text-center">{mpinError}</Text>
//           ) : null}

//           {/* Buttons */}
//           <View className="flex-row justify-between w-full mt-4">
//             <TouchableOpacity
//               className="flex-1 bg-blue-600 py-3 rounded-full items-center shadow-md mr-2"
//               onPress={handleRecharge}
//               disabled={loading}
//             >
//               {loading ? (
//                 <ActivityIndicator color="#fff" />
//               ) : (
//                 <Text className="text-white font-bold">Submit</Text>
//               )}
//             </TouchableOpacity>

//             <TouchableOpacity
//               className="flex-1 bg-gray-300 py-3 rounded-full items-center shadow-md ml-2"
//               onPress={onClose}
//             >
//               <Text className="text-gray-800 font-bold">Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// }



// components/MPINModal.tsx
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import {API_TOKEN, setToken} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Circle, Operator } from '../types';

interface MPINModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: any) => void;
apiToken: string;
  mobile: string;
  amount: number;
  onFailure:(data:any)=>void;
  circleData:Circle | null,
  operatorData:Operator | null,
  categoryId:string
}

export default function MPINModal({
  visible,
  onClose,
  onSuccess,
  apiToken,
  mobile,
  amount,
  onFailure,
  operatorData,
  circleData,
  categoryId
}: MPINModalProps) {
  const [mpinDigits, setMpinDigits] = useState(['', '', '', '']);
  const [mpinError, setMpinError] = useState('');
  const [loading, setLoading] = useState(false);

  const inputs = useRef<Array<TextInput | null>>([]);

  console.log(mobile);
  console.log(amount);
  console.log(operatorData?.id);
  console.log(circleData?.id);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newDigits = [...mpinDigits];
    newDigits[index] = text;
    setMpinDigits(newDigits);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const stored = await AsyncStorage.getItem('userData');
      if (stored) {
        const userData = JSON.parse(stored);
        console.log('User Data:', userData);
        setToken(userData.token);
      }
    };

    getUserData();
  }, []);

  useEffect(()=>{
    console.log(mpinDigits);
  },[mpinDigits])

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !mpinDigits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleRecharge = async () => {
    const mpin = mpinDigits.join('');
    if (mpin.length < 4) {
      setMpinError('Please enter 4-digit MPIN');
      return;
    }

    setMpinError('');
    setLoading(true);

    try {
      const payload = {
        mobile: mobile,
        amount: amount,
        password: mpin,
        // circle_id: '2e544da7-9e0c-4367-8af1-7ba12c70166f',
        // operator_id: 'e38e0be0-64e4-4a22-9142-e7232fd2664b',
        // category_id: '1080e6d9-4156-4aed-8e05-3407c7a17a8c',
        operator_id: operatorData?.id || '',  // agar null ho to empty string
        circle_id: circleData?.id || '',
        category_id:categoryId,
      };

      console.log(payload);
    //   return ;
      console.log(API_TOKEN);

    //   return;

      const res = await fetch(
        'https://api.recharge.kashishindiapvtltd.com/recharge/recharge-app/recharge',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${API_TOKEN}`,
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();
      console.log('📡 Recharge Response:', data);

      if (data?.msg === 'Invalid mpin') {
        setMpinError('Invalid MPIN');
      } else if (data?.data?.status === 'SUCCESS') {
        onSuccess(data?.data);
        onClose();
      } else {
         onFailure(data?.data);
         onClose();
      }
    } catch (e) {
      console.error('❌ Recharge Error:', e);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
   <Modal visible={visible} transparent animationType="fade">
  <View className="flex-1 justify-center items-center bg-black/40">
    <View className="bg-white p-6 rounded-2xl w-[90%] shadow-2xl">
      
      {/* Operator Info Section */}
      <View className="flex-row items-center w-full mb-6">
        {operatorData?.image_url ? (
          <Image 
            source={{ uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}` }} 
            className="w-16 h-16 mr-4 rounded-full shadow-md"
            resizeMode="stretch"
          />
        ) : (
          <View className="w-16 h-16 mr-4 rounded-full bg-blue-100 justify-center items-center shadow-md">
            <Text className="text-blue-600 font-bold text-2xl">
              {operatorData?.name?.charAt(0) || 'O'}
            </Text>
          </View>
        )}
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900">
            {operatorData?.name || 'Operator'}
          </Text>
          <Text className="text-lg font-semibold text-gray-900">
            {mobile}
          </Text>
          <Text className="text-lg font-semibold text-gray-900">
            {circleData?.name || 'Circle'} • Prepaid
          </Text>
        </View>
      </View>

      {/* Warning Text */}
      <View className="bg-red-50 rounded-lg p-4 mb-5 border border-red-200">
        <Text className="text-red-700 font-bold text-center text-base">
          ⚠️ Read Carefully: Wrong Number Successfully Recharge Will Not Be Refunded
        </Text>
        <Text className="text-red-700 font-bold text-center text-base mt-1">
          सावधानी से पढ़ें: गलत नंबर पर सफलतापूर्वक रिचार्ज रिफंड नहीं किया जाएगा
        </Text>
      </View>

      {/* MPIN Title */}
      <Text className="text-lg font-bold mb-3 text-center text-gray-800">
        Enter MPIN
      </Text>

      {/* MPIN Inputs */}
      <View className="flex-row justify-center space-x-4 mb-3">
        {mpinDigits.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => { inputs.current[index] = el; }}
            className="border-2 border-gray-300 rounded-xl m-2 text-center text-lg font-bold w-12 h-12 shadow-sm"
            keyboardType="numeric"
            maxLength={1}
            secureTextEntry
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
          />
        ))}
      </View>

      {/* Error */}
      {mpinError ? (
        <Text className="text-red-500 mt-1 mb-3 text-center">{mpinError}</Text>
      ) : null}

      {/* Buttons */}
      <View className="flex-row justify-between w-full mt-4">
        <TouchableOpacity
          className="flex-1 bg-blue-600 py-3 rounded-full items-center shadow-md mr-2"
          onPress={handleRecharge}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-bold">Submit</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-gray-300 py-3 rounded-full items-center shadow-md ml-2"
          onPress={onClose}>
          <Text className="text-gray-800 font-bold">Cancel</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  </View>
</Modal>


  );
}