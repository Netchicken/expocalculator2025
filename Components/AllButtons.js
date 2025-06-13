import {
  Dimensions, // Lets us get the size of the screen
  StyleSheet, // Lets us write styles like CSS
  Text, // Used to show text
  TouchableOpacity, // A button that fades when pressed
  Pressable, // A button that can detect different press states
} from "react-native";
import React, { useMemo } from "react";

export const TouchableOpacityButton = ({ onPress, text }) => {
  const styles = useButtonStyles();
  // This button calls onPress when pressed and shows the text
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const PressableButton = ({ onPress, symbol }) => {
  const styles = useButtonStyles();
  // This button calls onPress with the symbol when pressed and shows the symbol
  return (
    <Pressable onPress={() => onPress(symbol)} style={styles.buttonPress}>
      <Text style={styles.textPress}>{symbol}</Text>
    </Pressable>
  );
};

// Custom hook to create and memoize button styles
const useButtonStyles = () => {
  // Get the screen size
  const screen = Dimensions.get("window");
  // Calculate button width based on screen width
  const buttonWidth = useMemo(() => screen.width / 4, [screen.width]);

  // Create styles using the calculated button width
  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          borderWidth: 3, // Border thickness
          borderColor: "#64dded", // Border color
          backgroundColor: "#ffffff", // Button background color
          flex: 1, // Take up available space
          height: Math.floor(buttonWidth - 55), // Button height
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
          borderRadius: Math.floor(buttonWidth), // Rounded corners
          margin: 5, // Space around button
        },
        text: {
          color: "#060606",
          fontSize: 24,
        },

        buttonPress: {
          flex: 1,
          justifyContent: "center",
          borderWidth: 3,
          borderColor: "#23e25c",
          backgroundColor: "#f06464",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: Math.floor(buttonWidth),
          margin: 5,
        },

        textPress: {
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          textAlignVertical: "center",
        },
      }),
    [buttonWidth]
  );
};
