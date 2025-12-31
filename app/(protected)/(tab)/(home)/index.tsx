import ActivityCard from "@/component/ActivityCard";
import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import ShopModal from "@/component/ShopPopup";
import { colors } from "@/utils/colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const activities = [
  {
    id: "1",
    title: "Morning Run in Central Park",
    host: "Alex Johnson",
    hostAvatar: "https://i.pravatar.cc/150?img=12",
    date: "Dec 15 • 7:00 AM",
    distance: "0.8 miles away",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    joinedMembers: [
      "https://i.pravatar.cc/150?img=21",
      "https://i.pravatar.cc/150?img=22",
      "https://i.pravatar.cc/150?img=23",
      "https://i.pravatar.cc/150?img=24",
    ],
    joinedCount: "2/5",
  },
  {
    id: "2",
    title: "Evening Yoga Session",
    host: "Sarah Miller",
    hostAvatar: "https://i.pravatar.cc/150?img=32",
    date: "Dec 16 • 6:30 PM",
    distance: "1.2 miles away",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
    joinedMembers: [
      "https://i.pravatar.cc/150?img=31",
      "https://i.pravatar.cc/150?img=33",
      "https://i.pravatar.cc/150?img=34",
    ],
    joinedCount: "1/4",
  },
];
const Index = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <SafeAreaView style={styles.safe}>
      <ShopModal visible={open} onClose={() => setOpen(false)} />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Welcome Row */}
        <View style={styles.welcomeRow}>
          <Image
            source={require("../../../../assets/images/profile.png")}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.welcomeTitle}>Welcome! Sarah</Text>
            <Text style={styles.subText}>@ 38 Chestnut StreetStaunton</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/(protected)/notiflication")}
            style={{
              position: "relative",
              borderWidth: 1,
              borderColor: colors.black,
              borderRadius: 100,
              padding: 6,
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 100,
                backgroundColor: "red",
                position: "absolute",
                top: moderateScale(8),
                right: moderateScale(9),
                zIndex: 1,
              }}
            ></View>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Search Row */}
        <View style={styles.searchRow}>
          <View style={{ flex: 1, marginVertical: "auto" }}>
            <CustomInput
              style={{
                borderColor: colors.black,
                height: moderateScale(48),
                marginVertical: 20,
              }}
              placeholder="Search activities or users"
              icon={
                <Feather name="search" size={24} color={colors.unfocused} />
              }
            />
          </View>
          <Pressable onPress={() => router.push("/activity-pass")}>
            <Image
              source={require("../../../../assets/images/icons/filterIcon.png")}
              style={{
                width: moderateScale(40),
                height: moderateScale(40),
              }}
            />
          </Pressable>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <CustomButton
            text="Create Actiivity"
            onPress={() => {
              router.push({
                pathname: "/(protected)/create",
                params: { type: "activity" },
              });
            }}
          />
          <CustomButton
            text="Create Event"
            type="outline"
            onPress={() => {
              router.push({
                pathname: "/(protected)/create",
                params: { type: "event" },
              });
            }}
          />
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          {activities.map((activity) => (
            <ActivityCard key={activity.id} item={activity} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
  container: { paddingHorizontal: 16, paddingBottom: 48 },
  welcomeRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    objectFit: "cover",
  },
  welcomeTitle: { fontWeight: "bold", fontSize: moderateScale(16) },
  subText: { color: colors.unfocused },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  buttonGroup: {
    marginTop: verticalScale(20),
    gap: verticalScale(12),
  },
  mainButton: {
    justifyContent: "center",
  },
});
