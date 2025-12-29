import ConfirmationAlert from "@/component/ConfirmationAlert";
import ProfileHeader from "@/component/ProfileHeader";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slices/authSlice";
import { colors } from "@/utils/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { RelativePathString, router } from "expo-router";
import React, { ReactNode, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

interface MenuItem {
  id: number;
  label: string;
  isLogout?: boolean;
  icon?: ReactNode;
  slug?: string;
}

const MenuItem = ({
  item: { label, isLogout, icon },
  onPress,
}: {
  item: MenuItem;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.menuItemContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftContainer}>
        {icon && icon}
        <Text style={[styles.label, isLogout && styles.logoutLabel]}>
          {label}
        </Text>
      </View>
      {isLogout ? null : (
        <View
          style={{
            width: moderateScale(40),
            height: moderateScale(45),
            backgroundColor: colors.main,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: moderateScale(12),
          }}
        >
          <Ionicons name="chevron-forward" size={20} color={colors.black} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const ProfileScreen = () => {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const dispatch = useAppDispatch();
  const menuItems: MenuItem[] = [
    {
      id: 2,
      label: "Edit Profile",
      slug: "(protected)/edit-profile",
      icon: <FontAwesome5 name="user-edit" color={colors.black} size={24} />,
    },
    {
      id: 3,
      label: "Account Settings",
      slug: "(protected)/account-settings",
      icon: (
        <Image
          source={require("../../../../assets/images/icons/userSetting.png")}
          style={{
            width: 28,
            height: 28,
            resizeMode: "contain",
            tintColor: colors.black,
          }}
        />
      ),
    },
    {
      id: 4,
      label: "Subscription",
      slug: "(protected)/subscription",
      icon: <MaterialCommunityIcons name="crown" size={30} color="black" />,
    },
    {
      id: 5,
      label: "Logout",
      isLogout: true,
      icon: (
        <Image
          source={require("../../../../assets/images/icons/logout.png")}
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
            tintColor: colors.black,
          }}
        />
      ),
    },
  ];

  function onPressMenu(slug: string, isLogout?: boolean) {
    if (isLogout) {
      setIsLogoutModal(true);
    } else {
      router.push(slug as RelativePathString);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader title="My Profile" />
      <ConfirmationAlert
      message="Do you want to Log out?"
        visible={isLogoutModal}
        onConfirm={() => {
          dispatch(logout());
        }}
        onCancel={() => setIsLogoutModal(false)}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require("../../../../assets/images/profile.png")}
            />
            <Text style={styles.userName}>{"name"}</Text>
          </View>

          <View
            style={{
              gap: 24,
            }}
          >
            <Text style={styles.menuHeader}>Profile information</Text>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onPress={() => onPressMenu(item.slug || "", item.isLogout)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },

  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 15,
  },
  avatar: {
    width: verticalScale(96),
    height: verticalScale(96),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  userName: {
    fontSize: verticalScale(16),
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 4,
  },
  logoutContainer: {
    borderBottomWidth: 0,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "medium",
    color: colors.black,
    marginLeft: 15,
  },
  logoutLabel: {
    color: "#ff3b30",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.unfocused,
    borderRadius: 12,
    backgroundColor: colors.white,
    height: moderateScale(60),
  },
  menuHeader: {
    fontSize: moderateScale(18),
    fontWeight: "medium",
    color: colors.black,
  },
});

export default ProfileScreen;
