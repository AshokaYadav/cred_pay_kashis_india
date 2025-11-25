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
              {/* <Text className="border border-500  font-semibold text-sm  px-3  rounded-full  text-gray-800">
                {item.operator?.name || 'Operator'}
              </Text> */}
              <Text className="border border-gray-300 font-semibold text-sm px-3 py-0.5 rounded-full text-gray-800 bg-gray-50">
                {item.operator?.name || 'Operator'}
              </Text>
              <StatusBadge status={item.status} />
            </View>

            <View className="flex-row justify-between items-center mt-0.5">
              <Text className="text-xs text-gray-700">{item.mobile}</Text>
              <View className="flex-row items-center pr-2">
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
              <Text className="text-sm text-gray-700 pr-2">
                ₹{' '}
                {item.status === 'FAILED' || item.status === 'PENDING'
                  ? 0
                  : item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RechargeList;

// import React from 'react';
// import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
// import StatusBadge from './Transaction/StatusBadge';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// interface RechargeListProps {
//   data: any[];
//   loading: boolean;
//   onSelect: (item: any) => void;
// }

// const RechargeList: React.FC<RechargeListProps> = ({
//   data,
//   loading,
//   onSelect,
// }) => {
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text className="text-gray-600">Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={item => item.id.toString()}
//       ListEmptyComponent={
//         <Text className="text-center text-gray-500 mt-10">
//           No data available
//         </Text>
//       }
//       renderItem={({item}) => (
//         <TouchableOpacity
//           onPress={() => onSelect(item)}
//           className="bg-white rounded-2xl p-4 mb-2 border border-gray-300 shadow-sm flex-row items-center mx-2"
//           style={{
//             shadowColor: '#000',
//             shadowOffset: {width: 0, height: 2},
//             shadowOpacity: 0.1,
//             shadowRadius: 3,
//             elevation: 2,
//           }}>
//           <Image
//             source={{
//               uri:
//                 'https://api.recharge.kashishindiapvtltd.com/' +
//                 item?.operator?.image_url,
//             }}
//             className="w-12 h-12 rounded-full mr-3 border border-gray-300"
//           />

//           <View className="flex-1">
//             <View className="flex-row justify-between items-center mb-1">
//               <Text className="border border-gray-300 font-semibold text-sm px-3 py-0.5 rounded-full text-gray-800 bg-gray-50">
//                 {item.operator?.name || 'Operator'}
//               </Text>
//               <StatusBadge status={item.status} />
//             </View>

//             <View className="flex-row justify-between items-center">
//               <Text className="text-xs text-gray-700">{item.mobile}</Text>

//               <View className="flex-row items-center pr-2">
//                 <Ionicons name="gift-outline" size={14} color="#22c55e" />
//                 <Text className="text-xs text-gray-700 font-medium ml-1">
//                   ₹
//                   {item.status === 'FAILED' || item.status === 'PENDING'
//                     ? 0
//                     : item.price}
//                 </Text>
//               </View>
//             </View>

//             <View className="flex-row justify-between items-center mt-1">
//               <Text className="text-[10px] text-gray-500">
//                 {new Date(item.createdAt).toLocaleString()}
//               </Text>
//               <Text className="text-sm text-gray-800 font-semibold pr-2">
//                 ₹ {item.price}
//               </Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// export default RechargeList;
