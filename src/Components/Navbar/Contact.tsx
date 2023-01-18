import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import Styles from "../Styles";

const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CCCCFF",
      },
  })

const ContactScreen = () => {
    return (
        <View style={styles.bottomBar}>
            <Text>Contact Us!</Text>
        </View>
    )
}

export default ContactScreen;