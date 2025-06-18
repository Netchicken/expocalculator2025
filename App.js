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

import {
  createStaticNavigation,
  useNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@react-navigation/elements";

//function name is where it navigates to
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Calc Screen</Text>
      <Button onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button>
    </View>
  );
}
function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo("Home")}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>
        Go to the first screen in the stack
      </Button>
    </View>
  );
}
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
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
