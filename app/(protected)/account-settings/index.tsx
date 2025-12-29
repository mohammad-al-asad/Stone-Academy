import ConfirmationAlert from "@/component/ConfirmationAlert"; // Imported your component
import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const AccountSettingsScreen = () => {
  // 1. State to control the Delete Modal visibility
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const performDeleteAccount = () => {
    console.log("Deleting Account...");
    setIsDeleteModalVisible(false);
  };

  // Reusable Row Component
  const SettingItem = ({
    label,
    onPress,
    isDestructive = false,
  }: {
    label: string;
    onPress: () => void;
    isDestructive?: boolean;
  }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.itemText, isDestructive && styles.destructiveText]}>
        {label}
      </Text>
      <Feather
        name="chevron-right"
        size={moderateScale(20)}
        color={colors.black}
        style={{ opacity: isDestructive ? 1 : 0.5 }}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader title="Account Settings" />

      {/* 4. The Confirmation Modal */}
      <ConfirmationAlert
        visible={isDeleteModalVisible}
        onConfirm={performDeleteAccount}
        onCancel={() => setIsDeleteModalVisible(false)}
        // If your component supports title/message props, add them here:
        // title="Delete Account"
        // message="Are you sure you want to delete your account? This cannot be undone."
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <SettingItem
            label="Change Password"
            onPress={() => router.push("/(protected)/account-settings/change-password")}
          />

          <SettingItem
            label="Terms of services"
            onPress={() => router.push("/(protected)/account-settings/terms")}
          />

          <SettingItem
            label="Privacy Policy"
            onPress={() => router.push("/(protected)/account-settings/privacy")}
          />

          <SettingItem
            label="About us"
            onPress={() => router.push("/(protected)/account-settings/about")}
          />

          <View style={{ height: verticalScale(10) }} />

          <SettingItem
            label="Delete Account"
            onPress={() => {
              setIsDeleteModalVisible(true);
            }}
            isDestructive
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountSettingsScreen;

/* ======================= STYLES ======================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingHorizontal: moderateScale(20),
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(24),
  },
  itemText: {
    fontSize: moderateScale(15),
    color: colors.black,
    fontWeight: "400",
  },
  destructiveText: {
    color: "#FF3B30",
    fontWeight: "500",
  },
});
