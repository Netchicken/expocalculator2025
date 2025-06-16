import { StyleSheet, Dimensions } from "react-native";
import { useMemo } from "react";
export const useAppStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        image: {
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        },
        container: {
          // fontSize: 40,
          flex: 1,
          marginTop: 30, // Add margin to the top
        },
        calcBox: {
          minHeight: 50, // Minimum height for one line
          maxHeight: 130, // Maximum height for two lines
          justifyContent: "center", // Center children vertically
          alignItems: "center", // Center children horizontally
          borderRadius: 40,
          paddingHorizontal: 16, // Horizontal padding (left & right)
          paddingVertical: 12, // Vertical padding (top & bottom)
          backgroundColor: "oldlace",
          marginBottom: 10,
          borderWidth: 1,
        },
        outputText: {
          fontWeight: "bold",
          textAlign: "center", // Center text horizontally
          textAlignVertical: "center", // Center text vertically (Android only)
          fontSize: 30,
          color: "#333",
          lineHeight: 50, // Should match container height for vertical centering
        },

        sectionTitle: {
          marginTop: 24, // Add space above the box
          color: "#1976d2", // A modern blue shade
          fontSize: 28, // Larger font for emphasis
          fontWeight: "bold", // Bold text
          textAlign: "center", // Centered text
          marginBottom: 18, // Space below the title
          letterSpacing: 2, // Spaced out letters
          textTransform: "uppercase", // Uppercase for style
          backgroundColor: "#e3f2fd", // Soft blue background
          paddingVertical: 10, // Vertical padding
          paddingHorizontal: 20, // Horizontal padding
          borderRadius: 16, // Rounded corners
          overflow: "hidden", // Ensures background stays rounded
          elevation: 2, // Subtle shadow on Android
          shadowColor: "#000", // Shadow for iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.12,
          shadowRadius: 4,
        },

        // Example list styles (if needed)
        liContainer: {
          backgroundColor: "#fff",
          flex: 1,
          paddingLeft: 5,
        },
        liText: {
          color: "#333",
          fontSize: 17,
          fontWeight: "400",
        },
      }),
    []
  );
