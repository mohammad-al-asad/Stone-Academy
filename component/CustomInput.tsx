import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "@/utils/colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

interface CustomInputProps extends React.ComponentProps<typeof TextInput> {
  text?: string;
  placeholder: string;
  icon?: React.ReactNode;
  style?: object;
}

const CustomInput = ({
  text = "",
  placeholder,
  icon,
  style = {},
  ...props
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword =
    text.toLowerCase().includes("password") || props.secureTextEntry === true;

  return (
    <>
      {text && <Text style={styles.label}>{text}</Text>}
      <View style={[styles.inputWrapper, style]}>
        {icon && icon}
        <TextInput
          {...props}
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
    height: moderateScale(50),
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
    color: colors.black,
    paddingVertical: 0,
  },

  label: {
    fontSize: moderateScale(13),
    marginBottom: verticalScale(6),
    color: colors.black,
  },
});
