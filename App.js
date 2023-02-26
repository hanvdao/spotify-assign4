import { StyleSheet, SafeAreaView, Text, Pressable, Image } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/AuthButton";
import SongsList from "./components/SongsList";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="PreviewScreen"
          component={PreviewScreen}
          options={{
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
