import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import ServiceItem from "./ServiceItem";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/RootNavigator";
import { useCategories } from "../hooks/useCategories";
import { API_TOKEN } from "../config";
import { RootStackParamList } from "../navigation/RootNavigator ";

const RechargeGrid =  ({ token }: { token: string }) => {

  const { categories, loading, error } = useCategories(token);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Icons mapping for API categories
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "prepaid":
        return <FontAwesome name="mobile" size={24} color="#28a745" />;
      case "dth":
        return <Entypo name="tv" size={24} color="#28a745" />;
      default:
        return <FontAwesome name="question-circle" size={24} color="#28a745" />;
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  // ✅ Add "More" item manually after API categories
  const finalCategories = [
    ...categories,
    {
      id: "more",
      name: "More",
      status: "ACTIVE",
    },
  ];

  console.log(finalCategories);

  return (
    <View className="bg-white p-4 rounded-xl shadow">
      <Text className="text-lg font-bold text-gray-800 mb-4">
        Recharge & Pay Bills
      </Text>
      <View className="flex-row flex-wrap justify-between">
        {finalCategories.map((item) => (
          <ServiceItem
            key={item.id}
            icon={
              item.name.toLowerCase() === "more" ? (
                <Entypo
                  name="dots-three-horizontal"
                  size={24}
                  color="#28a745"
                />
              ) : (
                getIcon(item.name)
              )
            }
            label={item.name}
            onPress={() => {
              if (item.name.toLowerCase() === "prepaid") {
                navigation.navigate("Recharge",{categoryId:item.id});
              } else if (item.name.toLowerCase() === "more") {
                console.log("More clicked!");
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default RechargeGrid;
