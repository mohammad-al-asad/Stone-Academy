import { colors } from "@/utils/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomInput from "@/component/CustomInput"; // Integrated your custom component

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  time: string;
  senderName?: string;
}

const ChatDetailScreen = () => {
  const [messageText, setMessageText] = useState("");
  // Toggle this to test the Empty View
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderName: "Cameron Williamson",
      text: "That sounds exciting! 🥳 Which festival are you going to?",
      sender: "them",
      time: "10:15 AM",
    },
    {
      id: "2",
      senderName: "Cameron Williamson",
      text: "That sounds exciting! 🥳 Which festival are you going to?",
      sender: "them",
      time: "10:15 AM",
    },
    {
      id: "3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante elit.",
      sender: "me",
      time: "6:00 PM",
    },
  ]);

  // The Empty View component shown when data is empty
  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconWrapper}>
        <Ionicons name="chatbubble-ellipses-outline" size={moderateScale(80)} color={colors.main} />
      </View>
      <Text style={styles.emptyText}>Start your message</Text>
    </View>
  );

  const renderMessage = ({ item }: { item: Message }) => {
    const isMe = item.sender === "me";
    return (
      <View style={[styles.messageRow, isMe ? styles.myRow : styles.theirRow]}>
        {!isMe && (
          <Image
            source={require("../../../../assets/images/profile.png")}
            style={styles.smallAvatar}
          />
        )}
        <View style={[styles.bubble, isMe ? styles.myBubble : styles.theirBubble]}>
          {!isMe && <Text style={styles.senderName}>{item.senderName}</Text>}
          <Text style={styles.messageText}>{item.text}</Text>
          <View style={styles.messageFooter}>
            {isMe && <Ionicons name="checkmark-done" size={14} color={colors.black} style={{marginRight: 4}} />}
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Custom Chat Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={colors.black} />
        </TouchableOpacity>
        
        <View style={styles.headerInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../../../assets/images/profile.png")}
              style={styles.headerAvatar}
            />
            <View style={styles.onlineDot} />
          </View>
          <View>
            <Text style={styles.headerName}>Cameron Williamson</Text>
            <Text style={styles.headerStatus}>Active Now</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          ListEmptyComponent={renderEmptyComponent} // Renders when messages.length === 0
          contentContainerStyle={[
            styles.listContent, 
            messages.length === 0 && { flex: 1, justifyContent: 'center' }
          ]}
          showsVerticalScrollIndicator={false}
        />

        {/* Input Area using CustomInput */}
        <View style={styles.inputContainer}>
          <View style={{ flex: 1 }}>
            <CustomInput
              placeholder="Type something..."
              value={messageText}
              onChangeText={setMessageText}
              style={styles.overrideInputStyle}
            />
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <Feather name="send" size={20} color={colors.main} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  headerInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: scale(10),
  },
  avatarContainer: {
    position: "relative",
    marginRight: scale(10),
  },
  headerAvatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
  },
  onlineDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFD60A",
    borderWidth: 2,
    borderColor: colors.white,
  },
  headerName: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: colors.black,
  },
  headerStatus: {
    fontSize: moderateScale(12),
    color: colors.unfocused,
  },
  listContent: {
    padding: scale(15),
    flexGrow: 1,
  },
  // Empty View Styles
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIconWrapper: {
    marginBottom: verticalScale(20),
  },
  emptyText: {
    fontSize: moderateScale(18),
    color: colors.unfocused,
    fontWeight: '500',
  },
  messageRow: {
    flexDirection: "row",
    marginBottom: verticalScale(15),
    maxWidth: "85%",
  },
  myRow: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
  },
  theirRow: {
    alignSelf: "flex-start",
  },
  smallAvatar: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    marginTop: 4,
  },
  bubble: {
    padding: moderateScale(12),
    borderRadius: moderateScale(16),
    marginHorizontal: scale(8),
  },
  myBubble: {
    backgroundColor: "#E2F163",
    borderTopRightRadius: 0,
  },
  theirBubble: {
    backgroundColor: "#F9FBE7",
    borderTopLeftRadius: 0,
  },
  senderName: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    color: colors.black,
    marginBottom: 4,
  },
  messageText: {
    fontSize: moderateScale(14),
    lineHeight: 20,
    color: colors.black,
  },
  messageFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 4,
  },
  timeText: {
    fontSize: moderateScale(10),
    color: colors.unfocused,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Changed to align with CustomInput's structure
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(10),
    paddingBottom: Platform.OS === "ios" ? verticalScale(20) : verticalScale(10),
    backgroundColor: colors.white,
  },
  overrideInputStyle: {
    marginBottom: 0, // Removing margin so it aligns with the button
    borderColor: colors.main, // Matching the theme from your screenshot
  },
  sendButton: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: scale(10),
  },
});