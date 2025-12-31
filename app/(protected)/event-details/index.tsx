import CustomButton from "@/component/CustomButton";
import SuccessModal from "@/component/SuccessModal";
import { colors } from "@/utils/colors";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const EventDetailScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar hidden />
      <SuccessModal
        message="Get ready to meet your fitness instructor."
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Main Event Image */}
        <Image
          source={require("@/assets/images/community1.png")}
          style={styles.mainImage}
        />
        {/* Circular Back Button Overlapping Image */}
        <TouchableOpacity
          style={styles.backButtonCircle}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.eventTitle}>Morning Yoga Flow</Text>

          {/* Host Section */}
          <View style={styles.hostCard}>
            <Image
              source={require("@/assets/images/community1.png")}
              style={styles.hostAvatar}
            />
            <View style={styles.hostInfo}>
              <Text style={styles.hostName}>Alex Martinez</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#FFD60A" />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.messageIcon}>
              <Feather name="message-square" size={20} color={colors.black} />
            </TouchableOpacity>
          </View>

          {/* Description */}
          <Text style={styles.descriptionText}>
            Join us for a rejuvenating morning yoga session designed to awaken
            your body and mind. Suitable for all skill levels.
          </Text>

          {/* Date & Time */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: verticalScale(15),
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="calendar-month"
                size={22}
                color={colors.main}
              />
              <Text style={styles.infoText}>25 November 2024</Text>
            </View>
            <Text style={[styles.infoText, { marginLeft: scale(30) }]}>
              6:00 AM - 7:30 AM
            </Text>
          </View>

          {/* Location */}
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={22} color={colors.main} />
            <Text style={styles.infoText}>Riverside Trail, Central Park</Text>
          </View>

          {/* View Map */}
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/viewMap.png")}
              style={styles.mapImage}
            />
          </TouchableOpacity>

          {/* Price Card */}
          <View style={styles.priceCard}>
            <View>
              <Text style={styles.priceLabel}>Event Price</Text>
              <Text style={styles.priceValue}>$15</Text>
            </View>
            <Image
              source={require("@/assets/images/icons/event.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                tintColor: colors.black,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: scale(10),
              paddingTop: scale(10),
            }}
          >
            <Ionicons name="people-outline" size={22} color={colors.main} />
            <Text style={styles.infoText}>2/5 Participants Joined</Text>
          </View>
          {/* Action Buttons */}
          <View style={styles.buttonGroup}>
            <CustomButton
              text="Join Event"
              onPress={() => {
                setModalVisible(true);
              }}
              style={styles.mainButton}
            />
            <CustomButton
              text="Message Host"
              type="outline"
              onPress={() => {}}
              style={styles.outlineButton}
            >
              <Ionicons
                name="chatbubble-outline"
                size={18}
                color={colors.black}
                style={{ marginRight: 8 }}
              />
            </CustomButton>
          </View>

          {/* Footer Actions */}
          <View style={styles.footerActions}>
            <TouchableOpacity style={styles.footerBtn}>
              <Feather name="flag" size={18} color="#FF3D00" />
              <Text style={[styles.footerBtnText, { color: "#FF3D00" }]}>
                Report
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerBtn}>
              <Feather name="log-out" size={18} color="#FF3D00" />
              <Text style={[styles.footerBtnText, { color: "#FF3D00" }]}>
                Leave
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingBottom: verticalScale(30),
  },
  backButtonCircle: {
    position: "absolute",
    top: moderateScale(20),
    left: scale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  mainImage: {
    width: "100%",
    height: verticalScale(200),
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
  },
  content: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: moderateScale(20),
    margin: scale(15),
    padding: scale(15),
  },
  eventTitle: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: colors.black,
    marginBottom: verticalScale(20),
  },

  hostCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(20),
  },
  hostAvatar: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(23),
  },
  hostInfo: {
    flex: 1,
    marginLeft: scale(12),
  },
  hostName: {
    fontSize: moderateScale(15),
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  ratingText: {
    fontSize: moderateScale(12),
    color: colors.unfocused,
    marginLeft: 4,
  },
  messageIcon: {
    padding: scale(8),
  },
  descriptionText: {
    fontSize: moderateScale(14),
    color: colors.unfocused,
    lineHeight: moderateScale(20),
    marginBottom: verticalScale(20),
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
  },
  infoText: {
    fontWeight: "medium",
    fontSize: moderateScale(14),
    color: colors.black,
    marginLeft: scale(10),
  },
  priceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F4F9C5", // Light version of your main theme color
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    marginVertical: verticalScale(10),
  },
  priceLabel: {
    fontSize: moderateScale(16),
    color: colors.black,
  },
  priceValue: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: colors.black,
  },
  buttonGroup: {
    marginTop: verticalScale(20),
    gap: verticalScale(12),
  },
  mainButton: {
    justifyContent: "center",
  },
  outlineButton: {
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.main,
  },
  footerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: verticalScale(30),
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: verticalScale(20),
  },
  footerBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },
  footerBtnText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
  },
  mapImage: {
    height: verticalScale(128),
    borderRadius: moderateScale(16),
    width: "100%",
  },
});
