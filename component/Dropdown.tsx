import { colors } from "@/utils/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

interface DropdownProps {
  value: string | null;
  onSelect: (option: string) => void;
  placeholder?: string;
  options?: string[];
  style?: object;
  name?: string;
}
const Dropdown = ({
  value,
  onSelect,
  name="Gender",
  placeholder = "Select gender",
  options = ["Male", "Female", "Other"],
  style = {},
}: DropdownProps) => {
  const [expanded, setExpanded] = useState(false);
  const rotationAnim = useRef(new Animated.Value(0)).current;

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);

    Animated.timing(rotationAnim, {
      toValue: expanded ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleSelect = (gender: string) => {
    onSelect(gender);
    toggleExpanded();
  };

  const rotateInterpolate = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{name}</Text>

      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={toggleExpanded}
        activeOpacity={0.7}
      >
        <Text style={[styles.selectedText, !value && styles.placeholderText]}>
          {value || placeholder}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <Ionicons name="chevron-down" size={20} color={colors.subText} />
        </Animated.View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.dropdownContent}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                index === options.length - 1 && styles.lastOption,
                value === option && styles.optionSelected,
              ]}
              onPress={() => handleSelect(option)}
              activeOpacity={0.6}
            >
              <Text
                style={[
                  styles.optionText,
                  value === option && styles.optionTextSelected,
                ]}
              >
                {option}
              </Text>
              {value === option && (
                <Ionicons name="checkmark" size={18} color={colors.main} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(16),
  },
  label: {
    fontSize: moderateScale(13),
    marginBottom: verticalScale(6),
    color: colors.black,
    fontWeight: "400",
  },
  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(48),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(16),
    backgroundColor: "#fff",
  },
  selectedText: {
    fontSize: moderateScale(14),
    color: colors.black,
  },
  placeholderText: {
    color: colors.subText,
  },
  dropdownContent: {
    marginTop: verticalScale(4),
    position: "absolute",
    top: verticalScale(60),
    right: 0,
    left: 0,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionSelected: {
    backgroundColor: "#f8f9fa",
  },
  optionText: {
    fontSize: moderateScale(14),
    color: colors.black,
  },
  optionTextSelected: {
    color: colors.main,
    fontWeight: "500",
  },
});

export default Dropdown;
