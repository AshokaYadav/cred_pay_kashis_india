import {
  View,
  Text,
  Pressable,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const faqs = [
  {
    icon: 'person-add-outline',
    title: 'Prepaid',
    content:
      'Step 1: Open App\nStep 2: Go to Registration\nStep 3: Fill details\nStep 4: Submit',
  },
  {
    icon: 'wallet-outline',
    title: 'DTH',
    content:
      'Step 1: Go to Wallet\nStep 2: Click Add Money\nStep 3: Choose method\nStep 4: Confirm payment',
  },
//   {
//     icon: 'phone-portrait-outline',
//     title: 'Recharge',
//     content:
//       'Step 1: Open Recharge\nStep 2: Enter number\nStep 3: Select plan\nStep 4: Pay',
//   },
//   {
//     icon: 'document-text-outline',
//     title: 'Bill Payment',
//     content:
//       'Step 1: Go to Bills\nStep 2: Select biller\nStep 3: Enter details\nStep 4: Pay',
//   },
//   {
//     icon: 'gift-outline',
//     title: 'Gift Card',
//     content:
//       'Step 1: Open Gift Card\nStep 2: Select card\nStep 3: Pay\nStep 4: Get code',
//   },
//   {
//     icon: 'id-card-outline',
//     title: 'KYC',
//     content:
//       'Step 1: Go to KYC\nStep 2: Upload documents\nStep 3: Submit\nStep 4: Wait for approval',
//   },
//   {
//     icon: 'swap-horizontal-outline',
//     title: 'DMT',
//     content:
//       'Step 1: Go to DMT\nStep 2: Add receiver\nStep 3: Enter amount\nStep 4: Send',
//   },
];

const FaqsScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  const panelTranslate = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0], // panel categories ke neeche se slide hoke aayega
  });

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-white px-4 pb-4 flex-row items-center shadow-md rounded-b-2xl"
        style={{ paddingTop: Platform.OS === 'ios' ? 15 : 15 }}>
        <Pressable onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={32} color="#16a34a" />
        </Pressable>

        <Text className="text-xl font-semibold text-gray-800">FAQs</Text>
      </View>

      {/* Body */}
      <ScrollView className="flex-1 p-4">
        {/* Categories Heading with Arrow */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold text-gray-700">Categories</Text>

          <Pressable onPress={() => setIsExpanded(!isExpanded)} className="p-1">
            <Ionicons
              name={
                isExpanded
                  ? 'chevron-up-circle-outline'
                  : 'chevron-down-circle-outline'
              }
              size={28}
              color="#16a34a"
            />
          </Pressable>
        </View>

        {/* Categories Grid */}
        <View className="flex-row flex-wrap justify-between mb-4">
          {faqs.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setSelected(item);
                setIsExpanded(true);
              }}
              className={`w-[48%] rounded-xl items-center justify-center p-4 mb-4 
              ${selected?.title === item.title ? 'bg-green-200' : 'bg-green-50'}`}>
              <Ionicons name={item.icon} size={28} color="#2563eb" />
              <Text className="text-center text-gray-800 font-medium mt-2">
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Animated Panel */}
        <Animated.View
          style={{
            transform: [{ translateY: panelTranslate }],
          }}
          className="bg-white shadow-lg rounded-2xl p-5">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold text-gray-800">
              {selected?.title
                ? `${selected.title} - Process`
                : 'Select a category'}
            </Text>

            {/* <Pressable onPress={() => setIsExpanded(false)} className="p-1">
              <Ionicons
                name="chevron-down-circle-outline"
                size={28}
                color="#16a34a"
              />
            </Pressable> */}
          </View>

          <Text className="text-gray-700 mt-3 whitespace-pre-line">
            {selected?.content ||
              'Choose a category from above to see steps.'}
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default FaqsScreen;
