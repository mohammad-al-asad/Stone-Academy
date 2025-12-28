import { colors } from "@/utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomButton from "./CustomButton";

const { width } = Dimensions.get("window");

type Slide = {
  key: string;
  title: string;
  description: string;
  buttonText: string;
  image: any;
};

const slides: Slide[] = [
  {
    key: "s1",
    title: "Meet nearby fitness buddies",
    description:
      "Meet nearby fitness buddies and build real connections through shared workouts",
    buttonText: "Next",
    image: require("../assets/images/onboarding/onboarding2.png"),
  },
  {
    key: "s2",
    title: "Join activities & events",
    description:
      "Connect with like-minded people and discover exciting activities in your area",
    buttonText: "Next",
    image: require("../assets/images/onboarding/onboarding3.png"),
  },
  {
    key: "s3",
    title: "Stay safe with verified users",
    description:
      "Connect with confidence knowing every profile is verified and authentic",
    buttonText: "Continue",
    image: require("../assets/images/onboarding/onboarding4.png"),
  },
];

export default function OnboardingScreen({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const [index, setIndex] = useState(0);

  const isLast = index === slides.length - 1;

  function next() {
    if (isLast) {
      onFinish && onFinish();
    } else {
      setIndex((i) => Math.min(i + 1, slides.length - 1));
    }
  }

  function back() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={{
            width: scale(40),
            height: scale(40),
            borderRadius: "100%",
            backgroundColor: "#F9FAFB",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={back}
          disabled={index === 0}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFinish}>
          <Text style={styles.topText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.illustrationArea}>
        <Image
          style={{
            height: verticalScale(311),
            width: scale(311),
            resizeMode: "contain",
          }}
          source={slides[index].image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{slides[index].title}</Text>
        <Text style={styles.description}>{slides[index].description}</Text>

        <View style={styles.progressRow}>
          {slides.map((s, i) => (
            <View
              key={s.key}
              style={[
                styles.dot,
                i === index ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
        <CustomButton
          text={slides[index].buttonText || "Next"}
          onPress={next}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 8,
  },
  topText: {
    color: "#555",
    fontSize: 16,
  },
  disabledTopText: {
    color: "transparent",
  },
  illustrationWrap: {
    flex: 1.1,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationPlaceholder: {
    width: width - 80,
    height: 220,
    borderRadius: 14,
    backgroundColor: "#f6f9ff",
    alignItems: "center",
    justifyContent: "center",
  },
  illusEmoji: {
    fontSize: 48,
  },
  card: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 18,
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: colors.black,
  },
  description: {
    fontSize: moderateScale(16),
    textAlign: "center",
    color: "#666",
    marginBottom: 18,
    lineHeight: 20,
    fontWeight: "regular",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  dot: {
    width: 10,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: "#cfe96d",
    width: 36,
    height: 10,
    borderRadius: 8,
  },
  dotInactive: {
    backgroundColor: "#eee",
  },
  primaryButton: {
    backgroundColor: "#cfe96d",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0b0b0b",
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
});
