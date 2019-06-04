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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#778BD9',
    },

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },

    title: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
    },

    inputContainer: {
        borderBottomColor: '#81C7D4',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#A9C8F6",
    },
    loginText: {
        color: 'white',
    }
});

