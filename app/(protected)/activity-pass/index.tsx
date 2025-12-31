import CustomButton from "@/component/CustomButton";
import { colors } from "@/utils/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function ActivityPassScreen() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Activity Pass</Text>
      <Text style={styles.subtitle}>
        Use this QR code to confirm your reservation
      </Text>

      {/* Avatar */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />

      {/* Name & Activity */}
      <Text style={styles.name}>Alex Martinez</Text>
      <Text style={styles.activity}>Walking</Text>

      {/* Date & Time */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={16} color={"#71ABE0"} />
          <Text style={styles.infoText}>Sun, Nov 15</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={16} color={"#71ABE0"} />
          <Text style={styles.infoText}>8:00 AM</Text>
        </View>
      </View>

      {/* QR Code */}
      <View style={styles.qrContainer}>
        <QRCode
          value="ACTIVITY_PASS_123456"
          size={200}
          backgroundColor="white"
          color="black"
        />
      </View>

      {/* Buttons */}
      <CustomButton style={styles.downloadBtn}>
        <Ionicons
          name="download-outline"
          size={18}
          color={colors.black}
          style={{ marginRight: 6 }}
        />
        <Text style={styles.downloadText}>Download QR</Text>
      </CustomButton>

      <CustomButton style={styles.cancelBtn} text="Cancel Activities" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
    alignItems: "center",
  },

  title: {
    fontSize: moderateScale(32),
    fontWeight: "700",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 6,
    textAlign: "center",
    marginBottom: 20,
  },

  avatar: {
    width: scale(48),
    height: scale(48),
    borderRadius: 40,
    marginBottom: 10,
  },

  name: {
    fontSize: verticalScale(16),
    fontWeight: "700",
  },

  activity: {
    fontSize: moderateScale(20),
    marginVertical: moderateScale(16),
  },

  infoRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  infoText: {
    fontSize: 13,
    color: "#555",
  },

  qrContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 24,
  },

  downloadBtn: {
    width: "100%",
    backgroundColor: colors.main,
    marginBottom: 12,
        borderRadius:verticalScale(999),
    height: moderateScale(56),
  },

  downloadText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },
  
  cancelBtn: {
    borderRadius:verticalScale(999),
    height: moderateScale(56),
    color: colors.white,
    width: "100%",
    backgroundColor: "#E24A4A",
    borderColor: "#E24A4A",
  },
});
