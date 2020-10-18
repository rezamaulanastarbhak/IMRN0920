import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>
                        Welcome Back
                    </Text>
                    <Text>
                        Sign up to continue
                    </Text>
                </View>
                <View style={styles.kotak}>

                    <View style={styles.kotakitem}>
                        <View style={styles.labelkotak}>
                            <Text style={styles.textkotak}>Email</Text>
                        </View>
                        <View style={styles.valuekotak}>
                            <Text style={styles.valuekotaktext}>shakibulislam402@gmail.com</Text>
                        </View>
                    </View>

                    <View style={styles.kotakitem}>
                        <View style={styles.labelkotak}>
                            <Text style={styles.textkotak}>Password</Text>
                        </View>
                        <View style={styles.valuekotak}>
                            <Text style={styles.valuekotaktext}>* * * * * * * * * * * * </Text>
                        </View>
                    </View>
                    <View style={styles.kotakitem}>
                        <View style={styles.kotaksign}>
                            <Text style={styles.textkotaksign}>Sign In</Text>
                        </View>
                        {/* <View style={styles.footerkotak}>
                            <Text style={styles.valuefooter}>Already have an account?</Text>
                        </View> */}
                    </View>

                    {/* <Text>coba</Text> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    welcome: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 45,
        paddingTop: 86,
        // alignItems: 'flex-start',
    },
    welcomeText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 37,
        /* identical to box height */
        // textAlign: 'center',
        color: '#0C0423'
    },
    textkotak: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        /* identical to box height */


        color: '#4D4D4D',
    },
    valuekotaktext: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 18,
    },
    valuekotak: {
        borderBottomColor: '#E6EAEE',
        borderBottomWidth: 2,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        // h?eight:34,
        // backgroundColor: '#E6EAEE',
    },
    kotak: {
        // position: 'absolute',
        height: 500,
        width: 318,
        left: '7.73%',
        right: '3.86%',
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 11,
        paddingTop: 25,
    },
    kotakitem: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    kotaksign: {
        position: 'absolute',
        height: 50,
        width: 318,
        left: 0,
        top: 0,
        backgroundColor: '#F77866',
        borderRadius: 6
    },

    textkotaksign: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
        // justifyContent: 'center',
        color: '#FFFFFF',
        // flexDirection: 'row',
    },
});
