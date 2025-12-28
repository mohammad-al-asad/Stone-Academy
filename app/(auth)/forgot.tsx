import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import { colors as importColors } from "@/utils/colors";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import {
  Image,
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

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "center" }}
      >

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.heading}>FORGOT PASSWORD</Text>

          <Text style={styles.description}>
            Enter your registered email or phone number and we'll send you a
            link to reset your password.
          </Text>

          <CustomInput
            text="Email Address"
            placeholder="Enter your email"
            icon={
              <Feather
                name="mail"
                size={moderateScale(18)}
                color={colors.subText}
                style={styles.icon}
              />
            }
          />

          <CustomButton
            text="Send"
            style={styles.buttonSpacing}
            onPress={() => {
              router.replace("/(auth)/verify-otp");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  form: {
    paddingHorizontal: scale(20),
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

  icon: {
    marginRight: scale(10),
  },

  buttonSpacing: {
    marginTop: verticalScale(12),
  },

  footer: {
    marginTop: verticalScale(20),
    alignItems: "center",
  },

  back: {
    fontSize: moderateScale(13),
    color: colors.main,
    fontWeight: "500",
  },
});
