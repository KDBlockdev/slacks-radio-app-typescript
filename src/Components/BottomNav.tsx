import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from './Navbar/Home';
import ApplyScreen from './Navbar/Apply';
import SupportScreen from './Navbar/Support';
import ContactScreen from './Navbar/Contact';
import Chat from './Navbar/Chat'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import PayPalDonate from './Navbar/Support';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: "Home",
        tabBarIcon: ( ) => 
          <MaterialCommunityIcons name="home" size={26} />
      }} />
        <Tab.Screen name="Contact" component={ContactScreen} options={{
        title: "Contact Us!",
        tabBarIcon: ( ) => 
        <AntDesign name="question" size={26} />
      }} />
       <Tab.Screen name="Apply" component={ApplyScreen} options={{
        title: "Apply Here!",
        tabBarIcon: () => 
        <MaterialCommunityIcons
        name="application-edit-outline"
        size={26}
      />
      }} />
      <Tab.Screen name="Support Us" component={PayPalDonate} options={{
        title: "Support Us!",
        tabBarIcon: ( ) => (
          <MaterialCommunityIcons
                name="cash-fast"
                size={26}
              />
        )
      }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        title: "Chat",
        tabBarIcon: ( ) => (
          <Ionicons
                name="chatbubbles-outline"
                size={26}
              />
        )
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs;

<PayPalDonate email="example@example.com" amount={10} />