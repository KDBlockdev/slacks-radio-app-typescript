import { View, Text, StyleSheet } from "react-native";
import * as React from "react";

const ApplyScreen = () => {
    return (
        <View style={styles.bottomBar}>
            <Text>Apply Here!</Text>
        </View>
    )
}

export default ApplyScreen;

const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CCCCFF",
      },
  })