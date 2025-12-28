import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import { colors as importColors } from "@/utils/colors";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
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

const colors = {
  main: importColors.main,
  text: importColors.black,
  subText: "#ADAEBC",
  border: "#D1D5DB",
  background: "#FFFFFF",
};

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Brand Area */}
        <View style={styles.brandArea}>
          <Image
            source={require("../../assets/images/logo2.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Find Your Perfect Exercise Partner</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.heading}>Login</Text>

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

          <Pressable
            style={styles.forgotWrapper}
            onPress={() => {
              router.push("/(auth)/forgot");
            }}
          >
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>

          {/* Login Button */}
          <CustomButton
            text="Login"
            style={styles.buttonSpacing}
            onPress={() => {
              AsyncStorage.setItem("user", "dummyUser");
              AsyncStorage.setItem("token", "dummyToken");
              AsyncStorage.setItem("isFirstTime", "true");
              router.replace("/(protected)");
            }}
          />

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Google Button */}
          <CustomButton type="outline" style={styles.buttonSpacing}>
            <Image
              source={require("../../assets/images/google.png")}
              style={{
                width: scale(20),
                height: verticalScale(20),
                marginRight: scale(8),
              }}
            />
          </CustomButton>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <Pressable
              onPress={() => {
                router.replace("/(auth)/signup");
              }}
            >
              <Text style={styles.register}> Register</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: scale(10),
  },

  heading: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    marginBottom: verticalScale(16),
    color: colors.text, // black
  },

  forgot: {
    fontSize: moderateScale(12),
    color: colors.main, // green link stays green
    fontWeight: "500",
  },

  footerText: {
    fontSize: moderateScale(13),
    color: colors.text, // black
  },
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
    marginTop: verticalScale(8),
    fontSize: moderateScale(13),
    color: colors.text,
  },

  form: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(24),
  },

  forgotWrapper: {
    alignItems: "flex-end",
    marginBottom: verticalScale(16),
  },

  buttonSpacing: {
    marginBottom: verticalScale(12),
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(20),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },

  or: {
    marginHorizontal: scale(10),
    fontSize: moderateScale(12),
    color: colors.text,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },

  register: {
    fontSize: moderateScale(13),
    color: colors.main,
    fontWeight: "600",
  },
});
