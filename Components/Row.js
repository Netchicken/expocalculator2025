import { StyleSheet, View } from "react-native";
import React from "react";
//in the row component, there is 1 prop that we need, namely: children
export const Row = ({ children }) => {
  return <View style={styles.rowcontainer}>{children}</View>;
};

// Custom hook for styles, only created once
const useRowStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rowcontainer: {
          flexDirection: "row", // Arrange children in a row
          alignContent: "flex-start",
          flexWrap: "wrap", // Allow wrapping if needed
        },
      }),
    []
  );
