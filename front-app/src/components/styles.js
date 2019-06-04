import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
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