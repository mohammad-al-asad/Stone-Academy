import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";

// Mock data based on the designs
const NOTIFICATIONS = [
  {
    id: "1",
    title: "Alex joined your Yoga session",
    subtitle: "Tomorrow at 6:00 AM • Central Park",
    time: "2 minutes ago",
    type: "user_joined",
  },
  {
    id: "2",
    title: "Sarah rated your workout",
    subtitle: '5 stars • "Amazing energy and great form!"',
    time: "15 minutes ago",
    type: "rating",
  },
  {
    id: "3",
    title: "Workout reminder",
    subtitle: "Your HIIT session starts in 30 minutes",
    time: "1 hour ago",
    type: "reminder",
  },
];

const NotificationsScreen = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "user_joined":
        return (
          <View style={[styles.iconCircle, { backgroundColor: "#E2F163" }]}>
            <FontAwesome5 name="users" size={moderateScale(16)} color={colors.black} />
          </View>
        );
      case "rating":
        return (
          <View style={[styles.iconCircle, { backgroundColor: "#E2F163" }]}>
            <Ionicons name="star" size={moderateScale(18)} color={colors.black} />
          </View>
        );
      case "reminder":
        return (
          <View style={[styles.iconCircle, { backgroundColor: "#F1F4F8" }]}>
            <MaterialCommunityIcons name="calendar-month" size={moderateScale(18)} color="#4B5563" />
          </View>
        );
      default:
        return null;
    }
  };

  const renderItem = ({ item }: { item: typeof NOTIFICATIONS[0] }) => (
    <TouchableOpacity style={styles.notificationCard}>
      <View style={styles.contentRow}>
        {renderIcon(item.type)}
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subtitleText}>{item.subtitle}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader title="Notifications" />

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    padding: scale(20),
  },
  notificationCard: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
    padding: scale(16),
    marginBottom: verticalScale(12),
    // Subtle border as seen in designs
    borderWidth: 1,
    borderColor: "#F3F4F6",
    // Shadow for elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconCircle: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(12),
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: verticalScale(2),
  },
  subtitleText: {
    fontSize: moderateScale(13),
    color: "#6B7280",
    lineHeight: moderateScale(18),
    marginBottom: verticalScale(4),
  },
  timeText: {
    fontSize: moderateScale(12),
    color: "#9CA3AF",
  },
});