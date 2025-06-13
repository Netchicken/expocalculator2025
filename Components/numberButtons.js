import { StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import { TouchableOpacityButton } from "./AllButtons";

// This component shows number and function buttons for the calculator
export const NumberButtons = ({ updateCalculation }) => {
  // Use a hook to memoize styles
  const styles = useNumberButtonStyles();

  return (
    <View>
      {/* First row: 0, 1, 2 */}
      <View style={styles.rowcontainer}>
        <TouchableOpacityButton
          text="0"
          onPress={() => updateCalculation("0")}
        />
        <TouchableOpacityButton
          text="1"
          onPress={() => updateCalculation("1")}
        />
        <TouchableOpacityButton
          text="2"
          onPress={() => updateCalculation("2")}
        />
      </View>
      {/* Second row: 3, 4, 5 */}
      <View style={styles.rowcontainer}>
        <TouchableOpacityButton
          text="3"
          onPress={() => updateCalculation("3")}
        />
        <TouchableOpacityButton
          text="4"
          onPress={() => updateCalculation("4")}
        />
        <TouchableOpacityButton
          text="5"
          onPress={() => updateCalculation("5")}
        />
      </View>
      {/* Third row: 6, 7, 8 */}
      <View style={styles.rowcontainer}>
        <TouchableOpacityButton
          text="6"
          onPress={() => updateCalculation("6")}
        />
        <TouchableOpacityButton
          text="7"
          onPress={() => updateCalculation("7")}
        />
        <TouchableOpacityButton
          text="8"
          onPress={() => updateCalculation("8")}
        />
      </View>
      {/* Fourth row: 9, ., Del */}
      <View style={styles.rowcontainer}>
        <TouchableOpacityButton
          text="9"
          onPress={() => updateCalculation("9")}
        />
        <TouchableOpacityButton
          text="."
          onPress={() => updateCalculation(".")}
        />
        <TouchableOpacityButton
          text="Del"
          onPress={() => updateCalculation("del")}
        />
      </View>
      {/* Fifth row: =, Clear */}
      <View style={styles.rowcontainer}>
        <TouchableOpacityButton
          text="="
          onPress={() => updateCalculation("=")}
        />
        <TouchableOpacityButton
          text="Clear"
          onPress={() => updateCalculation("clear")}
        />
      </View>
    </View>
  );
};

// Custom hook for styles, only created once
const useNumberButtonStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        rowcontainer: {
          flexDirection: "row", // Arrange buttons in a row
          alignContent: "flex-start",
          flexWrap: "wrap", // Allow wrapping if needed
        },
      }),
    []
  );
