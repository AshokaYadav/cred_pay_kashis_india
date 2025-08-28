import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ServiceItem from './ServiceItem';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator ';

const RechargeGrid = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    //i want here to show Serivice item based on arrya of object i get  do remember one thing over here
    // if name Dth  <ServiceItem icon={<Entypo name="tv" size={24} color="#28a745" />} label="DTH" />
    //if prepaid <ServiceItem
        //   icon={<FontAwesome name="mobile" size={24} color="#28a745" />}
        //   label="Mobile"
        //   onPress={() => navigation.navigate('Recharge')}
        // />

        

//      {
//             "id": "091f5af7-4fd0-4378-8947-9177c2c59ff0",
//             "name": "Dth",
//             "status": "ACTIVE"
//         },
//         {
//             "id": "1080e6d9-4156-4aed-8e05-3407c7a17a8c",
//             "name": "Prepaid",
//             "status": "ACTIVE"
//         }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recharge & Pay Bills</Text>
      <View style={styles.gridContainer}>
        <ServiceItem
          icon={<FontAwesome name="mobile" size={24} color="#28a745" />}
          label="Mobile"
          onPress={() => navigation.navigate('Recharge')}
        />
        <ServiceItem icon={<Entypo name="tv" size={24} color="#28a745" />} label="DTH" />
        {/* <ServiceItem icon={<Ionicons name="send" size={24} color="#28a745" />} label="Send Money" /> */}
        <ServiceItem icon={<MaterialCommunityIcons name="flash" size={24} color="#28a745" />} label="Electricity" />
        <ServiceItem icon={<FontAwesome name="globe" size={24} color="#28a745" />} label="Internet" />
        {/* <ServiceItem icon={<FontAwesome name="mobile" size={24} color="#28a745" />} label="Mobile" /> */}

        <ServiceItem icon={<FontAwesome name="file-text-o" size={24} color="#28a745" />} label="Bill" />
        <ServiceItem icon={<FontAwesome name="shield" size={24} color="#28a745" />} label="Insurance" />
        <ServiceItem icon={<MaterialCommunityIcons name="ticket-percent" size={24} color="#28a745" />} label="Voucher" />
        <ServiceItem icon={<FontAwesome name="shopping-cart" size={24} color="#28a745" />} label="Merchant" />
        <ServiceItem icon={<Entypo name="dots-three-horizontal" size={24} color="#28a745" />} label="More" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 14,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default RechargeGrid;

