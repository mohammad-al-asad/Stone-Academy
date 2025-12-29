import CustomInput from "@/component/CustomInput";
import { useAppDispatch } from "@/redux/hooks";
import { colors } from "@/utils/colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const Index = () => {
  const dispatch = useAppDispatch();

  const activities = [
    {
      id: 1,
      title: "Morning Run in Central Park",
      host: "Alex Johnson",
      time: "Dec 15 • 7:00 AM",
      joined: "2/5 joined",
      distance: "0.8 miles away",
      image: require("../../../../assets/images/logo1.png"),
    },
    {
      id: 2,
      title: "Sunset Yoga Session",
      host: "Sarah Chen",
      time: "Dec 15 • 7:00 AM",
      joined: "2/5 joined",
      distance: "1.2 miles away",
      image: require("../../../../assets/images/logo1.png"),
    },
    {
      id: 3,
      title: "HIIT Gym Workout",
      host: "Mike Rodriguez",
      time: "Dec 15 • 7:00 AM",
      joined: "1/6 joined",
      distance: "2.1 miles away",
      image: require("../../../../assets/images/logo1.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
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
          <View
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
          </View>
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
          <Pressable>
            <Image
              source={require("../../../../assets/images/icons/filterIcon.png")}
              style={{
                width: moderateScale(40),
                height: moderateScale(40),
              }}
            />
          </Pressable>
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
});
