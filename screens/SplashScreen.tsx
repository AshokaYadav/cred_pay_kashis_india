// screens/SplashScreen.tsx
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator ";
// import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("PhoneNumberForm"); // 2 sec baad redirect
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To</Text>
      <Text style={styles.subTitle}>Kashish pay</Text>
      <Image
        source={require("../assets/load.jpg")} // 👈 apna logo yaha rakho
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.cashback}>
        Cashback on Every <Text style={{ color: "green" }}>Recharge</Text> and{" "}
        <Text style={{ color: "green" }}>Billpayments</Text>
      </Text>
      <Text style={styles.footer}>🇮🇳 Made in India 🇮🇳</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  subTitle: { fontSize: 18, color: "green", marginBottom: 20 },
  logo: { width: 200, height: 200 },
  cashback: { marginTop: 20, fontSize: 16, fontWeight: "500", textAlign: "center" },
  footer: { marginTop: 30, fontSize: 16, fontWeight: "600", color: "green" },
});

export default SplashScreen;
