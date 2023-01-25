import React from 'react';
import { shallow } from 'enzyme';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import HomeScreen from "../Components/Screens/Home";
import RadioStream from '../Components/MainScreen/RadioStream';

describe('HomeScreen', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<HomeScreen />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SafeAreaView', () => {
    expect(wrapper.find(SafeAreaView)).toHaveLength(1);
  });

  it('should render a logo container and logo', () => {
    expect(wrapper.find(View).at(1).props().style).toEqual(styles.logoContainer);
    expect(wrapper.find(Image).props().style).toEqual(styles.logo);
    expect(wrapper.find(Image).props().source).toEqual(require("../../Images/SlacksTextWhite.png"));
  });

  it('should render a play/stop container and RadioStream component', () => {
    expect(wrapper.find(View).at(2).props().style).toEqual(styles.componentBackground);
    expect(wrapper.find(View).at(3).props().style).toEqual(styles.playStopContainer);
    expect(wrapper.find(RadioStream)).toHaveLength(1);
  });

  it('should render a listen live text', () => {
    expect(wrapper.find(Text).props().style).toEqual(styles.listenLive);
    expect(wrapper.find(Text).text()).toEqual('Listen Live');
  });
});
