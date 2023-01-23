import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as React from "react";
import RadioStream from "../MainScreen/RadioStream";
import SoundCloudPlayer from "../MainScreen/Soundcloud";
import NowPlayingBanner from "../MainScreen/NowPlayingBanner";
import { StackNavigationProp } from '@react-navigation/stack';


const HomeScreen = () => {
  return (
    <View style={styles.componentBackground}>
      <View style={styles.componentBackground}>
        {/* <NowPlayingBanner /> */}
      </View>
      <View style={styles.componentBackground}>
      <Image style={styles.logo} source={require("../../Images/slackslogo.png")} />
      </View>
      <View style={styles.componentBackground}>
        <RadioStream />
      </View>
      <View style={styles.componentBackground}>
        {/* <SoundCloudPlayer trackId={trackId}/> */}
      </View>
      <View style={styles.componentBackground}>
        {/* <GoogleTimesheet /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  componentBackground: {
    backgroundColor: "#CCCCFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  logo: {
    width: 400,
    height: 400,
    padding: 60,
    paddingHorizontal: 10,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
  },
})

