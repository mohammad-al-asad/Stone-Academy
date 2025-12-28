import { colors as importColors } from "@/utils/colors";
import { Image } from "expo-image";
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

export default function ResetSuccess() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={styles.form}>
          <Image
            source={require("../../assets/images/done.png")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.heading}>Your Account is Ready!</Text>

            <Text style={styles.description}>
              Welcome to our community! Everything is set up and ready for you
              to explore.
            </Text>
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
  form: {
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(14),
  },
  heading: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
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
  logo: {
    width: scale(180),
    height: verticalScale(80),
    resizeMode: "contain",
  },
});
