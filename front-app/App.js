import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login';
import Main from './src/components/Main'


export default class App extends Component {
  render() {
    return (
      <Main />
      //<Login />
    );
  }
}

