import CustomButton from "@/component/CustomButton";
import { colors as importColors } from "@/utils/colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const colors = {
  main: importColors.main,
  text: importColors.black,
  subText: "#ADAEBC",
  border: "#D1D5DB",
  background: "#FFFFFF",
};
const VerifyOtpScreen: React.FC = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const verify = () => {
    console.log("Verifying OTP:", otp);
    // Integrate verification logic (API call / redux) here
    router.replace("/(auth)/reset-password");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inner}>
        <Text style={styles.heading}>VERIFY OTP</Text>
        <Text style={styles.description}>
          Enter the 4-digit code sent to your email
        </Text>

        <OtpInput
          numberOfDigits={4}
          autoFocus={true}
          onFilled={(code) => setOtp(code)}
          focusColor={importColors.primary2}
          theme={{
            pinCodeContainerStyle: styles.otpBox,
            containerStyle: { marginBottom: scale(12) },
          }}
        />
      </View>
      <CustomButton text="Verify" onPress={verify} />
    </KeyboardAvoidingView>
  );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  inner: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  heading: {
    fontSize: moderateScale(16),
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
  otpBox: {
    width: scale(63),
    height: verticalScale(56),
    borderWidth: 1,
    borderColor: importColors.black,
    borderRadius: 10,
  },
});
