import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Navbar/Home';
import ApplyScreen from './Navbar/Apply';
import SupportScreen from './Navbar/Support';
import ContactScreen from './Navbar/Contact';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Apply" component={ApplyScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;