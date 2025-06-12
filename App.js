import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.myText}>
        This is not an error message doofus! its the App
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e4361",
    alignItems: "center",
    justifyContent: "center",
  },
  myText: {
    color: "#ceded1", // Set your desired text color here
    fontSize: 24, // Add this line to change text size
  },
});
