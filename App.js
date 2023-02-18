import { StyleSheet, SafeAreaView, Text, Pressable, Image } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/AuthButton";
import SongsList from "./components/SongsList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = <Text>unauthenticated</Text>;
  if (token) {
    contentDisplayed = <SongsList tracks={tracks} />;
  } else {
    contentDisplayed = <AuthButton getSpotifyAuthFunction={getSpotifyAuth} />;
  }

  return (
    <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
