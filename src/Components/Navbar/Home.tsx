import { View, Text, StyleSheet, Image } from "react-native";
import * as React from "react";
import MainLogo from "../../Images/slackslogo.png";

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
    <View>
      <View style={styles.componentBackground}>
      <Image style={styles.logo} source={require("../../Images/SlacksTextBlack.png")} />
      </View>
    </View>
  );
};

export default HomeScreen;
