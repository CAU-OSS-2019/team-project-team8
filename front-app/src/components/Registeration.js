import React, {Component} from 'react';
import {Text, View, TextInput, Image, TouchableHighlight，StatusBar,} from 'react-native';
import styles from './styles';

export default class Resigteration extends Component {

    constructor(props) {
        super(props);
        state = {
            id : '',
            password : '',
            nickname : '',
            name : '',
        }
    }

    static navigationOptions = {
        header : null,
    }

    onClickSubmitButton = () => {
        alert('Submit');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign up</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'http://humanict.computercau.club/images/mail.png'}}/>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="ID"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={(id)=>this.setState({id})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'http://humanict.computercau.club/images/key.png'}}/>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(password)=>this.setState({password})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Name"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(name)=>this.setState({name})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Nickname"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(nickname)=>this.setState({nickname})}
                    />
                </View>


                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} underlayColor={'#778BD9'} onPress={() => this.onClickSubmitButton()}>
                    <Text style={{color: "#FFFAFA"}}>Submit</Text>
                </TouchableHighlight>
            </View>
            
        )
    }
}

