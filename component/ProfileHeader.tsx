import { colors } from "@/utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleProp, StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ProfileHeader = ({
  title,
  style,
  type = "left",
}: {
  title: string;
  style?: StyleProp<any>;
  type?: string;
}) => {
  return (
    <Pressable
      onPress={() => router.back()}
      style={[
        styles.container,
        style,
        { justifyContent: type == "center" ? "space-between" : "flex-start" },
      ]}
    >
      <Ionicons name="arrow-back" size={30} color={colors.black} />
      <Text style={styles.title}>{title}</Text>
      {type === "center" && <Text></Text>}
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
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
});
