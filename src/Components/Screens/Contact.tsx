import { View, Text, StyleSheet } from "react-native";
import * as React from "react";
// import Styles from "../Styles";

const ContactScreen = () => {
    return (
        <View style={styles.contactScreen}>
            <Text>Contact Us!</Text>
        </View>
    )
}

export default ContactScreen;


const styles = StyleSheet.create({
    contactScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CCCCFF",
      },
  })