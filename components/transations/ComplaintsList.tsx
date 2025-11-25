import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

interface RechargeListProps {
  data: any[];
  loading: boolean;
  onSelect: (item: any) => void;
}

const RechargeList: React.FC<RechargeListProps> = ({ data, loading, onSelect }) => {

    console.log(data);
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
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={
        <Text className="text-center text-gray-500 mt-10">No data available</Text>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          className="bg-white rounded-xl p-3 mb-3 shadow-sm border border-gray-200 flex-row items-center"
        >
          <Image
            source={{
              uri:
                'https://api.recharge.kashishindiapvtltd.com/' +
                item?.recharge_history?.operator?.image_url,
            }}
            className="w-10 h-10 rounded-full mr-3"
          />

          <View className="flex-1">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-gray-800">
                {item?.recharge_history?.operator?.name || 'Operator'}
              </Text>
              <Text className="text-sm text-gray-700">₹{item.price}</Text>
            </View>

            <View className="flex-row justify-between items-center mt-0.5">
              <Text className="text-xs text-gray-700">{item?.user?.mobile}</Text>
              <View className="flex-row items-center">
                 <Text
                className={`text-xs font-bold ${
                  item.status === 'SUCCESS' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {item.status}
              </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RechargeList;
