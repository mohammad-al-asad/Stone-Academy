import { colors } from "@/utils/colors";
import Feather from "@expo/vector-icons/Feather";
import { Tabs, usePathname } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

export default function Layout() {
  const insets = useSafeAreaInsets();
  const isHome = usePathname() === "/";

  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.unfocused,
        tabBarStyle: {
          backgroundColor: "#F8FBFF",
          height: moderateScale(94),
          marginTop: isHome ? insets.top : 0,
          elevation: 0,
          ...(!isHome && { paddingTop: moderateScale(10) }),
        },
        tabBarPosition: isHome ? "top" : "bottom",
        tabBarItemStyle: {
          marginVertical: 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size ?? 20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" size={size ?? 20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size ?? 20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size ?? 20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
