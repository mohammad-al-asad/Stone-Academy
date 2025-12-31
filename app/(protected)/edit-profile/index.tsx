import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import Dropdown from "@/component/Dropdown";
import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const windowWidth = Dimensions.get("window").width;

const EditProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: "John Smith",
    dateOfBirth: "28/11/1997",
    gender: "Female",
    location: "San Francisco, CA",
    phoneNumber: "+1234567890",
  });

  const [profileImage] = useState(
    require("../../../assets/images/profile.png")
  );

  const rating = {
    average: 4.8,
    testimonials: [
      {
        id: 1,
        comment: `"Great workout partner! Very motivating."`,
      },
      {
        id: 2,
        comment: `"Always on time and brings positive energy!"`,
      },
    ],
  };

  const [galleryImages, setGalleryImages] = useState([
    { id: 3, image: null },
    {
      id: 1,
      image: require("../../../assets/images/onboarding/onboarding4.png"),
    },
    {
      id: 2,
      image: require("../../../assets/images/onboarding/onboarding4.png"),
    },
  ]);

  const handleRemoveImage = (id: number) => {
    setGalleryImages((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangePhoto = () => {
    Alert.alert("Change Photo", "Select an option", [
      { text: "Take Photo" },
      { text: "Choose from Gallery" },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const renderStars = (value: number) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Ionicons
            key={i}
            name={i <= Math.round(value) ? "star" : "star-outline"}
            size={moderateScale(18)}
            color="#FFC107"
          />
        ))}
      </View>
    );
  };

  const renderGalleryItem = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={styles.galleryItem}
      activeOpacity={0.8}
    >
      {item.image ? (
        <>
          <Image source={item.image} style={styles.galleryImage} />
          <TouchableOpacity
            style={styles.removeIcon}
            onPress={() => handleRemoveImage(item.id)}
          >
            <Feather name="x" size={14} color="white" />
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.galleryPlaceholder}>
          <Feather name="plus" size={24} color={colors.unfocused} />
        </View>
      )}
    </TouchableOpacity>
  );

  const renderTestimonial = (item: any) => (
    <View key={item.id} style={styles.ratingItem}>
      <Image
        source={require("../../../assets/images/profile.png")}
        style={styles.ratingImage}
      />
      <Text style={styles.ratingComment}>{item.comment}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader title="Edit Profile" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Photo */}
          <View style={styles.photoSection}>
            <TouchableOpacity
              style={styles.photoContainer}
              onPress={handleChangePhoto}
            >
              <Image source={profileImage} style={styles.profileImage} />
              <View style={styles.photoEditIcon}>
                <Ionicons name="camera" size={18} color={colors.black} />
              </View>
            </TouchableOpacity>
            <Text style={styles.changePhotoText}>Tap to change photo</Text>
          </View>

          {/* Personal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <CustomInput
              text="Name"
              placeholder="Enter your name"
              value={userData.name}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
            />

            <CustomInput
              text="Date of Birth"
              placeholder="DD/MM/YYYY"
              value={userData.dateOfBirth}
              onChangeText={(text) =>
                setUserData({ ...userData, dateOfBirth: text })
              }
            />

            <Dropdown
              value={userData.gender}
              onSelect={(gender: string) =>
                setUserData({ ...userData, gender })
              }
            />

            <CustomInput
              text="Location"
              placeholder="Enter your location"
              value={userData.location}
              onChangeText={(text) =>
                setUserData({ ...userData, location: text })
              }
            />

            <CustomInput
              text="Phone Number"
              placeholder="+1234567890"
              value={userData.phoneNumber}
              onChangeText={(text) =>
                setUserData({ ...userData, phoneNumber: text })
              }
            />
          </View>

          {/* Gallery */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <View style={styles.galleryContainer}>
              {galleryImages.map(renderGalleryItem)}
            </View>
          </View>

          {/* Ratings */}
          <View
            style={[
              styles.section,
              {
                borderWidth: 1,
                borderColor: "#ddd",
                padding: moderateScale(16),
              },
            ]}
          >
            <Text style={styles.sectionTitle}>My Ratings</Text>

            <View style={styles.overallRatingContainer}>
              <Text style={styles.overallRatingValue}>
                {rating.average.toFixed(1)}
              </Text>
              {renderStars(rating.average)}
            </View>

            {rating.testimonials.map(renderTestimonial)}
          </View>

          <CustomButton text="Save" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

/* ======================= STYLES ======================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scrollContent: {
    padding: moderateScale(16),
  },

  photoSection: {
    alignItems: "center",
    marginBottom: verticalScale(20),
  },

  photoContainer: {
    position: "relative",
  },

  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 50,
  },

  photoEditIcon: {
    position: "absolute",
    bottom: 2,
    right: 2,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    padding: 6,
  },

  changePhotoText: {
    marginTop: verticalScale(8),
    fontSize: moderateScale(13),
    color: colors.unfocused,
  },

  section: {
    marginBottom: verticalScale(20),
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
  },

  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    color: colors.black,
    marginBottom: verticalScale(12),
  },

  galleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  galleryItem: {
    width: windowWidth / 3 - scale(20),
    height: windowWidth / 3 - scale(20),
    marginBottom: verticalScale(12),
  },

  galleryImage: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: "#ddd",
  },

  galleryPlaceholder: {
    flex: 1,
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },

  removeIcon: {
    position: "absolute",
    top: scale(6),
    right: scale(6),
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: 11,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  overallRatingContainer: {
    alignItems: "center",
    marginBottom: verticalScale(10),
  },

  overallRatingValue: {
    fontSize: moderateScale(36),
    fontWeight: "700",
    color: colors.black,
  },

  overallRatingText: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(13),
    color: colors.unfocused,
  },

  starContainer: {
    flexDirection: "row",
    marginTop: verticalScale(6),
  },

  ratingItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(5),
    gap: 6,
    width: scale(250),
  },

  ratingImage: {
    width: verticalScale(40),
    height: verticalScale(40),
    borderRadius: 100,
  },

  ratingComment: {
    fontSize: moderateScale(13),
    color: colors.black,
    fontStyle: "italic",
    flex: 1,
  },
});
