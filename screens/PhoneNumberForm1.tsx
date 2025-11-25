import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  PhoneNumberForm: undefined;
  OTPScreen: { phoneNumber: string };
  RegisterScreen: { phoneNumber: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumberForm">;

const PhoneNumberForm: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async () => {
    if (!phoneNumber.trim()) {
      Alert.alert("Error", "Please enter your phone number.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.recharge.kashishindiapvtltd.com/auth/login-app`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile: phoneNumber }),
        }
      );

      console.log(response);

      if (response.status === 200) {
        navigation.navigate("OTPScreen", { phoneNumber });
      } else if (response.status === 404) {
        navigation.navigate("RegisterScreen", { phoneNumber });
      } else {
        const error = await response.json();
        Alert.alert("Error", error.message || "Unexpected response");
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert("Network Error", error.message || "Something went wrong");
    }
  };
  

  return (
    <View className="flex-1 w-full bg-white items-center justify-center">
      <Image
        source={require("../assets/load.jpg")}
        className="w-[300px] h-[100px] mb-5"
        resizeMode="contain"
      />

      <View className="w-full px-8">
        {/* <Text className="text-lg font-bold mb-2 text-green-600">
          Phone Number
        </Text> */}

        <TextInput
          ref={inputRef}
          className="h-16 border border-gray-300 rounded-full px-4 text-base bg-white mb-5"
          placeholder="Enter Mobile Number11dfkld"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          //  onChangeText={handleChange}
          maxLength={10} // Sirf 10 digits tak allow karega
        />   





        {/* <View className="flex-row items-center mb-5">
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            tintColors={{ true: "green", false: "green" }}
          />
          <Text className="ml-2 text-sm text-gray-600 flex-1">
            By proceeding, you allow KredPay to fetch your current and future
            plan expiry information.
          </Text>
        </View> */}

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-green-600 py-4 rounded-full items-center"
        >
          <Text className="text-white text-lg font-bold">
            Sign In using Mobile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumberForm;
