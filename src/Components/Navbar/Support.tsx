import { View, Text, StyleSheet } from "react-native";
import * as React from "react";

const styles = StyleSheet.create({
  bottomBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCCCFF",
  }
  })

const SupportScreen = () => {
  return (
    <View style={styles.bottomBar}>
      <Text>Show Support!</Text>
    </View>
  );
};

export default SupportScreen;
