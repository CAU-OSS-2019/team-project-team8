import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './src/components/Login';
import Main from './src/components/Main';
import Player from './src/components/Player';
import Registeration from './src/components/Registeration';

const AppNavigator = createStackNavigator(
    {
        LoginScreen: Login,
        MainScreen: Main,
        PlayerScreen: Player,
        RegisterationScreen : Registeration,
    },
    {
        initialRouteName: 'LoginScreen'
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

