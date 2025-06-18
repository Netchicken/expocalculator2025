import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { CalcButtons } from "./Components/calcbuttons";
import { NumberButtons } from "./Components/numberButtons";
import { useAppStyles } from "./AllStyles/appStyles"; // Custom hook for app styles

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//function name is where it navigates to
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Calc Screen</Text>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

// Main App component
const App = () => {
  // State for calculator input/output
  const [calculation, setCalculation] = useState("");

  // Handle calculator button presses
  const updateCalculation = (value) => {
    if (value === "=") {
      // Evaluate the calculation string
      try {
        // Evaluate the calculation using JavaScript's Function constructor
        // WARNING: In production, never use eval or Function with user input!
        let answer = new Function("return " + calculation)();
        setCalculation(calculation + "=" + answer);
      } catch {
        setCalculation("Error");
      }
    } else if (value === "clear") {
      setCalculation("");
    } else if (value === "del") {
      setCalculation(calculation.slice(0, -1)); // Remove last character
    } else {
      setCalculation(calculation + String(value)); // Add the pressed value to the calculation string
    }
  };

  // Memoize styles for performance
  const styles = useAppStyles();

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("./Assets/bgImage.png")} // Background image
      style={styles.image}
    >
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text style={styles.sectionTitle}>
                React Native Simple Calculator
              </Text>
              <View style={styles.calcBox}>
                <Text style={styles.outputText}>
                  {calculation || "Enter a number"}
                </Text>
              </View>

              <CalcButtons updateCalculation={updateCalculation} />
              <NumberButtons updateCalculation={updateCalculation} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ImageBackground>
  );
};

export default App;
