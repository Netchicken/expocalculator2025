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
      <Button
        onPress={() => navigation.push("Details")}
        title="Go to Details... again"
      >
        {" "}
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

export default function details() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
