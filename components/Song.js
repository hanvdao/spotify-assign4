import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  View,
} from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { AntDesign } from "@expo/vector-icons";

export default function Song({ songInfo, navigation }) {
  // console.log("HELOOFDN", songInfo);

  let albumName = songInfo["albumName"];
  let songLength = millisToMinutesAndSeconds(songInfo["duration"]);
  let albumPicLink = songInfo["imageUrl"];
  let songName = songInfo["songTitle"];

  return (
    <View style={styles.songContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate("PreviewScreen", { url: songInfo["previewUrl"] })
        }
      >
        <AntDesign name="play" size={20} color="green" />
      </Pressable>
      <View>
        <Image
          style={styles.albumPic}
          source={{ uri: albumPicLink }}
          alt="Album Cover Picture"
        />
      </View>
      <View style={styles.songArtist}>
        <Text style={styles.whiteText} numberOfLines={1}>
          {songName}
        </Text>
      </View>
      <View style={styles.albumName}>
        <Text style={styles.whiteText} numberOfLines={1}>
          {albumName}
        </Text>
      </View>
      <View style={styles.albumLength}>
        <Text style={styles.whiteText}>{songLength}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },

  albumPic: {
    width: 50,
    height: 50,
    borderRadius: 3,
    marginLeft: 10,
  },

  songArtist: {
    display: "flex",
    width: "40%",
    justifyContent: "center",
    padding: 10,
  },

  albumName: {
    display: "flex",
    width: "30%",
    justifyContent: "center",
    padding: 10,
  },

  albumLength: {
    justifyContent: "center",
  },

  whiteText: {
    color: "white",
  },

  grayText: {
    color: "lightgray",
  },
});
