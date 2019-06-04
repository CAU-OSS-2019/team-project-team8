import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    StatusBar,
    // Platform,
    // PermissionsAndroid
} from 'react-native';

import styles from './styles';

export default class Login extends Component {

    constructor(props) {
        super(props);
        state = {
            id: '',
            password: '',
        }
    }

    static navigationOptions = {
        header: null,
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    onClickLogin = () => {
        this.props.navigation.navigate('MainScreen')
    }

    onClickRegisteration = () => {
        this.props.navigation.navigate('RegisterationScreen')
    }

    render() {
        return (

            <View style={styles.container}>
             <StatusBar backgroundColor={'#778BD9'} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Live8 </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'http://humanict.computercau.club/images/mail.png'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="ID"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'http://humanict.computercau.club/images/key.png'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} underlayColor={'#778BD9'}
                                    onPress={() => this.onClickLogin()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} underlayColor={'#778BD9'}
                                    onPress={() => this.onClickListener('restore_password')}>
                    <Text style={{color: "#FFFAFA"}}>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} underlayColor={'#778BD9'} onPress={() => this.onClickRegisteration()}>
                    <Text style={{color: "#FFFAFA"}}>Register</Text>
                </TouchableHighlight>
            </View>

        );
    }
}

