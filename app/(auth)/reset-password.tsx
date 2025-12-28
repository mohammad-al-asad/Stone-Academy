import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import { colors as importColors } from "@/utils/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const colors = {
  main: importColors.main,
  text: importColors.black,
  subText: "#ADAEBC",
  border: "#D1D5DB",
  background: "#FFFFFF",
};

export default function ResetPassword() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center" }}
      >
        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.heading}>SET A NEW PASSWORD</Text>

          <Text style={styles.description}>
            Enter your registered email or phone number and we'll send you a
            link to reset your password.
          </Text>
          <CustomInput
            text="Password"
            placeholder="Enter your password"
            icon={
              <FontAwesome
                name="lock"
                size={moderateScale(22)}
                color={colors.subText}
                style={styles.icon}
              />
            }
          />
          <CustomInput
            text="Password"
            placeholder="Enter your password"
            icon={
              <FontAwesome
                name="lock"
                size={moderateScale(22)}
                color={colors.subText}
                style={styles.icon}
              />
            }
          />

          {/* Submit Button */}
          <CustomButton
            text="Update Password"
            style={styles.buttonSpacing}
            onPress={() => {
              router.replace("/(auth)/reset-success");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: scale(10),
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  form: {
    paddingHorizontal: scale(20),
  },

  buttonSpacing: {
    marginBottom: verticalScale(12),
  },
  heading: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    marginBottom: verticalScale(12),
    color: colors.text,
    textAlign: "center",
  },

  description: {
    width: scale(250),
    fontSize: moderateScale(13),
    color: colors.subText,
    textAlign: "center",
    marginBottom: verticalScale(20),
    marginHorizontal: "auto",
    lineHeight: moderateScale(18),
  },
});
