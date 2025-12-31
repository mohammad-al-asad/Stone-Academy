// components/ActivityCard.tsx
import { colors } from "@/utils/colors";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

type Actiivity = {
  title: string;
  host: string;
  hostAvatar: string;
  date: string;
  distance: string;
  image: string;
  joinedMembers: string[];
  joinedCount: string;
};

export default function ActivityCard({
  item: {
    title,
    host,
    hostAvatar,
    date,
    distance,
    image,
    joinedMembers,
    joinedCount,
  },
  onPress,
}: {
  item: Actiivity;
  onPress?: () => void;
}) {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Host row */}
      <View style={styles.hostRow}>
        <Image source={{ uri: hostAvatar }} style={styles.hostAvatar} />

        <View style={{ flex: 1 }}>
          <Text style={styles.hostName}>{host}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <Text style={styles.distance}>{distance}</Text>
      </View>

      {/* Joined avatars */}
      <View style={styles.joinedRow}>
        <View style={styles.avatarStack}>
          {joinedMembers.slice(0, 4).map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              style={[styles.joinedAvatar, { left: index * 16 }]}
            />
          ))}
        </View>

        <Text style={styles.joinedText}>{joinedCount} joined</Text>
      </View>

      {/* Activity image */}
      <Image source={{ uri: image }} style={styles.coverImage} />

      {/* Button */}
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Join Activity</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    borderColor: colors.black,
    borderWidth: 1,
  },

  title: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginBottom: 10,
  },

  hostRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  hostAvatar: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: 19,
  },

  hostName: {
    fontSize: 14,
    fontWeight: "600",
  },

  date: {
    fontSize: 12,
    color: "#777",
  },

  distance: {
    fontSize: 12,
    color: "#777",
  },

  joinedRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  avatarStack: {
    flexDirection: "row",
    marginRight: 8,
    height: 28,
  },

  joinedAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#fff",
    position: "absolute",
  },

  joinedText: {
    fontSize: 12,
    color: "#777",
    marginLeft: 70,
  },

  coverImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 14,
  },

  button: {
    backgroundColor: "#CDEB6A",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
