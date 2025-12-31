import { colors } from "@/utils/colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomButton from "./CustomButton";

export interface EventItem {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: any;
}

export default function EventCard({ item }: { item: any }) {
  return (
    <Pressable
      onPress={() => router.push("/(protected)/event-details")}
      style={styles.cardContainer}
    >
      {/* Event Image */}
      <Image source={item.image} style={styles.eventImage} contentFit="cover" />

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
        <CustomButton text="Join Event" style={styles.buttonOverride} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  },
});
