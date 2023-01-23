import { View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";
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
      <View style={styles.supportPage}>
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
    donateText: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#ffffff",
      position: 'relative',
           bottom:-400,
           left:0,
    },
    donateButton: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#ffffff",
      position: 'relative',
           bottom:-580,
           left:0,
    }
    })
  