import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from '../components/Payment';
import Invoice from '../components/Invoice';
import Splash from '../components/Auth/Splash';
import Onboard from '../components/Auth/Onboard';
import Login from '../components/Auth/Login';
import AdditionalDetails from '../components/Auth/AdditionalDetails';
import Otp from '../components/Auth/Otp';
import TabNav from './TabNav';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, presentation: 'transparentModal'}}>
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="AdditionalDetails" component={AdditionalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
