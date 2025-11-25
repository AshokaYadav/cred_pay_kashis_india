import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import api from "../../lib/axios";

type Props = {
  visible: boolean;
  onClose: () => void;
  dthNumber: string;
};

const DthInfoModal = ({ visible, onClose, dthNumber }: Props) => {
  const [loading, setLoading] = useState(false);
  const [dthInfo, setDthInfo] = useState<any>(null);

  const fetchDthInfo = async () => {
    setLoading(true);
    try {
      const res = await api.put("/op-circle-link/fetch-op-circle-dth", {
        dth_number: dthNumber,
      });
      console.log("✅ API Response:", res.data);
      setDthInfo(res.data?.data?.dthInfo);
    } catch (err) {
      console.error("❌ API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (visible) fetchDthInfo();
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-4">
        <View className="w-full bg-white rounded-2xl p-6 shadow-xl max-h-[75%]">
          {/* Title */}
          <Text className="text-2xl font-bold text-center text-blue-600 mb-4">
            📡 DTH Information
          </Text>

          {/* Loader / Data */}
          {loading ? (
            <ActivityIndicator size="large" color="#2563EB" />
          ) : dthInfo ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              className="space-y-3"
            >
              <InfoRow label="VC" value={dthInfo.VC} />
              <InfoRow label="Name" value={dthInfo.Name} />
              <InfoRow label="RMN" value={dthInfo.Rmn} />
              <InfoRow label="Balance" value={dthInfo.Balance || "N/A"} />
              <InfoRow
                label="Next Recharge"
                value={dthInfo["Next Recharge Date"] || "N/A"}
              />
              <InfoRow label="Plan" value={dthInfo.Plan || "N/A"} />
              <InfoRow label="Address" value={dthInfo.Address} />
              <InfoRow label="District" value={dthInfo.District} />
              <InfoRow label="State" value={dthInfo.State} />
              <InfoRow label="PIN" value={dthInfo["PIN Code"]} />
            </ScrollView>
          ) : (
            <Text className="text-center text-gray-500">
              No data available
            </Text>
          )}

          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            className="bg-red-500 mt-6 py-3 rounded-xl"
          >
            <Text className="text-white font-semibold text-center text-base">
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// ✅ Reusable Row Component
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between items-center bg-gray-100 px-3 py-2 rounded-lg">
    <Text className="font-medium text-gray-700">{label}</Text>
    <Text className="text-gray-900">{value}</Text>
  </View>
);

export default DthInfoModal;
