// import React from "react";
// import { View, Text, Image } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Entypo from "react-native-vector-icons/Entypo";
// import ServiceItem from "./ServiceItem";
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useCategories } from "../hooks/useCategories";
// import { RootStackParamList } from "../navigation/RootNavigator ";
// // import { RootStackParamList } from "../navigation/RootNavigator";

// const RechargeGrid = ({ token }: { token: string }) => {
//   const { categories, loading, error } = useCategories(token);
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   // 🔹 Icon mapping
//   const getIcon = (name: string) => {
//     switch (name.toLowerCase()) {
//       case "prepaid":
//         return <FontAwesome name="mobile" size={24} color="#28a745" />;
//       case "dth":
//         return <Entypo name="tv" size={24} color="#28a745" />;
//       case "electricity":
//         return <MaterialCommunityIcons name="flash" size={24} color="#28a745" />;
//       case "fastag":
//         return <MaterialCommunityIcons name="car" size={24} color="#28a745" />;
//       case "google play":
//         return <FontAwesome name="google" size={24} color="#28a745" />;
//       case "insurance":
//         return <FontAwesome name="shield" size={24} color="#28a745" />;
//       case "emi":
//         return <FontAwesome name="money" size={24} color="#28a745" />;
//       case "see all":
//         // ✅ Show image instead of icon for "See All"
//         return (
//           <Image
//             source={require("../assets/Home/seeAll.png")}
//             style={{ width: 30, height: 30, resizeMode: "contain" }}
//           />
//         );
//       default:
//         return <FontAwesome name="question-circle" size={24} color="#28a745" />;
//     }
//   };

//   if (loading) return <Text>Loading...</Text>;
//   if (error) return <Text>{error}</Text>;

//   // ✅ Add extra items manually
//   const finalCategories = [
//     ...categories,
//     { id: "Electricity", name: "Electricity", status: "ACTIVE" },
//     { id: "FasTag", name: "FasTag", status: "ACTIVE" },
//     { id: "Google Play", name: "Google Play", status: "ACTIVE" },
//     { id: "Insurance", name: "Insurance", status: "ACTIVE" },
//     { id: "EMI", name: "EMI", status: "ACTIVE" },
//     { id: "SeeAll", name: "See All", status: "ACTIVE" },
//   ];

//   return (
//     <View className="bg-white p-4 rounded-xl shadow">
//       <Text className="text-lg font-bold text-gray-800 mb-4">
//         Recharge & Pay Bills
//       </Text>

//       <View className="flex-row flex-wrap">
//         {finalCategories.map((item) => (
//           <ServiceItem
//             key={item.id}
//             icon={getIcon(item.name)}
//             label={item.name}
//             onPress={() => {
//               const lowerName = item.name.toLowerCase();

//               if (lowerName === "prepaid") {
//                 navigation.navigate("Recharge", { categoryId: item.id });
//               } else if (lowerName === "dth") {
//                 navigation.navigate("DthRechargeScreen", { categoryId: item.id });
//               } else if (lowerName === "see all") {
//                 navigation.navigate("BillPaymentsScreen");
//               }
//             }}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default RechargeGrid;

import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ServiceItem from './ServiceItem';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCategories} from '../hooks/useCategories';
import {RootStackParamList} from '../navigation/RootNavigator ';
// import { RootStackParamList } from "../navigation/RootNavigator";

const RechargeGrid = ({token}: {token: string}) => {
  const {categories, loading, error} = useCategories(token);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // 🔹 For Prepaid images rotation
  const prepaidImages = [
    require('../assets/dth/IconsRow/bharti-airtel.png'),
    require('../assets/dth/IconsRow/Reliance_Jio_Logo.svg.png'),
    require('../assets/margin/bnsl.jpg'),
    require('../assets/margin/mobile.png'),
  ];

  const [currentPrepaidImage, setCurrentPrepaidImage] = useState(
    prepaidImages[0],
  );

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % prepaidImages.length;
      setCurrentPrepaidImage(prepaidImages[index]);
    }, 2000); // 🔁 Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // 🔹 Icon mapping function
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'prepaid':
        // ✅ Auto-rotating prepaid image
        return (
          <Image
            source={currentPrepaidImage}
            style={{width: 35, height: 35, resizeMode: 'contain'}}
          />
        );
      case 'dth':
        return <Entypo name="tv" size={24} color="#28a745" />;
      case 'electricity':
        return (
          <MaterialCommunityIcons name="flash" size={24} color="#28a745" />
        );
      case 'fastag':
        return <MaterialCommunityIcons name="car" size={24} color="#28a745" />;
      case 'google play':
        return <FontAwesome name="google" size={24} color="#28a745" />;
      case 'insurance':
        return <FontAwesome name="shield" size={24} color="#28a745" />;
      case 'emi':
        return <FontAwesome name="money" size={24} color="#28a745" />;
      case 'see all':
        // ✅ Static seeAll image
        return (
          <Image
            source={require('../assets/Home/seeAll.png')}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
        );
      default:
        return <FontAwesome name="question-circle" size={24} color="#28a745" />;
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const finalCategories = [
    ...categories,
    {id: 'Electricity', name: 'Electricity', status: 'ACTIVE'},
    {id: 'FasTag', name: 'FasTag', status: 'ACTIVE'},
    {id: 'Google Play', name: 'Google Play', status: 'ACTIVE'},
    {id: 'Insurance', name: 'Insurance', status: 'ACTIVE'},
    {id: 'EMI', name: 'EMI', status: 'ACTIVE'},
    {id: 'SeeAll', name: 'See All', status: 'ACTIVE'},
  ];

  return (
    <View className="bg-white p-4 rounded-xl shadow">
      <Text className="text-lg font-bold text-gray-800 mb-4">
        Recharge & Pay Bills
      </Text>

      <View className="flex-row flex-wrap">
        {finalCategories.map(item => (
          <ServiceItem
            key={item.id}
            icon={getIcon(item.name)}
            label={item.name}
            onPress={() => {
              const lowerName = item.name.toLowerCase();
              if (lowerName === 'prepaid') {
                navigation.navigate('Recharge', {categoryId: item.id});
              } else if (lowerName === 'dth') {
                navigation.navigate('DthRechargeScreen', {categoryId: item.id});
              } else if (lowerName === 'see all') {
                navigation.navigate('BillPaymentsScreen');
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default RechargeGrid;
