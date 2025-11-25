import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DrawerItem from './DrawerItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import ResetPinModal from './Drawer/ResetPinModal';
import {USER_DATA} from '../config';
// import DrawerItem from './DrawerItem';

const DrawerContent: React.FC<any> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Alert.alert(USER_DATA?.user?.name  || 'hel')
  // Alert.alert('kia')

  // const navigation = useNavigation();

  // ✅ Logout Function
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // storage clear

      Alert.alert('Logout', 'You have been logged out successfully!');

      // ✅ Redirect to PhoneNumberForm
      navigation.reset({
        index: 0,
        routes: [{name: 'PhoneNumberForm' as never}],
      });
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  // ✅ Reset PIN Click
  // DrawerContent.tsx
  const handleResetPin = () => {
    // Drawer close karo
    navigation.dispatch(DrawerActions.closeDrawer());

    // Thoda zyada delay do taki drawer fully close ho jaye
    setTimeout(() => {
      setModalVisible(true);
    }, 300); // 600ms ya 700ms try kar sakte ho
  };

  return (
    <>
      <View className="flex-1 bg-white mb-8">
        <View className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-6 rounded-3xl shadow-xl border border-green-100 flex-row items-center">
          {/* Left Section: Company Logo */}
          <View className="w-20 h-20 rounded-full bg-white border border-green-400 justify-center items-center shadow mr-4">
            <Image
              source={require('../assets/load.jpg')} // Company logo path
              className="w-16 h-16 rounded-full"
              resizeMode="contain"
            />
          </View>

          {/* Right Section: Profile Info */}
          <View className="flex-1">
            <Text className="text-green-900 text-2xl font-extrabold mb-2 tracking-wide">
              {USER_DATA?.user?.name
                ? USER_DATA.user.name.charAt(0).toUpperCase() +
                  USER_DATA.user.name.slice(1)
                : ''}
            </Text>

            <Text className="text-green-700 text-lg font-medium mb-1">
              {USER_DATA?.user?.mobile ?? ''}
            </Text>

            <Text className="text-green-700 text-sm">
              {USER_DATA?.user?.email ?? ''}{' '}
              <Text className="text-green-900 font-semibold">(Verify)</Text>
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-around p-4 bg-green-600 border-t border-white/20">
          {/* <Pressable className="items-center">
            <Icon name="help-circle-outline" size={24} color="#fff" />
            <Text className="text-white text-xs mt-1">Help</Text>
          </Pressable> */}
          <Pressable
            className="items-center"
            onPress={() => {
              navigation.dispatch(DrawerActions.closeDrawer());
              setTimeout(() => {
                navigation.navigate('HelpSupport');
              }, 300);
            }}>
            <Icon name="help-circle-outline" size={24} color="#fff" />
            <Text className="text-white text-xs mt-1">Help</Text>
          </Pressable>

          <Pressable className="items-center" onPress={handleResetPin}>
            <Icon name="key-outline" size={24} color="#fff" />
            <Text className="text-white text-xs mt-1">Reset PIN</Text>
          </Pressable>

          <Pressable
            className="items-center"
            onPress={() => Linking.openURL('https://kredpay.in/')}>
            {/* https://kashishindiapvtltd.com/ */}
            <Icon name="globe-outline" size={24} color="#fff" />
            <Text className="text-white text-xs mt-1">Website</Text>
          </Pressable>
        </View>

        {/* Menu Heading */}
        <View className="px-4 py-2">
          <Text className="text-base font-bold text-gray-800">Menu</Text>
        </View>

        {/* Menu Items */}
        <ScrollView className="flex-1 py-3" showsVerticalScrollIndicator={true}>
          {/* <DrawerItem icon="person-circle-outline" label="My KYC" hasChevron />
          <DrawerItem icon="card-outline" label="My Bank Accounts" hasChevron />
          <DrawerItem icon="document-text-outline" label="Reports" hasChevron /> */}
          {/* <DrawerItem
            icon="lock-closed-outline"
            label="Screen Lock"
            hasChevron
          /> */}
          {/* <DrawerItem
            icon="information-circle-outline"
            label="About Us"
            hasChevron
          /> */}
          <DrawerItem
            icon="information-circle-outline"
            label="About Us"
            hasChevron
            onPress={() => navigation.navigate('AboutUs')}
          />
          <DrawerItem
            icon="help-outline"
            label="FAQs"
            hasChevron
            onPress={() => navigation.navigate('FaqsScreen')}
          />
          <DrawerItem
            icon="chatbox-ellipses-outline"
            label="Return,refund & Cancellation policy"
            hasChevron
            onPress={() => navigation.navigate('ReturnRefundScreen')}
          />
          {/* <DrawerItem icon="star-outline" label="Rate Us" hasChevron /> */}
          <DrawerItem
            icon="shield-checkmark-outline"
            label="Privacy Policy"
            hasChevron
            onPress={() => navigation.navigate('PrivacyPolicyScreen')}
          />
          <DrawerItem
            icon="document-outline"
            label="Terms & Conditions"
            hasChevron
            onPress={() => navigation.navigate('TermsConditionScreen')}
          />
          {/* <DrawerItem
            icon="lock-closed-outline"
            label="Screen Lock"
            hasChevron
          /> */}
          {/* <DrawerItem icon="help-outline" label="FAQs" hasChevron />
          <DrawerItem
            icon="chatbox-ellipses-outline"
            label="Feedback"
            hasChevron
          />
          <DrawerItem icon="star-outline" label="Rate Us" hasChevron />
          <DrawerItem
            icon="shield-checkmark-outline"
            label="Privacy Policy"
            hasChevron
          />
          <DrawerItem
            icon="document-outline"
            label="Terms & Conditions"
            hasChevron
          /> */}
        </ScrollView>
        <View className="border-t border-gray-200 p-2">
          <Pressable
            className="flex-row items-center"
            onPress={handleLogout} // ✅ Function call
          >
            <Icon name="log-out-outline" size={22} color="red" />
            <Text className="ml-2 text-red-600 font-bold">Logout</Text>
          </Pressable>
        </View>
        <ResetPinModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </>
  );
};

export default DrawerContent;
