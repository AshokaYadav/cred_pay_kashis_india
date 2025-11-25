import React, {useState, useCallback, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  Keyboard,
  KeyboardEvent,
  Animated,
} from 'react-native';
import {useResetMpin} from '../../hooks/useResetMpin';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const ResetPinModal: React.FC<Props> = ({visible, onClose, onSuccess}) => {
  const {loading, step, updateMpin, verifyOtp, resetState} = useResetMpin();
  const [mpin, setMpin] = useState('');
  const [otp, setOtp] = useState('');
  const [keyboardHeight] = useState(new Animated.Value(0));

  // Reset modal state and dismiss keyboard
  const handleClose = useCallback(() => {
    Keyboard.dismiss();
    resetState();
    setMpin('');
    setOtp('');
    onClose();
  }, [resetState, onClose]);

  // Fix first render extra bottom space
  useEffect(() => {
    if (visible) {
      keyboardHeight.setValue(0);
    }
  }, [visible]);

  // Keyboard listeners
  useEffect(() => {
    const showSub = Keyboard.addListener(
      'keyboardDidShow',
      (e: KeyboardEvent) => {
        Animated.timing(keyboardHeight, {
          toValue: e.endCoordinates.height,
          duration: 200,
          useNativeDriver: false,
        }).start();
      },
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(keyboardHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [keyboardHeight]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
      statusBarTranslucent
      >
      <View className="flex-1 bg-black/60 justify-end">
        {/* Touch outside to close */}
        <Pressable className="flex-1" onPress={handleClose} />

        {/* Animated Modal */}
        <Animated.View
          style={{marginBottom: keyboardHeight}}
          className="bg-white rounded-t-[32px] p-6 shadow-2xl">
          {/* Header */}
          <View className="items-center mb-6">
            <View className="w-14 h-1 bg-gray-300 rounded-full mb-4" />
            <Text className="text-2xl font-bold text-green-700">
              🔒 Reset MPIN
            </Text>
            <Text className="text-gray-500 text-sm mt-1 text-center">
              {step === 'mpin'
                ? 'Enter new MPIN to receive OTP'
                : 'Enter the OTP sent to your device'}
            </Text>
          </View>

          {/* Inputs */}
          {step === 'mpin' && (
            <TextInput
              placeholder="Enter 4-digit new MPIN"
              value={mpin}
              onChangeText={t => setMpin(t.replace(/[^0-9]/g, ''))}
              maxLength={4}
              keyboardType="number-pad"
              editable={!loading}
              className="rounded-full px-4 py-4 border border-gray-200 bg-gray-50 mb-4 shadow-sm text-center text-lg"
            />
          )}
          {step === 'otp' && (
            <TextInput
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChangeText={t => setOtp(t.replace(/[^0-9]/g, ''))}
              maxLength={4}
              keyboardType="number-pad"
              editable={!loading}
              className="rounded-full px-4 py-4 border border-gray-200 bg-gray-50 mb-4 shadow-sm text-center text-lg"
            />
          )}

          {/* Buttons */}
          <View className="flex-row space-x-3 mt-4">
            <Pressable
              onPress={() =>
                step === 'mpin' ? updateMpin(mpin) : verifyOtp(otp, handleClose)
              }
              disabled={
                loading ||
                (step === 'mpin' ? mpin.length !== 4 : otp.length !== 4)
              }
              className={`flex-1 py-4 rounded-full shadow-lg items-center mb-4 justify-center ${
                loading ? 'bg-green-300' : 'bg-green-600'
              }`}>
              {loading ? (
                <View className="flex-row items-center justify-center">
                  <ActivityIndicator color="white" size="small" />
                  <Text className="text-white font-semibold ml-2">
                    Please wait...
                  </Text>
                </View>
              ) : (
                <Text className="text-white text-center font-semibold text-lg">
                  {step === 'mpin' ? ' Send OTP' : ' Verify OTP'}
                </Text>
              )}
            </Pressable>

            <Pressable
              onPress={handleClose}
              disabled={loading}
              className="flex-1 py-4 ml-2 rounded-full mb-4 bg-gray-100 items-center justify-center shadow-sm">
              <Text className="text-gray-700 font-medium">Cancel</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ResetPinModal;
