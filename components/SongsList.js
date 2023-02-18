import React from "react";
import { StyleSheet, SafeAreaView, Text, FlatList, View } from "react-native";
import { Themes } from "../assets/Themes";
import Song from "./Song";

export default function SongsList({ tracks }) {
  //   console.log("hi hi", tracks);
  return (
    <View>
      <FlatList
        data={tracks}
        renderItem={(item) => {
          return <Song songInfo={item.item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
