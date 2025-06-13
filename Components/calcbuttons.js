import {
  View, //The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. https://reactnative.dev/docs/view
  StyleSheet, //StyleSheet.create returns a stylesheet object. https://reactnative.dev/docs/stylesheet
} from "react-native";
import React, { useMemo } from "react";
import { PressableButton } from "./AllButtons";

// This component shows calculator buttons (+, *, /, -)
export const CalcButtons = ({ updateCalculation }) => {
  // Use a hook to memoize styles so they don't get recreated every render
  const styles = useCalcButtonStyles();

  return (
    <View style={styles.rowcontainer}>
      <PressableButton onPress={updateCalculation} symbol="+" />
      <PressableButton onPress={updateCalculation} symbol="*" />
      <PressableButton onPress={updateCalculation} symbol="/" />
      <PressableButton onPress={updateCalculation} symbol="-" />
    </View>
  );
};

// Custom hook for styles
const useCalcButtonStyles = () =>
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
