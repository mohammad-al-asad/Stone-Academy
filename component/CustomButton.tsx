import { colors } from "@/utils/colors";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  children?: React.ReactNode;
  type?: "outline" | "default";
}
const CustomButton = ({
  text,
  type = "default",
  children,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        type == "default"
          ? {
              backgroundColor: colors.main,
            }
          : {
              backgroundColor: "white",
              borderColor: "#E5E7EB",
            },
      ]}
    >
      {text && <Text style={styles.text}>{text}</Text>}
      {children && children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontWeight: "semibold",
    fontSize: 18,
  },
});
