import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Sell from '../components/Sell';
import Profile from '../components/Profile';
import CustomTabNaviagtion from './CustomTabNaviagtion';
import Buy from '../components/Buy';


const Tab = createBottomTabNavigator();

const icons = {
  Home: 'home',
  Buy: 'star',
  Sell: 'star-three-points-outline',
  Profile: 'account',
};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        
      }}
      
      tabBar={props => <CustomTabNaviagtion {...props} icons={icons} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Buy" component={Buy} />
      <Tab.Screen name="Sell" component={Sell} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNav;
