import CustomButton from "@/component/CustomButton";
import OnboardingScreen from "@/component/OnboardingScreen";
import { colors } from "@/utils/colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

export default function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const router = useRouter();

  if (showOnboarding) {
    return (
      <OnboardingScreen
        onFinish={() => {
          setShowOnboarding(false);
          router.replace("/(auth)/signup");
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.brandArea}>
        <Image
          source={require("../assets/images/logo1.png")}
          style={{
            width: scale(153),
            height: verticalScale(141),
            resizeMode: "contain",
          }}
        />
        <Text style={styles.tagline}>Find Your Fit Buddy</Text>
      </View>

      <View style={styles.illustrationArea}>
        <Image
          style={{
            height: 256,
            width: 256,
            resizeMode: "contain",
          }}
          source={require("../assets/images/onboarding/onboarding1.png")}
        />
      </View>

      <View style={styles.actions}>
        <CustomButton
          text="Get Started"
          onPress={() => {
            setShowOnboarding(true);
          }}
        />

        <CustomButton
          text="Log in"
          type="outline"
          onPress={() => {
            router.replace("/(auth)/login");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: verticalScale(36),
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  brandArea: {
    alignItems: "center",
  },
  tagline: {
    color: "#4B5563",
    marginTop: 6,
    fontWeight: "medium",
    fontSize: verticalScale(18),
  },
  illustrationArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(100),
  },
  illusPlaceholder: {
    width: scale(260),
    height: verticalScale(180),
    backgroundColor: "#f6f9ff",
    borderRadius: 14,
  },
  actions: {
    gap: 17,
    padding: verticalScale(23),
  },
  homeTitle: {
    fontSize: verticalScale(18),
    fontWeight: "600",
  },
});
