import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import { colors, colors as importColors } from "@/utils/colors";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function RegisterScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        {/* Brand Area */}
        <View style={styles.brandArea}>
          <Image
            source={require("../../assets/images/logo2.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline} numberOfLines={2}>
            Join the platform Find Your Perfect Exercise Partner
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.heading}>Register</Text>

          {/* Full Name */}
          <CustomInput text="Full Name" placeholder="Enter your full name" />

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <CustomInput
            text="Confirm Password"
            placeholder="Confirm your password"
            icon={
              <FontAwesome
                name="lock"
                size={moderateScale(22)}
                color={colors.subText}
                style={styles.icon}
              />
            }
          />

          {/* Sign Up Button */}
          <CustomButton
            text="Sign Up"
            style={styles.buttonSpacing}
            onPress={() => {}}
          />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already Registered?</Text>
            <Pressable>
              <Text
                style={styles.register}
                onPress={() => {
                  router.replace("/(auth)/login");
                }}
              >
                {" "}
                Log In
              </Text>
            </Pressable>
          </View>
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

  brandArea: {
    alignItems: "center",
    marginTop: verticalScale(24),
  },

  logo: {
    width: scale(180),
    height: verticalScale(80),
    resizeMode: "contain",
  },

  tagline: {
    width: scale(220),
    marginTop: verticalScale(8),
    fontSize: moderateScale(13),
    color: colors.black,
    textAlign: "center",
  },

  form: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(24),
  },

  heading: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    marginBottom: verticalScale(16),
    color: colors.black,
  },

  icon: {
    marginRight: scale(10),
  },

  buttonSpacing: {
    marginTop: verticalScale(8),
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },

  footerText: {
    fontSize: moderateScale(13),
    color: colors.black,
  },

  register: {
    fontSize: moderateScale(13),
    color: colors.main,
    fontWeight: "600",
  },
});
