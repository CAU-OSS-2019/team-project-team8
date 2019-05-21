import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import Main from './Main'

export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      id      : '',
      password: '',
    }
  }
  static navigationOptions = {
    header : null,
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onClickLogin = () => {
    this.props.navigation.navigate('MainScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.titleContainer}>
            <Text style={styles.title}> 8.8 </Text>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Id"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} underlayColor={'#3A3F58'} onPress={() => this.onClickLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} underlayColor={'#3A3F58'} onPress={() => this.onClickListener('restore_password')}>
            <Text style={{color:"#89DDFF"}}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} underlayColor={'#3A3F58'} onPress={() => this.onClickListener('register')}>
            <Text style={{color:"#89DDFF"}}>Register</Text>
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
    backgroundColor: '#292D3E',
  },

  titleContainer: {
    justifyContent : 'center',
    alignItems : 'center',
    padding : 30,
  },

  title : {
    fontFamily : 'Cochin',
    color : 'white',
    fontSize : 60,
    fontWeight : 'bold',
  },

  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#959DCB",
  },
  loginText: {
    color: 'white',
  }
});