import React, {Component} from 'react';
import {RtmpView} from 'react-native-rtmpview';
import {
    StyleSheet,
    NativeModules,
    NativeEventEmitter,
    AppRegistry,
    Text,
    Button,
    View
} from 'react-native';

export default class Player extends Component {
    constructor(props) {
        super(props)
        this.player = null;

        const RNRtmpEventManager = NativeModules.RNRtmpEventManager;

        if (!(typeof RNRtmpEventManager === "undefined")) {
            const RNRtmpEventManager = new NativeEventEmitter(
                NativeModules.RNRtmpEventManager
            );

            RNRtmpEventManager.addListener(
                "RNRtmpEvent",
                (data) => this.handleRNRtmpEvent(data)
            );
        }
        console.log("React Native Received: Just finished adding listeners");
    }

    handlePlaybackState(data) {
        console.log(
            "React Native Received PlaybackState " + data.nativeEvent["state"]
        );
    }

    handleLoadState(data) {
        console.log(
            "React Native Received LoadState " + data.nativeEvent["state"]
        );
        console.log(
            "React Native Received LoadState Qos " + JSON.stringify(data.nativeEvent["qos"])
        );
    }

    handleFirstVideoFrameRendered(data) {
        console.log(
            "React Native Received FirstVideoFrameRendered"
        );

        this.player.unmute();
    }

    handleBitrateRecalculated(data) {
        console.log(
            "React Native BitrateRecalculated " + JSON.stringify(data.nativeEvent["bitrate"])
        );
    }

    handleRNRtmpEvent(data) {
        console.log(
            "React Native Received RNRtmpEventManager " + JSON.stringify(data)
        );
    }

    componentDidMount() {
        this.player.initialize();
    }

    render() {
        return (
            <View style={styles.container}>
                <RtmpView
                    style={styles.player}
                    shouldMute={false}
                    ref={e => {
                        this.player = e;
                    }}
                    onPlaybackState={(data) => {
                        this.handlePlaybackState(data);
                    }}
                    onLoadState={(data) => {
                        this.handleLoadState(data);
                    }}
                    onFirstVideoFrameRendered={(data) => {
                        this.handleFirstVideoFrameRendered(data);
                    }}
                    onBitrateRecalculated={(data) => {
                        this.handleBitrateRecalculated(data);
                    }}
                    url="rtmp://220.70.24.63:1935/live/streaming"/>

                <View style={{marginTop: 10, width: "90%", flexDirection: "row", justifyContent: "space-around"}}>
                    <Button
                        onPress={() => {
                            this.player.pause()
                        }}
                        title="Pause"
                    />
                    <Button
                        onPress={() => {
                            this.player.play()
                        }}
                        title="Play"
                    />
                    <Button
                        onPress={() => {
                            this.player.mute()
                        }}
                        title="Mute"
                    />
                    <Button
                        onPress={() => {
                            this.player.unmute()
                        }}
                        title="Unmute"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    player: {
        width: '100%',
        height: '50%'
    }
});