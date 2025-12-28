import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { colors as importColors } from "@/utils/colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const colors = {
  main: importColors.main,
  text: importColors.black,
  subText: "#ADAEBC",
  border: "#D1D5DB",
  background: "#FFFFFF",
};

interface CustomInputProps {
  text: string;
  placeholder: string;
  icon?: React.ReactNode;
}

const CustomInput = ({ text, placeholder, icon }: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = text.toLowerCase() === "password" || text.toLowerCase() === "confirm password";

  return (
    <>
      <Text style={styles.label}>{text}</Text>
      <View style={styles.inputWrapper}>
        {icon && icon}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.subText}
          secureTextEntry={isPassword && !showPassword}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color={colors.subText}
            />
          </Pressable>
        )}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: verticalScale(48),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(12),
    marginBottom: verticalScale(12),
    backgroundColor: "#fff",
  },

  icon: {
    marginRight: scale(10),
  },

  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: colors.text,
    paddingVertical: 0,
  },

  label: {
    fontSize: moderateScale(13),
    marginBottom: verticalScale(6),
    color: colors.text,
  },
});
