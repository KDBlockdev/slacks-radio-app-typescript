import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, SafeAreaView } from "react-native";
import * as React from "react";
import RadioStream from "../MainScreen/RadioStream";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={require("../../Images/SlacksTextWhite.png")} 
          resizeMode='contain'
        />
      </View>
      <View style={styles.componentBackground}>
        <View style={styles.playStopContainer}>
          <RadioStream />
        </View>
        <Text style={styles.listenLive}>Listen Live</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCFF",
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
  },
  componentBackground: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
    flex: 1
  },
  logoContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: '100%',
    height: Platform.OS === 'ios' ? '60%' : '80%',
    marginBottom: 5,  // added marginBottom
  },
  playStopContainer: {
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
  listenLive: {
    color: "#CCCCFF",
    fontWeight: "bold",
    marginTop: 10,
  },
});

