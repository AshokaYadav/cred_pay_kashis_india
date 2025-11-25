import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import StatusBadge from './Transaction/StatusBadge';

interface RechargeListProps {
  data: any[];
  loading: boolean;
  onSelect: (item: any) => void;
}

const RechargeList: React.FC<RechargeListProps> = ({
  data,
  loading,
  onSelect,
}) => {
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600">Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={
        <Text className="text-center text-gray-500 mt-10">
          No data available
        </Text>
      }
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          className="bg-white rounded-xl p-3 mb-3 shadow-sm border border-gray-200 flex-row items-center">
          <View className="flex-1">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-gray-800">
                {item.remote_order_id
                  ? item.remote_order_id.charAt(0).toUpperCase() +
                    item.remote_order_id.slice(1)
                  : ''}
              </Text>

              <Text className="text-sm text-gray-700">₹{item.amount}</Text>
            </View>

            <View className="flex-row justify-between items-center mt-1">
              {/* Status Box */}
              <StatusBadge status={item.status} />

              {/* Date */}
              <View className="flex-row items-center">
                <Text className="text-xs text-gray-700">
                  {new Date(item.createdAt).toLocaleString()}
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center mt-0.5">
              {item.bank_rrn && (
                <Text className="text-[10px] text-gray-500">
                  <Text className="text-xs text-green-600 italic">
                    BANK RRN:
                  </Text>
                  {item.bank_rrn}
                </Text>
              )}
              {item.bank_rrn && (
                <Text className="text-[10px] text-gray-500">
                  {item.debit_txn_upi_id}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RechargeList;
