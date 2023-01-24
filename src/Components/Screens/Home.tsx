import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";
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
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={require("../../Images/slackslogo.png")} 
          resizeMode='contain' 
        />
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
  logoContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    padding: Platform.OS === 'ios' ? 20 : 40,
  },
  logo: {
    width: '100%',
    height: Platform.OS === 'ios' ? '60%' : '80%',
  },
})