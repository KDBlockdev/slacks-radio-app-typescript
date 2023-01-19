import { Text, View, StyleSheet } from "react-native";
import * as React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/Components/BottomNav";
  
const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

