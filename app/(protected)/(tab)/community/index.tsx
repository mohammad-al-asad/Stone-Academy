import CustomButton from "@/component/CustomButton";
import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// Define the event data structure based on the image
interface EventItem {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: any;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "1",
    category: "Charity Walk",
    price: "Free",
    title: "Walk for Mental Health Awareness",
    description:
      "Join our community for a meaningful walk supporting local health initiatives.",
    image: require("../../../../assets/images/community1.png"), //
  },
  {
    id: "2",
    category: "Yoga Session",
    price: "$25",
    title: "Sunset Yoga in the Park",
    description:
      "Relax and rejuvenate with our weekend yoga retreat in the beautiful outdoors.",
    image: require("../../../../assets/images/community1.png"), //
  },
  {
    id: "3",
    category: "Yoga Session",
    price: "$15",
    title: "HIIT Gym Workout",
    description:
      "Relax and rejuvenate with our weekend yoga retreat in the beautiful outdoors.",
    image: require("../../../../assets/images/community1.png"), //
  },
];

const CommunityEventsScreen = () => {
  const renderItem = ({ item }: { item: EventItem }) => (
    <View style={styles.cardContainer}>
      {/* Event Image */}
      <Image source={item.image} style={styles.eventImage} resizeMode="cover" />

      <View style={styles.cardContent}>
        {/* Category and Price Row */}
        <View style={styles.badgeRow}>
          <Text style={styles.categoryText}>{item.category}</Text>
          <View
            style={
              item.price.toLowerCase() === "free"
                ? styles.freeBadge
                : styles.priceBadge
            }
          >
            <Text
              style={
                item.price.toLowerCase() === "free"
                  ? styles.freeText
                  : styles.priceText
              }
            >
              {item.price}
            </Text>
          </View>
        </View>

        {/* Title and Description */}
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>

        {/* Action Button */}
        <CustomButton
          text="Join Event"
          onPress={() => console.log(`Joined ${item.title}`)}
          style={styles.buttonOverride}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ebebebff",
        }}
        title="Community Events"
      />

      <FlatList
        style={{ marginTop: verticalScale(20) }}
        data={EVENTS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CommunityEventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listPadding: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(80), // Space for bottom tabs
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: "#F0F0F0",
    marginBottom: verticalScale(20),
    overflow: "hidden", // Ensures image corners match card
  },
  eventImage: {
    width: "100%",
    height: verticalScale(128),
  },
  cardContent: {
    padding: moderateScale(15),
  },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(8),
  },
  categoryText: {
    fontSize: moderateScale(12),
    color: "#D4E157",
    fontWeight: "600",
  },
  priceBadge: {
    backgroundColor: "#FEF9C3",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(10),
  },
  freeBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(10),
  },
  priceText: {
    fontSize: moderateScale(12),
    fontWeight: "700",
    color: "#854D0E",
  },
  freeText: {
    fontSize: moderateScale(12),
    fontWeight: "700",
    color: "#166534",
  },
  eventTitle: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: colors.black,
    marginBottom: verticalScale(6),
  },
  eventDescription: {
    fontSize: moderateScale(13),
    color: colors.unfocused,
    lineHeight: moderateScale(18),
    marginBottom: verticalScale(15),
  },
  buttonOverride: {
    height: moderateScale(45),
    justifyContent: "center",
  },
});
