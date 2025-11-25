import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import api from "../lib/axios"; // ✅ apna axios wrapper use karna

interface WalletHistoryParams {
  page: number;
  limit: number;
  id: string;
  type: string;
  dateRange: {
    from: string;
    to: string;
  };
}

const NotificationScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [selectedTxn, setSelectedTxn] = useState<any>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Dummy dates (later tu date picker add kar sakta hai)
  const [startDate] = useState("2025-09-01");
  const [endDate] = useState("2025-09-30");

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

  useEffect(() => {
    fetchWalletHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet History</Text>

      {loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", color: "#666", marginTop: 20 }}>
              No data available
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedTxn(item);
                setModalVisible(true);
              }}
              style={styles.card}
            >
              {/* Top Row */}
              <View style={styles.row}>
                <Text style={styles.msg}>{item.msg}</Text>
                <Text style={styles.amount}>₹{item.amount}</Text>
              </View>

              {/* Middle Row */}
              <View style={styles.row}>
                <Text style={styles.balance}>
                  Opening: ₹{item.opening_balance}
                </Text>
                <Text style={styles.balance}>
                  Closing: ₹{item.closing_balance}
                </Text>
              </View>

              {/* Bottom Row */}
              <View style={styles.row}>
                <Text style={styles.date}>
                  {new Date(item.createdAt).toLocaleString()}
                </Text>
                <Text
                  style={[
                    styles.status,
                    {
                      color: item.status === "SUCCESS" ? "green" : "red",
                    },
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* 🔹 Modal for details */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ScrollView>
              <Text style={styles.modalTitle}>Transaction Details</Text>

              {selectedTxn && (
                <View>
                  <Text>Msg: {selectedTxn.msg}</Text>
                  <Text>Amount: ₹{selectedTxn.amount}</Text>
                  <Text>Opening Balance: ₹{selectedTxn.opening_balance}</Text>
                  <Text>Closing Balance: ₹{selectedTxn.closing_balance}</Text>
                  <Text>Status: {selectedTxn.status}</Text>
                  <Text>
                    Created At: {new Date(selectedTxn.createdAt).toLocaleString()}
                  </Text>
                  <Text>Order ID: {selectedTxn.remote_order_id}</Text>
                  <Text>Payment ID: {selectedTxn.payment_id || "N/A"}</Text>
                  <Text>User ID: {selectedTxn.user_id}</Text>
                </View>
              )}

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeBtn}
              >
                <Text style={{ color: "white", fontWeight: "600" }}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "white" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  msg: { fontWeight: "600", fontSize: 14, color: "#333" },
  amount: { fontSize: 14, fontWeight: "600", color: "#111" },
  balance: { fontSize: 12, color: "#666" },
  date: { fontSize: 10, color: "#888" },
  status: { fontSize: 12, fontWeight: "700" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    maxHeight: "80%",
  },
  modalTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  closeBtn: {
    marginTop: 16,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
