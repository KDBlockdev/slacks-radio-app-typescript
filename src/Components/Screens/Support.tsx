import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";
import { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';

interface PayPalDonateProps {
  email: string;
  amount: number;
}

const styles = StyleSheet.create({
  bottomBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCCCFF",
  }
  })

  const PayPalDonate = ({ email, amount }) => {
    const [donateUrl, setDonateUrl] = useState(`https://www.paypal.com/donate?hosted_button_id=ADX2PRR8X28CJ`);
  
    const handlePress = async () => {
      await WebBrowser.openBrowserAsync(donateUrl);
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text>Slack’s is completely independent!</Text>
<Text>We rely solely on subscriptions and donations.</Text>
<Text>Please consider becoming a Slack’s Supporter.</Text>
        <Text>Click here to Donate!</Text>
      </TouchableOpacity>
    );
  };

  export default PayPalDonate;