import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "react-native-elements";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url =
      "https://randomuser.me/api/?seed=${seed}&page=${page}&results=20";
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  _onPressProfile = () => {
    alert("Fuck you");
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={{color:"white"}}>Header : Need login button, start live-streaming, profile, etc</Text>
      </View>
    )
  }

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={{color:"white"}}>Footer : Need other func,</Text>
      </View>
    )
  }

  render() {
    return (
      <View sytle={styles.container}>
        
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ 
                source: { uri: item.picture.thumbnail },
                onPress: ()=> this._onPressProfile()
              }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={item=>item.email}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />

      </View>
    );
  }
}



class Thumbnail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}'s live</Text>
        <Image
          style={styles.thumbnail}
          source={require("../resources/thumbnail.jpg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292D3E"
  },
  header : {
    flex : 1,
    justifyContent : "center",
    backgroundColor : "#292D3E",
  },
  footer : {
    flex : 1,
    justifyContent : "center",
    backgroundColor : "#292D3E",
  },

  thumbnail: {
    
  }
});
