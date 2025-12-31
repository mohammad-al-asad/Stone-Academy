import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import Dropdown from "@/component/Dropdown";
import ProfileHeader from "@/component/ProfileHeader";
import SuccessModal from "@/component/SuccessModal";
import { colors } from "@/utils/colors";
import { useLocalSearchParams } from "expo-router";

const CreateEventScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [eventType, setEventType] = useState<string | null>(null);
  const { type } = useLocalSearchParams(); // "event" or "activity"
  const [isPaid, setisPaid] = useState(false);

  const isEventType = type === "event";

  const handleCreateEvent = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader
        style={{
          borderBottomWidth: 1,
          borderBottomCollor: colors.black,
        }}
        title={isEventType ? "Create Event" : "Create Activity"}
      />

      <SuccessModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title={
          isEventType
            ? "You created This Events!"
            : "You created This Activity!"
        }
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <CustomInput
          text="Title"
          placeholder={
            isEventType ? "Enter event name" : "Morning Run at the Park"
          }
        />

        <Dropdown
          value={eventType}
          name="type"
          onSelect={(val) => setEventType(val)}
          placeholder={
            isEventType ? "Select event type" : "Select Activity type"
          }
          options={
            isEventType
              ? ["Yoga Session", "Charity Walk"]
              : ["Running", "Cycling"]
          }
          style={{ zIndex: 2000 }}
        />

        <CustomInput
          text="Description"
          placeholder={
            isEventType ? "Describe your event" : "Describe your activity..."
          }
          multiline
          style={styles.textArea}
        />

        <Text style={styles.label}>Date & Time</Text>
        <View style={styles.dateTimeContainer}>
          <TouchableOpacity style={styles.selectorButton}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="calendar-month"
                size={18}
                color={colors.black}
              />
            </View>
            <Text style={styles.selectorText}>Select Date</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.selectorButton}>
            <View style={styles.iconCircle}>
              <Ionicons name="time-outline" size={18} color={colors.black} />
            </View>
            <Text style={styles.selectorText}>Select Time</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Location</Text>
        <View style={styles.locationCard}>
          <View style={styles.miniMap}>
            {/* Center Map Icon */}
            <View style={styles.mapMarkerContainer}>
              <Ionicons
                name="location"
                size={30}
                color={isEventType ? colors.black : colors.white}
              />
            </View>
          </View>
          <Pressable style={styles.setLocationBtn}>
            <Text style={styles.setLocationText}>Set Location</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.main} />
          </Pressable>
        </View>

        {/* PRICE SECTION: Only for Events */}
        {isEventType && (
          <>
            <Text style={styles.label}>Price</Text>
            <View style={styles.priceToggleContainer}>
              <TouchableOpacity
                onPress={() => setisPaid(false)}
                style={[styles.toggleBtn, !isPaid && styles.activeToggle]}
              >
                <Text
                  style={
                    !isPaid
                      ? styles.activeToggleText
                      : styles.inactiveToggleText
                  }
                >
                  Free
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setisPaid(true)}
                style={[styles.toggleBtn, isPaid && styles.activeToggle]}
              >
                <Text
                  style={
                    isPaid ? styles.activeToggleText : styles.inactiveToggleText
                  }
                >
                  Paid
                </Text>
              </TouchableOpacity>
            </View>

            {/* Conditional Ticket Price Div */}
            {isPaid && (
              <View style={styles.paidFieldsContainer}>
                <CustomInput
                  text="Ticket Price"
                  placeholder="৳ Enter ticket price"
                  keyboardType="numeric"
                />
                <CustomInput
                  text="Discount %"
                  placeholder="0"
                  keyboardType="numeric"
                />
                <CustomInput
                  text="Discount %"
                  placeholder="0"
                  keyboardType="numeric"
                />
              </View>
            )}
          </>
        )}

        <View style={styles.limitRow}>
          <View style={styles.limitInputWrapper}>
            <CustomInput
              text="Participant Limit"
              placeholder="Max Participants: 25"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.counterGroup}>
            <TouchableOpacity
              style={[
                styles.counterBtn,
                { borderColor: colors.border, borderWidth: 1 },
              ]}
            >
              <Ionicons name="remove" size={20} color={colors.subText} />
            </TouchableOpacity>
            <Text style={styles.counterValue}>25</Text>
            <TouchableOpacity
              style={[styles.counterBtn, { backgroundColor: colors.main }]}
            >
              <Ionicons name="add" size={20} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Activity Specific Field */}
        {!isEventType && (
          <CustomInput
            text="Mile"
            placeholder="How many miles do you want to walk?"
            keyboardType="numeric"
          />
        )}

        {/* Event Specific Duration */}
        {isEventType && (
          <CustomInput
            text="Event Duration"
            placeholder="Share your event time duration."
          />
        )}

        <Text style={styles.label}>Event Image (Optional)</Text>
        <TouchableOpacity style={styles.uploadBox}>
          <View style={styles.uploadIconCircle}>
            <Ionicons name="image" size={24} color={colors.black} />
          </View>
          <Text style={styles.uploadText}>Upload activity image or Video</Text>
        </TouchableOpacity>

        <CustomButton
          text={isEventType ? "Create Event" : "Create Activity"}
          onPress={handleCreateEvent}
          style={styles.submitBtn}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... existing styles ...
  container: { flex: 1, backgroundColor: colors.white },
  scrollContent: { padding: scale(20), paddingBottom: verticalScale(40) },
  textArea: {
    height: verticalScale(100),
    alignItems: "flex-start",
    paddingTop: verticalScale(10),
  },
  label: {
    fontSize: moderateScale(13),
    marginBottom: verticalScale(6),
    color: colors.black,
    fontWeight: "500",
  },
  dateTimeContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(16),
  },
  selectorButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: scale(12),
  },
  iconCircle: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(8),
    backgroundColor: "#E2F163",
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(10),
  },
  selectorText: { fontSize: moderateScale(14), color: colors.subText },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: scale(12),
  },
  locationCard: {
    backgroundColor: "#F4F9C5",
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(16),
    overflow: "hidden",
  },
  miniMap: {
    width: "100%",
    height: verticalScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  mapMarkerContainer: {
    backgroundColor: colors.main,
    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    padding: 8,
    borderRadius: 50,
  },
  setLocationBtn: {
    backgroundColor: "#f7f7f7ff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: scale(12),
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  setLocationText: { color: colors.main, fontWeight: "600" },
  priceToggleContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    padding: 4,
    marginBottom: verticalScale(16),
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: verticalScale(10),
    alignItems: "center",
    borderRadius: moderateScale(8),
  },
  activeToggle: { backgroundColor: "#E2F163" },
  activeToggleText: { fontWeight: "bold", color: colors.black },
  inactiveToggleText: { color: colors.subText },
  paidFieldsContainer: {
    padding: scale(15),
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(16),
  },
  limitRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: scale(10),
    marginBottom: verticalScale(16),
  },
  limitInputWrapper: { flex: 1 },
  counterGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    height: moderateScale(50),
    paddingHorizontal: scale(5),
    marginBottom: verticalScale(12),
  },
  counterBtn: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  counterValue: {
    color: colors.black,
    paddingHorizontal: scale(15),
    fontWeight: "600",
  },
  uploadBox: {
    height: verticalScale(120),
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: "dashed",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(30),
  },
  uploadIconCircle: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(22.5),
    backgroundColor: "#E2F163",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  uploadText: { fontSize: moderateScale(12), color: colors.subText },
  submitBtn: { marginTop: verticalScale(10) },
});

export default CreateEventScreen;
