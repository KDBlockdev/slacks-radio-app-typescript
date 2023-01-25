import React from 'react';
import { render } from 'react-native-testing-library';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from '../Components/Screens/Home';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('@mdi/react', () => 'Icon');
jest.mock('@mdi/js', () => ({
  mdiCassette: 'mdiCassette'
}));

describe('MyTabs', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<MyTabs />);
    expect(baseElement).toMatchSnapshot();
  });
});
