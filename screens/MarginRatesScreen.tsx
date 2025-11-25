import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

interface Service {
  id: number;
  name: string;
  rate: string;
  logo: any; // ab image use karenge
}

interface ServiceItemProps {
  name: string;
  rate: string;
  logo: any;
}

const MarginRatesScreen: React.FC = () => {
     const navigation = useNavigation();   // 👈 navigation hook
  const prepaidServices: Service[] = [
    { id: 1, name: 'Airtel', rate: 'Flat 1.50%', logo: require('../assets/margin/airtel.webp') },
    { id: 2, name: 'Jio', rate: 'Flat 1.05%', logo: require('../assets/margin/jio.png') },
    { id: 3, name: 'Vi', rate: 'Flat 3.5%', logo: require('../assets/margin/vi.png') },
    { id: 4, name: 'BSNL TopUp', rate: 'Flat 4.5%', logo: require('../assets/margin/bsnl.png') },
  ];

  const dthServices: Service[] = [
    { id: 1, name: 'Tata Play', rate: 'Flat 4.05%', logo: require('../assets/margin/tata-plya.webp') },
    { id: 2, name: 'Dish TV', rate: 'Flat 4.05%', logo: require('../assets/margin/dishtv.png') },
    { id: 3, name: 'D2H', rate: 'Flat 4.05%', logo: require('../assets/margin/dtwoh.png') },
    { id: 4, name: 'Sun Direct', rate: 'Flat 4.05%', logo: require('../assets/margin/sundirect.png') },
    { id: 5, name: 'Airtel Digital TV', rate: 'Flat 4.05%', logo: require('../assets/margin/airtel.webp') },
  ];



  const ServiceItem: React.FC<ServiceItemProps> = ({ name, rate, logo }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <Image source={logo} style={{ width: 30, height: 30, marginRight: 12, resizeMode: 'contain' }} />
        <Text style={{ color: '#333', fontSize: 15, fontWeight: '500' }}>{name}</Text>
      </View>
      <Text style={{ color: '#16a34a', fontSize: 13, fontWeight: '600' }}>{rate}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 14,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#e5e7eb',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 16 }} 
          onPress={() => navigation.goBack()}
          >
            <FontAwesome name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#111' }}>
            Margin Rates
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="info-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Prepaid Section */}
        <View style={{ marginTop: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 16,
              backgroundColor: '#f3f4f6',
            }}>
            <Text style={{ color: '#374151', fontWeight: '600', fontSize: 13 }}>Prepaid</Text>
           <Ionicons name="call-sharp" size={20} color="#666" />  
          </View>
          {prepaidServices.map((service) => (
            <ServiceItem key={service.id} name={service.name} rate={service.rate} logo={service.logo} />
          ))}
        </View>

        {/* DTH Section */}
        <View style={{ marginTop: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 16,
              backgroundColor: '#f3f4f6',
            }}>
            <Text style={{ color: '#374151', fontWeight: '600', fontSize: 13 }}>DTH</Text>
            <Entypo name="tv" size={20} color="#666" />
          </View>
          {dthServices.map((service) => (
            <ServiceItem key={service.id} name={service.name} rate={service.rate} logo={service.logo} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MarginRatesScreen;
