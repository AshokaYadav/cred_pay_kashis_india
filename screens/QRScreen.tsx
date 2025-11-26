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
import {API_TOKEN, USER_ID} from '../config';
import {useNavigation} from '@react-navigation/native';
import TransactionModal from '../components/transations/TransactionModal';
import api from '../lib/axios';
import RechargeList from '../components/transations/RechargeList';
import {useTransactions} from '../hooks/transactions/useTransactions';
import DepositeList from '../components/transations/DepositeList';
import ComplaintsList from '../components/transations/ComplaintsList';
import CompliantModal from '../components/transations/ComplaintModal';
import LedgerBook from '../components/transations/LedgerBook';

const QRScreen = () => {
  const navigation = useNavigation();
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isCompModalVisible, setCompModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
   const [compSelectedTransaction, setCompSelectedTransaction] = useState<any>(null);

  const toggleModal = () => setModalVisible(!isModalVisible);
  const ComptoggleModal = () => setCompModalVisible(!isCompModalVisible);

  const {
    selectedItem,
    setSelectedItem,
    data,
    loading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    fetchData,
    fetchWalletHistory,
  } = useTransactions({defaultType: 'Recharges'});

  const items = [
    {id: '1', name: 'Recharges'},
    {id: '2', name: 'Deposits'},
    {id: '3', name: 'Referrals'},
    {id: '4', name: 'Complaints'},
    {id: '5', name: 'LedgerBook'},
  ];

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
            value={startDate || 'MM/DD/YYYY'}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowStart(true)}>
            <Icon name="calendar" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 mr-2 flex-row items-center bg-white rounded-lg border border-gray-300 px-2">
          <TextInput
            className="flex-1 h-10"
            value={endDate || 'MM/DD/YYYY'}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowEnd(true)}>
            <Icon name="calendar" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={selectedItem == 'Recharges' ? fetchData : fetchWalletHistory}
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
                  if (selectedItem == item.name) {
                    fetchData();
                  }

                  setStartDate('');
                  setEndDate('');
                  setSelectedItem(item.name);
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

      {/* ✅ Transaction list */}
      {!loading && selectedItem === 'Recharges' && (
        <RechargeList
          data={data}
          loading={loading}
          onSelect={item => {
            setSelectedTransaction(item);
            toggleModal();
          }}
        />
      )}

      {!loading && selectedItem === 'Deposits' && (
        <DepositeList
          data={data}
          loading={loading}
          onSelect={item => {
            setSelectedTransaction(item);
            toggleModal();
          }}
        />
      )}

      {!loading && selectedItem === 'Complaints' && (
        <ComplaintsList
          data={data}
          loading={loading}
          onSelect={item => {
            setCompSelectedTransaction(item);
            ComptoggleModal();
          }}
        />
      )}

      {!loading && selectedItem === 'LedgerBook' && (
        <LedgerBook
          data={data}
          loading={loading}
          onSelect={item => {
            setCompSelectedTransaction(item);
            ComptoggleModal();
          }}
        />
      )}

      {/* ✅ Modal Component */}
      <TransactionModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        data={selectedTransaction}
      />
       <CompliantModal
        isVisible={isCompModalVisible}
        onClose={ComptoggleModal}
        data={compSelectedTransaction}
      />
    </View>
  );
};

export default QRScreen;
