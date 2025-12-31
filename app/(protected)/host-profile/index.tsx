import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";

const GALLERY_IMAGES = [
  { id: "1", source: require("@/assets/images/onboarding/onboarding1.png") }, // Replace with your actual paths
  { id: "2", source: require("@/assets/images/onboarding/onboarding2.png") },
  { id: "3", source: require("@/assets/images/onboarding/onboarding3.png") },
  { id: "4", source: require("@/assets/images/onboarding/onboarding4.png") },
  { id: "5", source: require("@/assets/images/onboarding/onboarding1.png") },
  { id: "6", source: require("@/assets/images/onboarding/onboarding3.png") },
];

const REVIEWS = [
  {
    id: "1",
    name: "Mike Chen",
    rating: 5,
    comment: "Great workout partner! Very motivating and always on time.",
    image: require("@/assets/images/profile.png"),
  },
  {
    id: "2",
    name: "Emma Davis",
    rating: 4,
    comment: "Had an amazing yoga session together. Highly recommend!",
    image: require("@/assets/images/profile.png"),
  },
];

const HostProfileScreen = () => {
  const renderStars = (rating: number) => {
    return (
      <View style={styles.starRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name="star"
            size={moderateScale(16)}
            color={star <= rating ? "#FFD700" : "#D1D5DB"}
            style={{ marginRight: 2 }}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader type="center" title="Host Profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Header Section */}
        <View style={styles.profileHeader}>
          <Image
            source={require("@/assets/images/profile.png")} // Sarah Johnson image
            style={styles.profileImage}
          />
          <Text style={styles.hostName}>Sarah Johnson</Text>
        </View>

        {/* Gallery Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <View style={styles.galleryGrid}>
            {GALLERY_IMAGES.map((item) => (
              <Image
                key={item.id}
                source={item.source}
                style={styles.galleryThumb}
              />
            ))}
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.card}>
          <Text style={styles.overallRating}>4.8</Text>
          <View style={styles.centerStars}>{renderStars(5)}</View>
          <Text style={styles.reviewCount}>Based on 24 reviews</Text>

          <View style={styles.reviewList}>
            {REVIEWS.map((review) => (
              <View key={review.id} style={styles.reviewItem}>
                <Image source={review.image} style={styles.reviewerImage} />
                <View style={styles.reviewContent}>
                  <View style={styles.reviewerHeader}>
                    <Text style={styles.reviewerName}>{review.name}</Text>
                    {renderStars(review.rating)}
                  </View>
                  <Text style={styles.reviewText}>{review.comment}</Text>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all reviews</Text>
          </TouchableOpacity>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.messageBtn}>
          <Ionicons name="chatbubble-outline" size={20} color={colors.main} />
          <Text style={styles.messageBtnText}>Message Host</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HostProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  scrollContent: { padding: scale(20) },
  profileHeader: { alignItems: "center", marginBottom: verticalScale(20) },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(12),
    borderWidth: 3,
    borderColor: "#F4F9C5",
  },
  hostName: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#1F2937",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
    padding: scale(16),
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginBottom: verticalScale(12),
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  galleryThumb: {
    width: "31%",
    borderWidth: 1,
    borderColor: colors.border,
    height: verticalScale(70),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(8),
  },
  overallRating: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F2937",
  },
  centerStars: { alignItems: "center", marginVertical: verticalScale(4) },
  reviewCount: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: moderateScale(12),
    marginBottom: verticalScale(16),
  },
  starRow: { flexDirection: "row" },
  reviewList: { marginTop: verticalScale(10) },
  reviewItem: { flexDirection: "row", marginBottom: verticalScale(16) },
  reviewerImage: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    marginRight: scale(12),
  },
  reviewContent: { flex: 1 },
  reviewerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  reviewerName: { fontSize: moderateScale(14), fontWeight: "600" },
  reviewText: {
    fontSize: moderateScale(12),
    color: "#4B5563",
    lineHeight: moderateScale(18),
  },
  seeAllText: {
    textAlign: "center",
    color: colors.main,
    fontWeight: "600",
    marginTop: verticalScale(10),
  },
  messageBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: moderateScale(12),
    height: moderateScale(55),
    marginTop: verticalScale(10),
  },
  messageBtnText: {
    marginLeft: scale(8),
    color: colors.main,
    fontWeight: "600",
    fontSize: moderateScale(15),
  },
});
