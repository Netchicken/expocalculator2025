import {
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
  StyleSheet, //StyleSheet.create returns a stylesheet object. https://reactnative.dev/docs/stylesheet
} from "react-native";
import React, { useMemo } from "react";
import { PressableButton } from "./AllButtons";

// This component shows database operation buttons
export const DbButtons = ({ sqlOperation }) => {
  const styles = useDbButtonStyles(); // Use a hook to memoize styles
  return (
    <View style={styles.rowcontainer}>
      <PressableButton onPress={sqlOperation} symbol="Display" />
      <PressableButton onPress={sqlOperation} symbol="Add" />
      <PressableButton onPress={sqlOperation} symbol="Delete" />
      <PressableButton onPress={sqlOperation} symbol="Edit" />
    </View>
  );
};

// Custom hook for styles
const useDbButtonStyles = () =>
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
