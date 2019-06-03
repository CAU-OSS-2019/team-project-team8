import React, { Component } from "react";
import { Button, Text, View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity,TouchableHighlight,StatusBar, } from "react-native";
import { ListItem } from "react-native-elements";
import PusherModule from '../native-modules/PusherModule';
/**
 * 메인페이지 -> 생방송목록
 * 구조
 * 헤더(로그인버튼, 프로필버튼, 방송시작버튼)
 * 내용 : Flatlist(썸네일,스트리머프로필사진,스트리머이름,방송제목)
 */
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /** need fetch from server, hard-coded for test */
      streamingInfo: [
        {
          name: "John",
          id:"john123@gmail.com",
          title: "This may change the aspect ratio",
          thumbnail: require("../resources/thumbnail.jpg"),
          profile_url: "http://humanict.computercau.club/images/touxiang.jpg"
        }
        // {
        //   name: "Khyahaha",
        //   id:"skkkaasdf@gmail.com",
        //   title: "If the image is larger than",
        //   thumbnail: require("../resources/thumbnail.jpg"),
        //   profile_url: "https://randomuser.me/api/portraits/thumb/women/1.jpg"
        // },
        // {
        //   name: "Cheese-king",
        //   id:"cheesds1@gmail.com",
        //   title: "With their width and",
        //   thumbnail: require("../resources/thumbnail.jpg"),
        //   profile_url: "https://randomuser.me/api/portraits/thumb/men/93.jpg"
        // }
      ]
    };
  }

  static navigationOptions = {
    header : null,
  }

  _onPressProfile = () => {
    alert("Touched");
  };

  _onPressThumbnail = () => {
    this.props.navigation.navigate('PlayerScreen')
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={'#08192D'} />
        <Header sytle={styles.header} />
        <FlatList
          style={{flex : 0.8}}
          data={this.state.streamingInfo}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={this._onPressThumbnail}>
                <Image source={item.thumbnail} style={styles.thumbnail} />
              </TouchableOpacity>
              <ListItem
                leftAvatar={{
                  source: { uri: item.profile_url },
                  onPress: () => this._onPressProfile(),
                }}
                title={item.name}
                subtitle={item.title}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Text style={styles.footer}> Footer </Text>
      </View>
    );
  }
}

class Header extends Component{
  constructor(props) {
    super(props)
  }
  _onPressLiveStart = () => PusherModule.startPushStream("rtmp://220.70.24.63:1935/live/streaming");
  render() {
    return(
           <Button title="Live" onPress = {this._onPressLiveStart} color="#EE2C2C"/>

        )
  }
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header : {
    backgroundColor: '#08192D',
    width : width,
    flex : 0.1,
    alignItems : "flex-end",
    fontFamily : "Cochin",
    fontWeight : 'bold',
    color :"white",
  },
  footer : {
    backgroundColor: '#08192D',
    flex : 0.1,
    width : width,
    fontFamily : "Cochin",
    fontWeight : 'bold',
    color :"white",
  },
  thumbnail: {
    flex: 1,
    width: width,
    height: width * width / height,
    resizeMode: "contain"
  }
});
