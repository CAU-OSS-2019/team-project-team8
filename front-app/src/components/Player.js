import {WebView} from 'react-native-webview';
import React, {Component} from 'react';


export default class Player extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <WebView 
                source = {{uri: 'https://www.youtube.com/watch?v=B5mYBT09I8U' }}
            />
        )
    }
}