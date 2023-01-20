import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from "../Screens/Home"
import ApplyScreen from '../Screens/Apply';
import ContactScreen from '../Screens/Contact';
import Chat from '../Screens/Chat'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import PayPalDonate from '../Screens/Support';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: "Home",
        tabBarIcon: ( ) => 
          <MaterialCommunityIcons name="home" size={26} 
          style={{ backgroundColor: '#CCCCFF'}}/>
      }} 
      />
        <Tab.Screen name="Contact" component={ContactScreen} options={{
        title: "Contact",
        tabBarIcon: ( ) => 
        <AntDesign name="question" size={26} 
        style={{ backgroundColor: '#CCCCFF'}}/>
      }} />
       <Tab.Screen name="Apply" component={ApplyScreen} options={{
        title: "Apply",
        tabBarIcon: () => 
        <MaterialCommunityIcons
        name="application-edit-outline"
        size={26}
        style={{ backgroundColor: '#CCCCFF'}}
      />
      }} />
      <Tab.Screen name="Support" component={PayPalDonate} options={{
        title: "Support",
        tabBarIcon: ( ) => (
          <MaterialCommunityIcons
          name="cash-fast"
          size={26}
           style={{ backgroundColor: '#CCCCFF'}}
              />
        )
      }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        title: "Chat",
        tabBarIcon: ( ) => (
          <Ionicons
                name="chatbubbles-outline"
                size={26}
                style={{ backgroundColor: '#CCCCFF'}}
              />
        )
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs;

<PayPalDonate email="example@example.com" amount={10} />