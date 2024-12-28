// components/Button.js
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({
  children,
  backgroundColor = "#cccccc",
  width = 80,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.container, { backgroundColor, width }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "300",
    color: "#fff", // Text color for better visibility
  },
});

export default Button;
