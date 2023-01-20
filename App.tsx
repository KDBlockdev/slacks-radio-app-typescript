import { Text, View, StyleSheet } from "react-native";
import * as React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/Components/Navigation/BottomNav";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#11113a",
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
  },
  componentBackground: {
    backgroundColor: "#CCCCFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  }
})