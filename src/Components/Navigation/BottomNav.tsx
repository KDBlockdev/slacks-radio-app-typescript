import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from "../Screens/Home"
import ArchiveScreen from '../Screens/Archive';
import ContactScreen from '../Screens/Contact';
import Chat from '../Screens/Chat'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import PayPalDonate from '../Screens/Support';
import Icon from '@mdi/react';
import { mdiCassette } from '@mdi/js';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: "Home",
        tabBarIcon: ( ) => 
          <MaterialCommunityIcons name="home" size={30} 
          style={{ backgroundColor: '#ffffff'}}
          />,
          headerShown: false
      }} 
      />
        <Tab.Screen name="Contact" component={ContactScreen} options={{
        title: "Contact",
        tabBarIcon: ( ) => 
        <MaterialCommunityIcons name="saxophone" size={30} 
        style={{ backgroundColor: '#ffffff'}}/>,
        headerShown: false
      }} />
       <Tab.Screen name="Archive" component={ArchiveScreen} options={{
        title: "Archive",
        tabBarIcon: () => 
        <MaterialCommunityIcons
        name="cassette"
        size={30}
        style={{ backgroundColor: '#ffffff'}}
      />,
      headerShown: false
      }} />
      <Tab.Screen name="Support" component={PayPalDonate} options={{
        title: "Support",
        tabBarIcon: ( ) => (
          <MaterialCommunityIcons
          name="cash-fast"
          size={30}
          style={{ backgroundColor: '#ffffff'}}
              />
        ),
        headerShown: false
      }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        title: "Chat",
        tabBarIcon: ( ) => (
          <Ionicons
                name="chatbubbles-outline"
                size={30}
                style={{ backgroundColor: '#ffffff'}}
              />
        ),
        headerShown: false
      }} />
      <Tab.Screen name="Shop" component={Shop} options={{
        title: "Shop",
        tabBarIcon: ( ) => (
          <Ionicons
                name="chatbubbles-outline"
                size={30}
                style={{ backgroundColor: '#ffffff'}}
              />
        ),
        headerShown: false
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs;





