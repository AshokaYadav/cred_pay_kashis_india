import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { RootStackParamList } from "../navigation/RootNavigator";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

import LoadingSpinner from "../../components/LoadingSpinner";
import PlansList from "../../components/PlansList";
import NoPlansForCategory from "../../components/NoPlansForCategory";
import ErrorDisplay from "../../components/ErrorDisplay";
import { useWallet } from "../../hooks/useWallet";
import { useCategories } from "../../hooks/useCategories";
import { useMobilePlans } from "../../hooks/useMobilePlans";
import { useSearchPlans } from "../../hooks/useSearchPlans";
import { RootStackParamList } from "../../navigation/RootNavigator ";
import { API_TOKEN } from "../../config";
// import { useSearchPlans } from "../hooks/useSearchPlans";

// Props
type RechargeScreenProps = NativeStackScreenProps<RootStackParamList, "Recharge">;
type RechargeRouteProps = RechargeScreenProps["route"];

export default function RechargeScreen() {
  const route = useRoute<RechargeRouteProps>();
  const { categoryId } = route.params || {};
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [mobileNumber, setMobileNumber] = useState("");
  const [processedMobileNumber, setProcessedMobileNumber] = useState("");
  const [searchAmount, setSearchAmount] = useState("");

  // ✅ Hooks
  // const { data } = useWallet();
  const { categories } = useCategories(API_TOKEN);
  const {
    plansData,
    operatorData,
    circleData,
    activeTab,
    setActiveTab,
    loading,
    error,
    showFullUI,
    setError,
  } = useMobilePlans(processedMobileNumber);

  const { tabCategories, activePlans } = useSearchPlans(plansData, activeTab, searchAmount);

  // Process mobile number
  const processMobileNumber = useCallback((number: string): string | null => {
    if (!number) return null;
    if (number.startsWith("+91")) number = number.slice(3);
    else if (number.startsWith("0")) number = number.slice(1);

    const digitsOnly = number.replace(/\D/g, "");
    const last10Digits = digitsOnly.slice(-10);
    return last10Digits.length === 10 ? last10Digits : null;
  }, []);

  const handleMobileNumberChange = (text: string) => {
    setMobileNumber(text.slice(-10));
    const processed = processMobileNumber(text);
    if (processed) setProcessedMobileNumber(processed);
    else {
      setProcessedMobileNumber("");
    }
  };

  if (error) return <ErrorDisplay error={error} onRetry={() => setError(null)} />;

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View
        className="bg-white px-4 pt-4 pb-4 flex-row items-center shadow-md rounded-b-2xl"
        style={{ paddingTop: Platform.OS === "ios" ? 50 : 50 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={32} color="#16a34a" />
        </TouchableOpacity>

        {!showFullUI ? (
          <Text className="text-xl font-semibold text-gray-800">Recharge or Pay Mobile Bill</Text>
        ) : (
          <View className="flex-row items-center">
            {operatorData?.image_url ? (
              <Image
                source={{ uri: `https://api.recharge.kashishindiapvtltd.com/${operatorData.image_url}` }}
                className="w-10 h-10 mr-3 rounded-full bg-white border border-gray-300"
                resizeMode="cover"
              />
            ) : (
              <View className="w-10 h-10 mr-3 rounded-full bg-green-100 justify-center items-center">
                <Text className="text-green-700 font-bold text-lg">
                  {operatorData?.name?.charAt(0) || "O"}
                </Text>
              </View>
            )}
            <View>
              <Text className="text-lg font-semibold text-gray-900">{operatorData?.name || "Operator"}</Text>
              <Text className="text-sm text-gray-600">{processedMobileNumber}</Text>
              <Text className="text-sm text-gray-600">{circleData?.name || "Circle"} • Prepaid</Text>
            </View>
          </View>
        )}
      </View>

      {/* Main Content */}
      <ScrollView className="px-4">
        {!showFullUI && (
          <View className="mb-5">
            <TextInput
              className="bg-white border border-green-500 rounded-full px-4 py-3 text-base"
              value={mobileNumber}
              onChangeText={handleMobileNumberChange}
              placeholder="Enter 10-digit mobile number"
              keyboardType="phone-pad"
              maxLength={14}
            />
          </View>
        )}

        {showFullUI && plansData?.RDATA && (
          <>
            <View className="mb-5">
              <TextInput
                className="bg-white border border-green-300 rounded-full px-4 py-3 text-base"
                value={searchAmount}
                onChangeText={setSearchAmount}
                placeholder="Search By Amount"
                keyboardType="numeric"
              />
            </View>

            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {!searchAmount && (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
                    <View className="flex-row pb-2">
                      {tabCategories.map((cat) => (
                        <TouchableOpacity
                          key={cat}
                          className={`rounded-full px-4 py-2 mr-2 ${
                            activeTab === cat ? "bg-green-600" : "bg-gray-100"
                          }`}
                          onPress={() => setActiveTab(cat)}
                        >
                          <Text
                            className={`text-sm font-medium ${
                              activeTab === cat ? "text-white" : "text-gray-600"
                            }`}
                          >
                            {cat}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </ScrollView>
                )}

                {activePlans.length > 0 ? (
                  <PlansList
                    plans={activePlans}
                    onNavigate={(plan) =>
                      navigation.navigate("PlanDetailsScreen1", {
                        plan,
                        mobileNumber: processedMobileNumber,
                        circleData,
                        operatorData,
                        categoryId,
                      })
                    }
                  />
                ) : (
                  <NoPlansForCategory />
                )}
              </>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}
