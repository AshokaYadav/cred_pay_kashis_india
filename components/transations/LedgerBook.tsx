// import React from 'react';
// import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

// const validTypes = [
//   'RECHARGE_DEBIT',
//   'WALLET_DEBIT',
//   'ADJUSTMENT_DEBIT',
//   'RECHARGE_COMMISSION',
// ];

// const validMsgs = [
//   'Transaction Success by Admin',
//   'Successfully Accepted',
//   'Success',
// ];

// interface RechargeListProps {
//   data: any[];
//   loading: boolean;
//   onSelect: (item: any) => void;
// }

// const LedgerBook: React.FC<RechargeListProps> = ({data, loading, onSelect}) => {
//   console.log(data);
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
//           className="bg-white rounded-xl p-3 mb-3 shadow-sm border border-gray-200 flex-row items-center">
//           <Image
//             source={{
//               uri:
//                 'https://api.recharge.kashishindiapvtltd.com/' +
//                 item?.recharge_history?.operator?.image_url,
//             }}
//             className="w-10 h-10 rounded-full mr-3"
//           />

//           <View className="flex-1">
//             <View className="text-center border border-gray-400 p-3">
//               {item.rechargeData ? (
//                 <>
//                   {/* Success By Admin */}
//                   {item.msg === 'Transaction Success by Admin' && (
//                     <View className="flex-row items-center space-x-3">
//                       <View className="flex-col space-y-1">
//                         <Text>
//                           Success By Admin {item.rechargeData?.operator?.name}
//                           {item.rechargeData?.circle?.name
//                             ? ` [${item.rechargeData?.category?.name}] `
//                             : ''}
//                           No. {item.rechargeData?.mobile}
//                         </Text>

//                         <Text className="text-left">
//                           {item.msg
//                             .toString()
//                             .replace('Error transferring commission:', '')}
//                         </Text>
//                       </View>
//                     </View>
//                   )}

//                   {/* Debit Case */}
//                   {item.type === 'RECHARGE_DEBIT' &&
//                     item.msg !== 'Transaction Success by Admin' && (
//                       <View className="flex-row items-center space-x-3">
//                         <View className="flex-col">
//                           <Text>
//                             Debit to {item.rechargeData?.operator?.name}
//                             {item.rechargeData?.circle?.name
//                               ? ` [${item.rechargeData?.category?.name}] `
//                               : ''}
//                             No. {item.rechargeData?.mobile}
//                           </Text>

//                           <Text className="text-left">
//                             {item.msg
//                               .toString()
//                               .replace('Error transferring commission:', '')}
//                           </Text>
//                         </View>
//                       </View>
//                     )}

//                   {/* Commission */}
//                   {item.type === 'RECHARGE_COMMISSION' &&
//                     item.msg !== 'Transaction Success by Admin' && (
//                       <View className="flex-row items-center space-x-3">
//                         <View className="flex-col space-y-1">
//                           <Text>
//                             {item.msg === 'Transaction Failed by Admin'
//                               ? 'Failed By Admin'
//                               : 'Refund To'}{' '}
//                             {item.rechargeData?.operator?.name}
//                             {item.rechargeData?.circle?.name
//                               ? ` [${item.rechargeData?.category?.name}] `
//                               : ''}
//                             No. {item.rechargeData?.mobile}
//                           </Text>

//                           <Text className="text-left">
//                             {item.msg
//                               .toString()
//                               .replace('Error transferring commission:', '')}
//                           </Text>
//                         </View>
//                       </View>
//                     )}

//                   {/* Other Cases */}
//                   {!['RECHARGE_DEBIT', 'RECHARGE_COMMISSION'].includes(
//                     item.type,
//                   ) &&
//                     item.msg !== 'Transaction Success by Admin' && (
//                       <Text className="text-gray-500">
//                         {item?.msg || '---'}
//                       </Text>
//                     )}
//                 </>
//               ) : (
//                 <>
//                   {/* Success By Admin */}
//                   {item.msg === 'Transaction Success by Admin' && (
//                     <View className="flex-col">
//                       <Text>
//                         Success By Admin {item.rechargeData?.operator?.name}
//                         {item.rechargeData?.circle?.name
//                           ? ` [${item.rechargeData?.category?.name}] `
//                           : ''}
//                         No. {item.rechargeData?.mobile}
//                       </Text>
//                     </View>
//                   )}

//                   {/* Failed By Admin */}
//                   {item.msg === 'Transaction Failed by Admin' && (
//                     <View className="flex-col space-y-1">
//                       <Text>
//                         Failed By Admin {item.rechargeData?.operator?.name}
//                         {item.rechargeData?.circle?.name
//                           ? ` [${item.rechargeData?.category?.name}] `
//                           : ''}
//                         No. {item.rechargeData?.mobile}
//                       </Text>

//                       <Text className="text-left">
//                         {item.msg
//                           .toString()
//                           .replace('Error transferring commission:', '')}
//                       </Text>
//                     </View>
//                   )}

//                   {/* Others */}
//                   {item.msg !== 'Transaction Success by Admin' &&
//                     item.msg !== 'Transaction Failed by Admin' && (
//                       <>
//                         {item.msg === 'Credit Wallet Request Generated' ? (
//                           <View className="flex-col">
//                             <Text className="text-left">
//                               Add Money by UPI . RRN [{item?.bank_rrn || '---'}]
//                             </Text>

//                             <Text className="text-left">
//                               order Id : [{item?.remote_order_id || '---'}]
//                             </Text>
//                           </View>
//                         ) : (
//                           <Text className="text-gray-500">
//                             {item?.msg || '---'}
//                           </Text>
//                         )}
//                       </>
//                     )}
//                 </>
//               )}
//             </View>

//             <View className="flex-row justify-between items-center">
//               {item.type !== 'CASH' && item.type !== 'RECHARGE_COMMISSION' ? (
//                 <Text className="text-sm font-semibold text-gray-800">
//                   cashback{' '}
//                   {item?.amount != null &&
//                   item?.opening_balance != null &&
//                   item?.closing_balance != null
//                     ? item.amount -
//                       (item.opening_balance - item.closing_balance)
//                     : '---'}
//                 </Text>
//               ) : (
//                 <Text>...</Text>
//               )}

//             </View>

//             <View className="flex-row justify-between items-center">
//               <Text className="text-sm font-semibold text-gray-800">
//                 {item?.closing_balance || 'Operator'}
//               </Text>
//               <Text className="text-sm text-gray-700">
//                 charge amount₹{' '}
//                 {validTypes.includes(item.type) && validMsgs.includes(item.msg)
//                   ? String(item.amount).replace('-', '')
//                   : '---'}
//               </Text>
//               <Text className="text-sm text-gray-700">
//                 ₹{item.opening_balance}
//               </Text>
//             </View>

//             <View className="flex-row justify-between items-center mt-0.5">
             
//               <View className="flex-row items-center">
//                 <Text
//                   className={`text-xs font-bold ${
//                     validTypes.includes(item.type) &&
//                     validMsgs.includes(item.msg)
//                       ? 'text-green-600' // Debited
//                       : 'text-red-500' // Credited
//                   }`}>
//                   {validTypes.includes(item.type) &&
//                   validMsgs.includes(item.msg)
//                     ? 'Debited'
//                     : 'Credited'}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// export default LedgerBook;
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const validTypes = [
  "RECHARGE_DEBIT",
  "WALLET_DEBIT",
  "ADJUSTMENT_DEBIT",
  "RECHARGE_COMMISSION",
];

const validMsgs = [
  "Transaction Success by Admin",
  "Successfully Accepted",
  "Success",
];

interface RechargeListProps {
  data: any[];
  loading: boolean;
  onSelect: (item: any) => void;
}

const LedgerBook: React.FC<RechargeListProps> = ({ data, loading, onSelect }) => {
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Text className="text-gray-600 text-base">Loading...</Text>
      </View>
    );
  }

  const renderTransactionDescription = (item: any) => {
    if (item.rechargeData) {
      const operator = item.rechargeData?.operator?.name;
      const circle = item.rechargeData?.circle?.name
        ? ` [${item.rechargeData?.category?.name}] `
        : "";
      const mobile = item.rechargeData?.mobile;

      if (item.msg === "Transaction Success by Admin")
        return (
          <View>
            <Text className="text-sm font-semibold text-gray-900">
              Success By Admin {operator}{circle} No. {mobile}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              {item.msg.replace("Error transferring commission:", "")}
            </Text>
          </View>
        );

      if (item.type === "RECHARGE_DEBIT")
        return (
          <View>
            <Text className="text-sm font-semibold text-gray-900">
              Debit to {operator}{circle} No. {mobile}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              {item.msg.replace("Error transferring commission:", "")}
            </Text>
          </View>
        );

      if (item.type === "RECHARGE_COMMISSION")
        return (
          <View>
            <Text className="text-sm font-semibold text-gray-900">
              {item.msg === "Transaction Failed by Admin"
                ? "Failed By Admin"
                : "Refund To"}{" "}
              {operator}{circle} No. {mobile}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              {item.msg.replace("Error transferring commission:", "")}
            </Text>
          </View>
        );

      return (
        <Text className="text-sm text-gray-700">{item?.msg || "---"}</Text>
      );
    }

    return (
      <Text className="text-sm text-gray-700">{item?.msg || "---"}</Text>
    );
  };

  const getDebitCreditLabel = (item: any) =>
    validTypes.includes(item.type) && validMsgs.includes(item.msg)
      ? "Debited"
      : "Credited";

  const getChargeAmount = (item: any) =>
    validTypes.includes(item.type) && validMsgs.includes(item.msg)
      ? String(item.amount).replace("-", "")
      : "---";

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item?.id?.toString()}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
      ListEmptyComponent={
        <View className="flex-1 justify-center items-center py-20">
          <Text className="text-center text-gray-400 text-base">
            No transactions available
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          className="bg-white rounded-xl mb-4 shadow-sm border border-gray-200 overflow-hidden"
          activeOpacity={0.7}
        >

          {/* Header Without Image — Clean New Design */}
          <View className="px-4 py-3 bg-blue-50 border-b border-blue-100 rounded-t-xl">
            <Text className="text-[13px] font-semibold text-blue-700 uppercase tracking-wide">
              {getDebitCreditLabel(item)}
            </Text>
          </View>

          {/* Description Box */}
          <View className="p-4 bg-white">
            <View className="rounded-md p-3 bg-gray-50 border border-gray-200">
              {renderTransactionDescription(item)}
            </View>
          </View>

          {/* Transaction Info */}
          <View className="px-4 pb-4 bg-white space-y-3">

            {/* Cashback */}
            {item.type !== "CASH" && item.type !== "RECHARGE_COMMISSION" ? (
              <View className="flex-row justify-between items-center border-b border-gray-200 pb-2">
                <Text className="text-xs text-gray-500 uppercase">Cashback</Text>
                <Text className="text-sm font-bold text-green-600">
                  ₹
                  {item.amount != null &&
                  item.opening_balance != null &&
                  item.closing_balance != null
                    ? (
                        item.amount -
                        (item.opening_balance - item.closing_balance)
                      ).toFixed(2)
                    : "---"}
                </Text>
              </View>
            ) : null}

            {/* Grid Values */}
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-xs text-gray-500">Opening Balance</Text>
                <Text className="text-sm font-semibold text-gray-800">
                  ₹{item?.opening_balance || "---"}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-xs text-gray-500">Charge Amount</Text>
                <Text className="text-sm font-semibold text-gray-800">
                  ₹{getChargeAmount(item)}
                </Text>
              </View>

              <View className="flex-row justify-between pt-2 border-t border-gray-200">
                <Text className="text-xs text-gray-500">Closing Balance</Text>
                <Text className="text-base font-bold text-gray-900">
                  ₹{item?.closing_balance || "---"}
                </Text>
              </View>
            </View>
          </View>

        </TouchableOpacity>
      )}
    />
  );
};

export default LedgerBook;
