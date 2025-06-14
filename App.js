import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { React, useState } from "react";
import { CalcButtons } from "./Components/calcbuttons";
import { NumberButtons } from "./Components/numberButtons";
import { DbButtons } from "./Components/DbButtons";
import { GetDb, PassData } from "./Operations/DbOperations";
import { useAppStyles } from "./AllStyles/appStyles"; // Import styles from appStyles.js

//https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f

// Main App component
const App = () => {
  // State for calculator input/output
  const [calculation, setCalculation] = useState("");

  // Example data for database display (not currently used)
  const DbDisplay = useMemo(
    () => [
      { id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", answer: "First Item" },
      { id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", answer: "Second Item" },
      { id: "58694a0f-3da1-471f-bd96-145571e29d72", answer: "Third Item" },
    ],
    []
  );

  // Handle calculator button presses
  const updateCalculation = (value) => {
    if (value === "=") {
      // Evaluate the calculation string
      try {
        // eslint-disable-next-line no-new-func
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
      setCalculation(calculation + String(value)); // Add value to string
    }
  };
  //Database functions
  //value = the new answer to be added to the database
  const sqlOperation = (value) => {
    console.log("App sqlOperation ", value);
    if (value === "Display") {
      PassData(value);
    }
  };

  // Memoize styles for performance
  const styles = useAppStyles();

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("./Assets/waterdrops.jpg")}
      style={styles.image}
    >
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text style={styles.sectionTitle}>Simple Calculator</Text>
              <View style={styles.calcBox}>
                <Text style={styles.outputText}>
                  {calculation || "Enter a number"}
                </Text>
              </View>
              {/* Calculator and database buttons */}
              <CalcButtons updateCalculation={updateCalculation} />
              <NumberButtons updateCalculation={updateCalculation} />
              <DbButtons sqlOperation={sqlOperation} />
              <GetDb />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

// // Custom hook for styles, only created once
// const useAppStyles = () =>
//   useMemo(
//     () =>
//       StyleSheet.create({
//         liContainer: {
//           backgroundColor: '#fff',
//           flex: 1,
//           paddingLeft: 5,
//         },
//         liText: {
//           color: '#333',
//           fontSize: 17,
//           fontWeight: '400',
//         },
//         image: {
//           flex: 1,
//           justifyContent: 'center',
//           width: '100%',
//           height: '100%',
//         },
//         container: {
//           fontSize: 40,
//           flex: 1,
//         },
//         calcBox: {
//           height: 50,
//           borderRadius: 40,
//           paddingLeft: 20,
//           paddingTop: 10,
//           backgroundColor: 'oldlace',
//           marginBottom: 10,
//           borderWidth: 1,
//         },
//         outputText: {
//           fontWeight: 'bold',
//           textAlignVertical: 'center',
//           textAlignment: 'right',
//           fontSize: 30,
//         },
//         sectionTitle: {
//           color: 'white',
//           fontSize: 24,
//           fontWeight: 'bold',
//           textAlignVertical: 'center',
//         },
//       }),
//     []
//   );

export default App;
