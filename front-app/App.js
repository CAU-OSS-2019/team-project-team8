import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './src/components/Login';
import Main from './src/components/Main';

const AppNavigator = createStackNavigator(
  {
    LoginScreen : Login,
    MainScreen : Main,
  },
  {
    initialRouteName : 'LoginScreen'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

