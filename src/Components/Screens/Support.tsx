import { View, Text, StyleSheet, TouchableOpacity, Button, Image, Platform, Linking } from "react-native";
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
        <View style={styles.componentBackground}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../Images/SlacksTextWhite.png")} />
          </View>
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
    logoContainer: {
      width: '100%',
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: '80%',
      height: Platform.OS === 'ios' ? '30%' : '40%',
      resizeMode: "contain",
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
           ...Platform.select({
            ios: {
              bottom: -400,
              left: 0,
            },
            android: {
              bottom: -350,
              left: 20,
              },
              }),
              },
              componentBackground: {
              backgroundColor: "#CCCCFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
              borderRadius: 5,
              },
              });
