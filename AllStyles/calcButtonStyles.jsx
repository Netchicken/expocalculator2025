// Custom hook
import { StyleSheet } from "react-native";
import { useMemo } from "react";

export const useCalcButtonStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rowcontainer: {
          marginTop: 30, // Add margin to the top
          flexDirection: "row", // Arrange buttons in a row
          width: "100%", // Full width
          alignContent: "flex-start",
          flexWrap: "wrap", // Allow wrapping if needed
          justifyContent: "space-between", // Space between buttons
        },
      }),
    []
  );
