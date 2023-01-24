import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, SafeAreaView } from "react-native";
import * as React from "react";
import RadioStream from "../MainScreen/RadioStream";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={require("../../Images/slackslogo.png")} 
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
    flex: 2,
    backgroundColor: "#CCCCFF", // added background color to container
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
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
    padding: Platform.OS === 'ios' ? 20 : 40,
  },
  logo: {
    width: '100%',
    height: Platform.OS === 'ios' ? '60%' : '80%',
  },
  playStopContainer: {
    backgroundColor: "#CCCCFF", // added background color to container
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
  listenLive: {
    color: "#CCCCFF", // added color to text
    fontWeight: "bold",
    marginTop: 10,
  },
});
