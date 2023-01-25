import { View, Text, StyleSheet, Linking } from "react-native";
import * as React from "react";

const ContactScreen = () => {
const emailLink = "mailto:slacksradio@pm.me";

return (
    <View style={styles.contactScreen}>
        <Text style={styles.text}>Please direct all inquiries including show applicaitons to</Text>
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
text: {
textAlign: 'center',
fontSize: 18,
fontWeight: 'bold',
}
});