import EventCard, { EventItem } from "@/component/EventCard";
import ProfileHeader from "@/component/ProfileHeader";
import SuccessModal from "@/component/SuccessModal";
import { colors } from "@/utils/colors";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

// Define the event data structure based on the image

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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ebebebff",
        }}
        title="Community Events"
      />
      <SuccessModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <FlatList
        style={{ marginTop: verticalScale(20) }}
        data={EVENTS_DATA}
        renderItem={({ item }) => <EventCard item={item} />}
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
});
