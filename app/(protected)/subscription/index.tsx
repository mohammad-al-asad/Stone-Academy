import CustomButton from "@/component/CustomButton";
import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Subscription = () => {
  const features = [
    {
      id: 1,
      title: "Unlimited Activity Posts",
      description:
        "Share as many workouts and achievements as you want without limits",
      icon: <Ionicons name="add" size={24} color={colors.black} />,
    },
    {
      id: 2,
      title: "Access to Premium Events",
      description:
        "Join exclusive fitness challenges and events available only to premium members",
      icon: (
        <MaterialCommunityIcons
          name="calendar-check"
          size={24}
          color={colors.black}
        />
      ),
    },
    {
      id: 3,
      title: "Profile Highlight",
      description:
        "Stand out with a premium glow effect around your profile picture",
      isImage: true, // For the profile highlight preview
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        title="Go Premium"
        style={{
          borderBottomWidth: 1,
          borderBottomCollor: colors.black,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Section */}
        <View style={styles.headerSection}>
          <View style={styles.crownCircle}>
            <MaterialCommunityIcons
              name="crown"
              size={40}
              color={colors.black}
            />
          </View>
          <Text style={styles.mainTitle}>Unlock Premium</Text>
          <Text style={styles.subTitle}>
            Get access to exclusive features and enhance your fitness journey
          </Text>
        </View>

        {/* Features List */}
        <View style={styles.featuresContainer}>
          {features.map((item) => (
            <View key={item.id} style={styles.featureCard}>
              <View style={styles.iconContainer}>
                {item.isImage ? (
                  <Image
                    source={require("../../../assets/images/profile.png")}
                    style={styles.featureImage}
                  />
                ) : (
                  item.icon
                )}
              </View>
              <View style={styles.featureTextContent}>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Pricing Card */}
        <View style={styles.pricingCard}>
          <Text style={styles.priceText}>
            $9.99<Text style={styles.perMonth}>/month</Text>
          </Text>
          <Text style={styles.cancelText}>Cancel anytime</Text>
        </View>

        {/* Action Button */}
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Upgrade Now"
            onPress={() => console.log("Upgrade Pressed")}
          />
          <Text style={styles.footerNote}>
            Enjoy all premium features immediately
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
  },
  headerSection: {
    alignItems: "center",
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
  },
  crownCircle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: "#E2F163", // Your primary yellow/green color
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(15),
  },
  mainTitle: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: colors.black,
    marginBottom: verticalScale(8),
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: colors.subText,
    textAlign: "center",
    lineHeight: moderateScale(20),
    paddingHorizontal: scale(10),
  },
  featuresContainer: {
    gap: verticalScale(15),
    marginBottom: verticalScale(30),
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(15),
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: moderateScale(16),
  },
  iconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    backgroundColor: "#E2F163",
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(15),
    alignSelf: "flex-start",
  },
  featureImage: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(20),
    borderWidth: 2,
    borderColor: "#E2F163",
    opacity: 0.5,
  },
  featureTextContent: {
    flex: 1,
    gap: verticalScale(4),
  },
  featureTitle: {
    fontSize: moderateScale(16),
    fontWeight: "semibold",
    color: colors.black,
    marginBottom: verticalScale(2),
  },
  featureDescription: {
    fontSize: moderateScale(14),
    color: colors.subText,
    lineHeight: moderateScale(16),
  },
  pricingCard: {
    backgroundColor: "#F9FBE7", // Light tint of your main color
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(20),
    alignItems: "center",
    marginBottom: verticalScale(30),
  },
  priceText: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
    color: colors.black,
  },
  perMonth: {
    fontSize: moderateScale(16),
    fontWeight: "400",
    color: colors.subText,
  },
  cancelText: {
    fontSize: moderateScale(14),
    color: colors.subText,
    marginTop: verticalScale(4),
  },
  buttonContainer: {
    flex: 1,
  },
  footerNote: {
    marginHorizontal: "auto",
    marginTop: verticalScale(12),
    fontSize: moderateScale(12),
    color: colors.subText,
  },
});
