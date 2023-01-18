import { View, Text, StyleSheet, Image } from "react-native";
import * as React from "react";

const styles = StyleSheet.create({
  componentBackground: {
    backgroundColor: "#CCCCFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
})

const ChatScreen = () => {
  return (
    <View style={styles.componentBackground}>
     <Text>Chat</Text>
    </View>
  );
};

export default ChatScreen;