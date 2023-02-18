import React from "react";
import { StyleSheet, SafeAreaView, Text, Pressable, Image } from "react-native";
import { Themes } from "../assets/Themes";
import SpotifyLogo from "../assets/spotify-logo.png";

export default function AuthButton({ getSpotifyAuthFunction }) {
  return (
    <Pressable style={styles.connectButton} onPress={getSpotifyAuthFunction}>
      <Image style={styles.connectLogo} source={SpotifyLogo} />
      <Text style={styles.connectText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  connectButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.spotify,
    color: "white",
    borderRadius: 999999999999,
    width: "80%",
  },

  connectText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    margin: 10,
    marginLeft: 0,
    marginRight: 40,
  },
  connectLogo: {
    flex: 1,
    margin: 5,
    marginRight: 0,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
