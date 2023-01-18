import { Text, View, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import ContactScreen from "./src/Components/Navbar/Contact";
// import ApplyScreen from "./src/Components/Navbar/Apply";
// import SupportScreen from "./src/Components/Navbar/Support";
// import HomeScreen from "./src/Components/Navbar/Home";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";

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
    <View style={styles.main}>
      <Text>APPPPP</Text>
    </View>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         tabBarLabel: "Home!",
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons name="home" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Contact"
    //       component={ContactScreen}
    //       options={{
    //         tabBarLabel: "Get in Touch",
    //         tabBarIcon: ({ color }) => (
    //           <AntDesign name="question" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Apply"
    //       component={ApplyScreen}
    //       options={{
    //         tabBarLabel: "Apply",
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons
    //             name="application-edit-outline"
    //             color={color}
    //             size={26}
    //           />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Support"
    //       component={SupportScreen}
    //       options={{
    //         tabBarLabel: "Support Us!",
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons
    //             name="cash-fast"
    //             color={color}
    //             size={26}
    //           />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

