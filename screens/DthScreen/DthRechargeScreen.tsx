import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ Back, Search
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // ✅ Dots
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootNavigator ';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../lib/axios';
import RechargeModal from '../../components/DthModal/RechargeModal';
import {ToastAndroid} from 'react-native';
import Toast from 'react-native-toast-message';

// ✅ Navigation type define karo
type DthRechargeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DthRechargeScreen'
>;

type Operator = {
  id: string;
  name: string;
  image_url: string | null;
  category_id?: string;
  operator_code?: string;
  status?: string;
};

type RechargeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'D2HRechargeScreen'
>;
type RechargeRouteProps = RechargeScreenProps['route'];

export default function DthRechargeScreen() {
  const route = useRoute<RechargeRouteProps>();
  const [selectedOperator, setSelectedOperator] = useState<any>(null);
  const [subscriberNo, setSubscriberNo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {categoryId} = route.params || {};
  // Alert.alert(categoryId);

  const [operatorss, setOperatorss] = useState<Operator[]>([]);
  

  //   const categoryId = "091f5af7-4fd0-4378-8947-9177c2c59ff0";
  const navigation = useNavigation<DthRechargeNavigationProp>();
  // const route = useRoute<RechargeRouteProps>();

  useEffect(() => {
    console.log(subscriberNo);
  }, [subscriberNo]);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const res = await api.get(`/operator/byCategory/${categoryId}`);
        console.log(res?.data?.data);
        setOperatorss(res.data?.data || []); // response ke andar data hoga
      } catch (error) {
        console.error('❌ Error fetching operators:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchOperators();
  }, [categoryId]);

  const handleOperatorClick = (op: any) => {
    setSelectedOperator(op);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row items-center bg-green-500 p-4">
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-3">
            Dth Recharge
          </Text>
        </View>

        {/* Banner */}
        <View className="bg-blue-100 rounded-2xl m-4 p-4">
          {/* Top Row */}
          <View className="flex-row items-center">
            <View className="flex-1">
              <Text className="text-blue-800 font-semibold text-base">
                DTH Recharge Plans have Changed
              </Text>
              <Text className="text-blue-600 text-sm mt-1">
                Check plans before you recharge
              </Text>
            </View>
            <Image
              source={require('../../assets/dth/hand-with-loudspeaker-megaphone-with-lightnings.png')}
              className="w-16 h-16"
              resizeMode="contain"
            />
          </View>

          {/* Operators Row */}
          <View className="flex-row items-center mt-4 space-x-10">
            <Image
              source={require('../../assets/dth/IconsRow/bharti-airtel.png')}
              className="w-12 h-12 mr-2"
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/dth/IconsRow/Reliance_Jio_Logo.svg.png')}
              className="w-12 h-12 ml-2"
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/dth/IconsRow/Vodafone_Idea_logo.png')}
              className="w-12 h-12 ml-2"
              resizeMode="contain"
            />
          </View>

          {/* Pagination Dots */}
          <View className="flex-row justify-center items-center mt-4">
            <MaterialIcons
              name="circle"
              size={10}
              color="green"
              style={{marginHorizontal: 3}}
            />
            <MaterialIcons
              name="circle"
              size={10}
              color="gray"
              style={{marginHorizontal: 3}}
            />
            <MaterialIcons
              name="circle"
              size={10}
              color="gray"
              style={{marginHorizontal: 3}}
            />
          </View>
        </View>

        {/* Search */}
        <View className="mx-4 mb-4">
          <View className="flex-row items-center border rounded-full px-3 py-2 bg-gray-100">
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              placeholder="Search by Operator"
              className="ml-2 flex-1 text-gray-700"
            />
          </View>
        </View>

        {/* Operator Grid */}
        <Text className="ml-4 mb-2 font-semibold text-gray-800">
          Select Operator
        </Text>
        <View className="flex-row flex-wrap justify-start px-4">
          {operatorss.map(op => (
            <TouchableOpacity
              key={op.id}
              className="w-[30%] items-center mb-6"
              onPress={() => handleOperatorClick(op)}>
              {/* Icon container */}
              <View className="w-20 h-20 bg-white border border-gray-200 rounded-2xl shadow-sm items-center justify-center mb-2">
                <Image
                  source={{
                    uri: `https://api.recharge.kashishindiapvtltd.com/${op.image_url}`,
                  }}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </View>

              {/* Name below */}
              <Text className="text-center text-sm font-medium text-gray-700 w-20">
                {op.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* ✅ Modal Component */}
      <RechargeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        operator={selectedOperator}
        subscriberNo={subscriberNo}
        setSubscriberNo={setSubscriberNo}
        // operatorId={operatorId}
        onContinue={() => {
          console.log('Continue with:', subscriberNo);
          if (subscriberNo.length >= 7) {
            setModalVisible(false);

            // ✅ navigate to D2HRechargeScreen
            navigation.navigate('D2HRechargeScreen', {
              catId:categoryId,
              categoryId: subscriberNo, // jo route se aya tha
              selectedOperator:selectedOperator
              
              // subscriberNo: subscriberNo, // jo user ne dala
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Invalid Subscriber Number',
              text2: 'It must be at least 7 digits long.',
              position: 'top',
            });
          }
        }}
      />
    </>
  );
}
