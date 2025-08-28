import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator ';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentReceiptFail'>;

export default function PaymentReceiptFail({route, navigation}: Props) {
  const {
    transactionId = 'N/A',
    amount = '0.00',
    timestamp = 'N/A',
    mobile = 'Unknown',
  } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Receipt</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.failIcon}>
          <Icon name="x" size={32} color="#fff" />
        </View>
        <Text style={styles.failText}>Mobile Recharge Failed</Text>
        <Text style={styles.subText}>{mobile}</Text>
        <Text style={styles.totalLabel}>Total Payment</Text>
        <Text style={styles.amount}>{amount}</Text>

        {/* Transaction details */}
        <View style={styles.details}>
          <DetailRow label="Transaction ID" value={transactionId} />
          <DetailRow label="Amount" value={amount} />
          <DetailRow label="Timestamp" value={timestamp} />
        </View>

        {/* Share button */}
        <TouchableOpacity style={styles.shareBtn}>
          <Icon name="share" size={18} color="#d9534f" />
          <Text style={styles.failShareText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Footer buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.payAgainBtn}
          onPress={() => navigation.navigate('Recharge')}>
          <Text style={styles.payAgainText}>Pay again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DetailRow = ({label, value}: {label: string; value: string}) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingTop: 50},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerTitle: {fontSize: 18, fontWeight: '600'},

  card: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
  },
  failIcon: {
    backgroundColor: '#d9534f', // 🔴 red
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  failText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#d9534f', // 🔴 red text
  },
  subText: {color: '#888', marginBottom: 5},
  totalLabel: {color: '#888', marginTop: 10},
  amount: {fontSize: 28, fontWeight: '700', marginBottom: 20},

  details: {
    borderTopWidth: 1,
    borderColor: '#eee',
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  rowLabel: {color: '#888'},
  rowValue: {fontWeight: '500'},

  shareBtn: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  failShareText: {color: '#d9534f', marginLeft: 5},

  footer: {marginTop: 20, paddingHorizontal: 20},
  doneBtn: {
    backgroundColor: '#05a84a',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  doneText: {color: '#fff', fontWeight: '600', fontSize: 16},
  payAgainBtn: {
    borderWidth: 1,
    borderColor: '#05a84a',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  payAgainText: {color: '#05a84a', fontWeight: '600', fontSize: 16},
});
