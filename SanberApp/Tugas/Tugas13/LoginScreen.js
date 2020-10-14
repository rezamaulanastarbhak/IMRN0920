import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
        <KeyboardAvoidingView
        behavior = {Platform.OS == 'ios' ? "padding": 'height'}
        style={styles.container}>

        <ScrollView>      
            <View style={styles.container}>
            <Image source={require('./images/logo.png')} />
            <Text style={styles.login}>LogIn</Text>
            <View style={styles.inputView}>
                <Text style={styles.formtext}>Username/Email</Text>
                <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#80deea'"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
                <Text style={styles.formtext}>Password</Text>
                <TextInput  
                secureTextEntry = {true}
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#80deea'"
                onChangeText={text => this.setState({password:text})}/>
            </View>
            <View style={styles.kotaklogin}>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Lupa Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.TextBtn}>Masuk</Text>
                </TouchableOpacity>
                <Text style={styles.autotext}> atau </Text>
                <TouchableOpacity style={styles.loginReg}>
                    <Text style={styles.TextBtn}>Daftar</Text>
                </TouchableOpacity>
            </View>

        
            </View>
        </ScrollView>  
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop : 16,
      alignItems: 'center'
    },
    login:{
      fontSize : 24,
      marginTop : 63,
      textAlign:'center',
      color: '#003366',
      marginVertical: 20
    },
    formtext:{
      color:'#003366',
    },
    autotext:{
        fontSize: 20,
        color: '#3EC6FF',
        textAlign:'center',
        marginBottom: 20
    },
    inputView:{
      width:"80%",
      backgroundColor:"white",
      alignContent: 'center',
      marginVertical : 5,
      marginHorizontal:30,
    },
    inputText:{
      height:50,
      borderColor:"#003366",
      padding: 10,
      borderRadius:10,
      borderWidth:1
    },
    forgot:{
      color:"#00838f",
      fontSize:11, 
      textAlign:'center',
      marginBottom: 10
    },
    loginBtn:{
      width:140,
      backgroundColor:"#64b5f6",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal:30,
      marginBottom:10,
      padding:10
    },
    TextBtn:{
      color:"white",
      fontSize:16
    },
    loginReg:{
        width:140,
        backgroundColor:"#003366",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginBottom:10,
        padding:10
    }
  });