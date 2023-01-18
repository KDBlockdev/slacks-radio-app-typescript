import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Navbar/Home';
import ApplyScreen from './Navbar/Apply';
import SupportScreen from './Navbar/Support';
import ContactScreen from './Navbar/Contact';
import ChatScreen from './Navbar/Chat';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: "Home!",
        tabBarIcon: ( ) => 
          <MaterialCommunityIcons name="home" size={26} />
      }} />
        <Tab.Screen name="Contact" component={ContactScreen} options={{
        title: "Contact Us!",
        tabBarIcon: ( ) => 
        <AntDesign name="question" size={26} />
      }} />
       <Tab.Screen name="Apply" component={ContactScreen} options={{
        title: "Apply Here!",
        tabBarIcon: () => 
        <MaterialCommunityIcons
        name="application-edit-outline"
        size={26}
      />
      }} />
      <Tab.Screen name="Support Us" component={ContactScreen} options={{
        title: "Support Us!",
        tabBarIcon: ( ) => (
          <MaterialCommunityIcons
                name="cash-fast"
                size={26}
              />
        )
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;