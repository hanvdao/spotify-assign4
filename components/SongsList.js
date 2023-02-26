import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  Pressable,
} from "react-native";
import { Themes } from "../assets/Themes";
import Song from "./Song";

export default function SongsList({ tracks, navigation }) {
  return (
    <View>
      <FlatList
        data={tracks}
        renderItem={(item) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("DetailsScreen", {
                  url: item.item.externalUrl,
                })
              }
            >
              <Song songInfo={item.item} navigation={navigation} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
