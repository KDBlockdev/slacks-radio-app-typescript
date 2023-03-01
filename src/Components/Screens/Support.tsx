import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Linking } from "react-native";
import * as React from "react";
import { useState } from 'react';

interface PayPalDonateProps {
  email: string;
  amount: number;
}

const PayPalDonate = ({ email, amount }) => {
    const [donateUrl, setDonateUrl] = useState(`https://www.paypal.com/donate?hosted_button_id=ADX2PRR8X28CJ`);

    const handlePress = async () => {
      await Linking.openURL(donateUrl);
    };

    return (
      <View style={styles.supportPage}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../Images/SlacksTextWhite.png")} />
          </View>
        <View style={styles.donateText}>
          <Text>
            Slack’s is completely independent! We rely solely on subscriptions and donations. Please consider becoming a Slack’s Supporter.
          
          </Text>
        </View>
        <View style={styles.donateButtonContainer}>
          <TouchableOpacity style={styles.donateButton} onPress={handlePress}>
            <Text style={styles.donateButtonText}>Click here to Donate!</Text>
          </TouchableOpacity>
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
      flex: 1,
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
    },
    donateText: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#CCCCFF",
      padding: 10,
      flex: 1,
    },
    donateButtonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#CCCCFF',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    donateButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6b3d91',
      padding: 10,
      borderRadius: 20,
      width: '100%',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 0.5,
    },
    donateButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
});
