import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function DBScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Database Screen</Text>
      <Button onPress={() => navigation.push("DBScreen")}>
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Calculator",
  screens: {
    Home: { screen: HomeScreen, options: { title: "Overview" } },
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);
export default function displayDB() {
  return <Navigation />;
}
