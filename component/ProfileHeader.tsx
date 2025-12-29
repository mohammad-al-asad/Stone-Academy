import { colors } from "@/utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ProfileHeader = ({ title, style }: { title: string; style?: any }) => {
  return (
    <Pressable onPress={() => router.back()} style={[styles.container, style]}>
      <Ionicons name="arrow-back" size={30} color={colors.black} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(16),
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
});
