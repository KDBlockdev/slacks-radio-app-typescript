import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import MainLogo from "../../Images/slackslogo.png";

const styles = StyleSheet.create({
  componentBackground: {
    backgroundColor: "#CCCCFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
})

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.componentBackground}>
        <MainLogo />
      </View>
      {/* <View style={styles.componentBackground}>
        <RadioStream />
      </View> */}
      <View style={styles.componentBackground}>
        <Text>SCHEDULE</Text>
      </View>
      {/* <View>
        <Text>Soundcloud Player</Text>
        <SoundCloudPlayer trackUrl="https://soundcloud.com/slacksradio/diz-fundraiser-marathon-december-2022" />
      </View> */}
    </View>
  );
};

export default HomeScreen;
