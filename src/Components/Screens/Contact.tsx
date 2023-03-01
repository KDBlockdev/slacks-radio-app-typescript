import { View, Text, StyleSheet, Linking, Platform, Image } from "react-native";
import * as React from "react";

const ContactScreen = () => {
const emailLink = "mailto:slacksradio@pm.me";

return (
    <View style={styles.contactScreen}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../Images/SlacksTextWhite.png")} />
          </View>
        <Text style={styles.firstText}>Please direct all inquiries including show applications to</Text>
        <Text style={styles.text} onPress={() => Linking.openURL(emailLink)}>slacksradio@pm.me</Text>
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
firstText: {
    textAlign: 'center',
    fontSize: 18
    },
text: {
textAlign: 'center',
fontSize: 18,
fontWeight: 'bold',
},
logoContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: '100%',
    height: Platform.OS === 'ios' ? '50%' : '40%',
    resizeMode: "contain",
  }
});