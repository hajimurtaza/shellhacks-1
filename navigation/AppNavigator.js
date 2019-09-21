import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignInScreen';
import DisabledScreen from '../screens/DisabledScreen';
import HelperScreen from '../screens/HelperScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    HomeScreen: HomeScreen,
    SplashScreen: SplashScreen,
    SignUpScreen: SignUpScreen,
    SignInScreen: SignInScreen,
    DisabledScreen: DisabledScreen,
    HelperScreen: HelperScreen
  }),
  {
    initialRouteName: 'SplashScreen',
  }
  
);
