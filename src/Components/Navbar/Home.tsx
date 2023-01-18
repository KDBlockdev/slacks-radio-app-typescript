import { View, Text, StyleSheet, Image } from "react-native";
import * as React from "react";
import RadioStream from "../MainScreen/RadioStream2";

const styles = StyleSheet.create({
  componentBackground: {
    backgroundColor: "#CCCCFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  logo: {
    width: 500,
    height: 10,
    padding: 60,
    paddingHorizontal: 10,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
  },
})

const HomeScreen = () => {
  return (
    <View style={styles.componentBackground}>
      <View style={styles.componentBackground}>
      <Image style={styles.logo} source={require("../../Images/SlacksTextBlack.png")} />
      </View>
      <View>
        <RadioStream />
      </View>
    </View>
  );
};

export default HomeScreen;
