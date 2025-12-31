import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "@/utils/colors";

interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const SuccessModal = ({
  isVisible,
  onClose,
  title = "You Joined This Events!",
  message
}: SuccessModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {/* Green Circle with Checkmark */}
              <View style={styles.iconCircle}>
                <Ionicons 
                  name="checkmark" 
                  size={moderateScale(32)} 
                  color={colors.black} 
                />
              </View>

              {/* Text Content */}
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(30),
  },
  modalContainer: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(20),
    alignItems: "center",
    // Subtle shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconCircle: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
    backgroundColor: "#E2F163", // Your primary lime color
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  titleText: {
    fontSize: moderateScale(20),
    fontWeight: "800",
    color: "#0A1629", // Dark Navy/Black
    textAlign: "center",
    marginBottom: verticalScale(10),
  },
  messageText: {
    fontSize: moderateScale(14),
    color: colors.unfocused,
    textAlign: "center",
    lineHeight: moderateScale(20),
  },
});