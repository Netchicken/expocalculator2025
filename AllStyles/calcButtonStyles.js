// Custom hook
import { StyleSheet } from "react-native";
import { useMemo } from "react";

export const useCalcButtonStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rowcontainer: {
          flexDirection: "row", // Arrange buttons in a row
          width: "100%", // Full width
          alignContent: "flex-start",
          flexWrap: "wrap", // Allow wrapping if needed
          justifyContent: "space-between", // Space between buttons
        },
      }),
    []
  );
