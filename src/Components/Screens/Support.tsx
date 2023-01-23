import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from "react-native";
import * as React from "react";
import { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';

interface PayPalDonateProps {
  email: string;
  amount: number;
}
  const PayPalDonate = ({ email, amount }) => {
    const [donateUrl, setDonateUrl] = useState(`https://www.paypal.com/donate?hosted_button_id=ADX2PRR8X28CJ`);
  
    const handlePress = async () => {
      await WebBrowser.openBrowserAsync(donateUrl);
    };
  
    return (
      <View>
        <View style={styles.componentBackground}>
      <Image style={styles.logo} source={require("../../Images/SlacksTextWhite.png")} />
        </View>
        <View style={styles.donateText}>
        <Text>Slack’s is completely independent!</Text>
<Text>We rely solely on subscriptions and donations.</Text>
<Text>Please consider becoming a Slack’s Supporter.</Text>
        </View>
<View style={styles.donateButton}>
        <Button onPress={handlePress} title="Click here to Donate!"/>
</View>
      </View>
    );
  };

  export default PayPalDonate;

  const styles = StyleSheet.create({
    supportPage:{
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#CCCCFF",
    },
    logo: {
      width: 400,
      height: 100,
      padding: 60,
      paddingHorizontal: 10,
      backgroundColor: "#CCCCFF",
      alignItems: "center",
      justifyContent: "center",
    },
    donateText: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#ffffff",
      position: 'relative',
           bottom:-200,
           left:0,
    },
    donateButton: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#ffffff",
      position: 'relative',
           bottom:-400,
           left:0,
    },
    componentBackground: {
      backgroundColor: "#CCCCFF",
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      borderRadius: 5,
    },
    })
  