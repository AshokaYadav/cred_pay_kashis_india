import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {API_TOKEN} from '../config';
import {useNavigation} from '@react-navigation/native';
import TransactionModal from '../components/transations/TransactionModal';
import api from '../lib/axios';

const QRScreen = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Recharges');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // 🔹 Navigation hook

  // ✅ Date picker states
  const [startDate, setStartDate] = useState("MM/DD/YYYY");
  const [endDate, setEndDate] = useState("MM/DD/YYYY");
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const items = [
    {id: '1', name: 'Recharges'},
    {id: '2', name: 'Deposits'},
    {id: '3', name: 'Referrals'},
    {id: '4', name: 'Complaints'},
    {id: '5', name: 'LedgerBook'},
  ];


   const fetchWalletHistory = async () => {
    setLoading(true);
    try {
      const params: WalletHistoryParams = {
        page: 1,
        limit: 25,
        id: "bafc2f22-0fe8-4d61-879e-a4a31c892698", // user id
        type: "CASH",
        dateRange: {
          from: new Date(startDate).toISOString(),
          to: new Date(endDate).toISOString(),
        },
      };

      const response = await api.put("/wallet/user/history", params);
      console.log("✅ Wallet history:", response.data);

      setData(response.data?.data?.data || []);
    } catch (error: any) {
      console.error(
        "❌ Error fetching wallet history:",
        error.response?.data || error.message
      );
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  
  

  const fetchData1 = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        'https://api.recharge.kashishindiapvtltd.com/recharge/history',
        {
          limit: 20,
          page: 1,
          startDate: startDate,
          endDate: endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );


      console.log(response);
      setData(response.data?.data?.data || []);


    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 API call with filter and date range
  const fetchData = async () => {
    setLoading(true);
    try {
      console.log('Fetching for:', selectedItem);
      // console.log('Start:', startDate.toISOString().split('T')[0]);
      // console.log('End:', endDate.toISOString().split('T')[0]);

      const res = await axios.put(
        'https://api.recharge.kashishindiapvtltd.com/recharge/history',
        {
          limit: 20,
          page: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(res?.data);

      setData(res.data?.data?.data || []);
    } catch (err) {
      console.error('QRScreen API Error:', err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };





  // 🔹 Fetch data when filter changes (optional, without date filter)
  useEffect(() => {
    fetchData();
  }, [selectedItem]);
  
  return (
    <View className="flex-1 bg-white">
      {/* <Text className="text-2xl font-bold text-center mb-4 text-gray-800">
        QR Transactions
      </Text> */}

      {/* Header */}
      <View className="bg-white px-4 mb-2 pt-4 pb-4 flex-row items-center shadow-md">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mr-3 b">
          <Icon name="arrow-back" size={32} color="#16a34a" />
        </TouchableOpacity>

        <Text className="text-lg font-semibold text-green-600">
          Transaction History
        </Text>
      </View>






      {/* ✅ Date Range Filter */}
      <View className="flex-row items-center mb-4">
        <View className="flex-1 mr-2 flex-row items-center bg-white rounded-lg border border-gray-300 px-2">
          <TextInput
            className="flex-1 h-10"
            value={startDate}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowStart(true)}>
            <Icon name="calendar" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 mr-2 flex-row items-center bg-white rounded-lg border border-gray-300 px-2">
          <TextInput
            className="flex-1 h-10"
            value={endDate}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowEnd(true)}>
            <Icon name="calendar" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={fetchData1}
          className="bg-white rounded-lg px-3 py-2 justify-center items-center">
          <Icon name="search" size={22} color="#999" />
        </TouchableOpacity>
      </View>




























     {showStart && (
  <DateTimePicker
    value={new Date()} // koi bhi date chahiye (default current rakh)
    mode="date"
    display="default"
    onChange={(e, selected) => {
      setShowStart(false);
      if (selected) {
        // ✅ Format MM/DD/YYYY
        let formatted = `${selected.getMonth() + 1}/${selected.getDate()}/${selected.getFullYear()}`;
        setStartDate(formatted);
      }
    }}
  />
)}


{showEnd && (
  <DateTimePicker
    value={new Date()}
    mode="date"
    display="default"
    onChange={(e, selected) => {
      setShowEnd(false);
      if (selected) {
        let formatted = `${selected.getMonth() + 1}/${selected.getDate()}/${selected.getFullYear()}`;
        setEndDate(formatted);
      }
    }}
  />
)}






































      {/* Horizontal filter buttons */}
      <View className="h-12 mb-4 rounded-xl bg-gray-200 justify-center">
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item}) => {
            const isSelected = selectedItem === item.name;
            return (
              <TouchableOpacity
                onPress={() => {
                  if(selectedItem==item.name){
                    fetchData();
                  }
  
                  setStartDate("MM/DD/YYYY")
                  setEndDate("MM/DD/YYYY")
                  setSelectedItem(item.name)
                
                }}
                className={`px-4 py-2 rounded-xl mx-2 ${
                  isSelected ? 'bg-white' : ''
                }`}>
                <Text
                  className={`font-medium ${
                    isSelected ? 'text-black' : 'text-gray-800'
                  }`}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Loader */}
      {loading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="green" />
          <Text className="mt-2 text-gray-600">Loading...</Text>
        </View>
      )}



      {/* Transaction list */}
      {!loading && (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text className="text-center text-gray-500 mt-10">
              No data available
            </Text>
          }
          renderItem={({item}) => (
           <TouchableOpacity
            onPress={() => {
              setSelectedTransaction(item);
              toggleModal();
            }}className="bg-white rounded-xl p-3 mb-3 shadow-sm border border-gray-200 flex-row items-center">
              <Image
                source={{
                  uri:
                    'https://api.recharge.kashishindiapvtltd.com/' +
                    item?.operator?.image_url,
                }}
                className="w-10 h-10 rounded-full mr-3"
              />

              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm font-semibold text-gray-800">
                    {item.operator?.name || 'Operator'}
                  </Text>
                  <Text className="text-sm text-gray-700">₹{item.price}</Text>
                </View>

                <View className="flex-row justify-between items-center mt-0.5">
                  <Text className="text-xs text-gray-700">{item.mobile}</Text>
                  <View className="flex-row items-center">
                    <Text className="text-xs text-green-600 italic">
                      Cash Back -{' '}
                    </Text>
                    <Text className="text-xs text-gray-700">₹{item.price}</Text>
                  </View>
                </View>

                <View className="flex-row justify-between items-center mt-0.5">
                  <Text className="text-[10px] text-gray-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </Text>
                  <Text
                    className={`text-xs font-bold ${
                      item.status === 'SUCCESS'
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* ✅ Modal Component */}
      <TransactionModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={selectedTransaction}
      />
    </View>
  );
};

export default QRScreen;
