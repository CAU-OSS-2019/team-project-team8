import React, { Component } from "react";
import { Text, View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

/**
 * 메인페이지 -> 생방송목록
 * 구조
 * 헤더(로그인버튼, 프로필버튼, 방송시작버튼)
 * 내용 : Flatlist(썸네일,스트리머프로필사진,스트리머이름,방송제목)
 */
export default class MainTest extends Component {
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
          profile_url: "https://randomuser.me/api/portraits/thumb/men/20.jpg"
        },
        {
          name: "Khyahaha",
          id:"skkkaasdf@gmail.com",
          title: "If the image is larger than",
          thumbnail: require("../resources/thumbnail.jpg"),
          profile_url: "https://randomuser.me/api/portraits/thumb/women/1.jpg"
        },
        {
          name: "Cheese-king",
          id:"cheesds1@gmail.com",
          title: "With their width and",
          thumbnail: require("../resources/thumbnail.jpg"),
          profile_url: "https://randomuser.me/api/portraits/thumb/men/93.jpg"
        }
      ]
    };
  }
  _onPressProfile = () => {
    alert("Touched");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Header </Text>
        <FlatList
          style={{flex : 0.8}}
          data={this.state.streamingInfo}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={this._onPressProfile}>
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

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292D3E',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header : {
    flex : 0.1,
    fontFamily : "Cochin",
    fontWeight : 'bold',
    color :"white",
  },
  footer : {
    flex : 0.1,
    fontFamily : "Cochin",
    fontWeight : 'bold',
    color :"white",
  },
  thumbnail: {
    flex: 1,
    width: width,
    height: 230,
    resizeMode: "contain"
  }
});