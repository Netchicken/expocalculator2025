import { StyleSheet, Dimensions } from "react-native";
import { useMemo } from "react";

// Custom hook to create and memoize button styles
export const useButtonStyles = () => {
  // Get the screen size
  const screen = Dimensions.get("window");
  // Calculate button width based on screen width
  const buttonWidth = useMemo(() => screen.width / 4, [screen.width]);

  // Create styles using the calculated button width
  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          borderWidth: 2,
          borderColor: "#90caf9", // Soft blue border
          backgroundColor: "#e3f2fd", // Light blue background
          flex: 1,
          height: Math.floor(buttonWidth - 40),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          margin: 6,
          elevation: 2, // Subtle shadow (Android)
          shadowColor: "#1976d2", // Shadow (iOS)
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
        },
        text: {
          color: "#1976d2", // Deep blue text
          fontSize: 24,
          fontWeight: "600",
          letterSpacing: 1,
        },
        buttonPress: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#81c784", // Soft green border
          backgroundColor: "#e8f5e9", // Light green background
          alignSelf: "stretch",
          borderRadius: 18,
          margin: 6,
          elevation: 2,
          shadowColor: "#388e3c",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
        },
        textPress: {
          color: "#388e3c", // Deep green text
          fontSize: 22,
          fontWeight: "bold",
          letterSpacing: 1,
          textAlignVertical: "center",
        },
      }),
    [buttonWidth]
  );
};
