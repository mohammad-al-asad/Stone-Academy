import ProfileHeader from "@/component/ProfileHeader";
import { colors } from "@/utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// Define the shape of our message data
interface MessageItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: any; // Using local require or URI
  online: boolean;
  delivered: boolean;
}

const DUMMY_MESSAGES: MessageItem[] = [
  {
    id: "1",
    name: "John Smith",
    lastMessage: "Hello, are you here?",
    time: "1:20 PM",
    avatar: require("../../../../assets/images/profile.png"),
    online: true,
    delivered: true,
  },
  {
    id: "2",
    name: "Cameron Williamson",
    lastMessage: "Hello, are you here?",
    time: "1:20 PM",
    avatar: require("../../../../assets/images/profile.png"), // Replace with actual asset
    online: true,
    delivered: true,
  },
  // Add more items to test scrolling
  ...Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `temp-${i}`,
      name: "John Smith",
      lastMessage: "Hello, are you here?",
      time: "1:20 PM",
      avatar: require("../../../../assets/images/profile.png"),
      online: true,
      delivered: true,
    })),
];

const MessagesScreen = () => {
  const renderItem = ({ item }: { item: MessageItem }) => (
    <TouchableOpacity
      style={styles.messageCard}
      activeOpacity={0.7}
      onPress={() => router.push("/(protected)/(tab)/chat/inbox")}
    >
      <View style={styles.avatarWrapper}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.online && <View style={styles.onlineStatus} />}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.delivered && (
            <Ionicons
              name="checkmark-done"
              size={16}
              color="#5AC8FA" // Light blue color for read/delivered ticks
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Reusing your consistent ProfileHeader */}
      <ProfileHeader title="Messages" />

      <FlatList
        data={DUMMY_MESSAGES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(20),
  },
  messageCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    marginBottom: verticalScale(12),
    // Subtle shadow for depth matching your reference
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  onlineStatus: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: moderateScale(12),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
    backgroundColor: "#FFD60A", // Yellow dot as seen in image
    borderWidth: 2,
    borderColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    marginLeft: scale(12),
    justifyContent: "center",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(4),
  },
  userName: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: colors.black,
  },
  timeText: {
    fontSize: moderateScale(11),
    color: colors.unfocused,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastMessage: {
    fontSize: moderateScale(13),
    color: colors.unfocused,
    flex: 1,
    marginRight: scale(10),
  },
});
