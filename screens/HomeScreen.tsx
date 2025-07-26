import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RechargeGrid from '../components/RechargeGrid';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/load.jpg')} style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Search services..."
          placeholderTextColor="#999"
        />

        {/* Header */}
        <View style={styles.header}>
          {/* Profile Box */}
          <View style={styles.profileBox}>
            <Text style={styles.profileName}>Ajeet Kadam</Text>
            <Text style={styles.balanceText}>Main Balance</Text>
            <View style={styles.balanceRow}>
              <FontAwesome name="money" size={20} color="#28a745" />
              <Text style={styles.amountText}>₹ 9000</Text>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actionsWrapper}>
            <TouchableOpacity style={styles.actionBox}>
              <MaterialCommunityIcons name="gift" size={24} color="#fff" />
              <Text style={styles.actionText}>Refer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBox}>
              <AntDesign name="pluscircle" size={24} color="#fff" />
              <Text style={styles.actionText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recharge Banner */}
        <View style={styles.rechargeSection}>
          <Image
            source={require('../assets/recharge.jpg')}
            style={styles.rechargeImage}
          />
        </View>

        {/* Recharge Grid Component */}
        <RechargeGrid />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scrollContainer: { padding: 16 },
  logo: {
    width: '80%',
    height: 90,
    resizeMode: 'contain',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
    elevation: 2,
  },
  header: { flexDirection: 'row', marginBottom: 20 },
  profileBox: {
    flex: 1.2,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    elevation: 3,
    marginRight: 8,
  },
  profileName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  balanceText: { fontSize: 14, color: '#888' },
  balanceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  amountText: {
    fontSize: 18,
    color: '#28a745',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  actionsWrapper: { flex: 1, justifyContent: 'space-between' },
  actionBox: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
  },
  actionText: { fontSize: 12, color: '#fff', fontWeight: '600', marginTop: 4 },
  rechargeSection: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 20,
  },
  rechargeImage: { width: '100%', height: 180, resizeMode: 'cover' },
});

export default HomeScreen;
