import { colors } from "@/utils/colors";
import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface ConfirmationAlertProps {
  visible: boolean;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
const ConfirmationAlert = ({
  visible,
  message = "Confirm deleting your account?",
  onConfirm,
  onCancel,
}: ConfirmationAlertProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
              activeOpacity={0.7}
            >
              <Text style={styles.confirmButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const { width } = Dimensions.get("window");
const alertWidth = Math.min(width * 0.85, 320);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertContainer: {
    width: alertWidth,
    backgroundColor: "white",
    borderRadius: 14,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 6,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: colors.main,
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: "red",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "red",
  },
});

export default ConfirmationAlert;
