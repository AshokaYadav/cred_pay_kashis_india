import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

type LoginScreenProps = {
  setIsLoggedIn: (val: boolean) => void;
  onLoginSuccess: () => void;
};


const LoginScreen = ({ setIsLoggedIn, onLoginSuccess }: LoginScreenProps) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
    onLoginSuccess();
  };

  const handleGoogleLogin = () => {
    console.log("Google login pressed");
  };

  const handleAppleLogin = () => {
    console.log("Apple login pressed");
  };

  return (
    <View className="flex-1 bg-white items-center justify-center w-full">
      {/* Logo */}
      <Image 
        source={require('../assets/load.jpg')} 
        className="w-32 h-16 resize-contain mb-5"
      />

      {/* Background with content */}
      <ImageBackground 
        source={require('../assets/onboard1.jpg')} 
        className="w-full flex-1 justify-end"
      >
        <View className="w-full h-1/2 justify-center items-center bg-white rounded-t-3xl pt-8 px-6">
          {/* Welcome Text */}
          <Text className="text-3xl md:text-4xl text-green-600 mb-2">
            Welcome to
          </Text>
          <Text className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
            Your App Name
          </Text>
          <Text className="text-xl md:text-2xl text-green-600 text-center mb-6">
            Login to continue
          </Text>

          {/* Login Buttons */}
          <TouchableOpacity 
            className="bg-green-600 py-4 px-8 rounded-full mt-5 w-full max-w-md items-center"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg font-bold">
              Sign In using Mobile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-green-600 py-4 px-8 rounded-full mt-5 w-full max-w-md items-center flex-row justify-center"
            onPress={handleGoogleLogin}
          >
            <Image 
              source={require('../assets/google.png')} 
              className="w-6 h-6 mr-2"
            />
            <Text className="text-white text-lg font-bold">
              Sign In Using Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-green-600 py-4 px-8 rounded-full mt-5 w-full max-w-md items-center flex-row justify-center"
            onPress={handleAppleLogin}
          >
            <Image 
              source={require('../assets/Apple_logo_black.png')} 
              className="w-6 h-6 mr-2"
            />
            <Text className="text-white text-lg font-bold">
              Sign In Using Apple ID
            </Text>
          </TouchableOpacity>

          {/* Separator */}
          <Text className="my-4 text-gray-500 text-base">
            ------------- OR -------------
          </Text>

          {/* Social Icons */}
          <View className="flex-row justify-center gap-4">
            <Image 
              source={require('../assets/google.png')} 
              className="w-10 h-10"
            />
            <Image 
              source={require('../assets/twitter.png')} 
              className="w-10 h-10"
            />
            <Image 
              source={require('../assets/facebook.png')} 
              className="w-10 h-10"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;