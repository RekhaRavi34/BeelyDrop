import React, { Component } from 'react';
import {  ScrollView,View, Image, StyleSheet, Text,TouchableOpacity, StatusBar, TextInput,Animated,} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DropShadow from "react-native-drop-shadow";
import FloatingLabelInput from '../Components/FloatingLabelInput'
import { useState, useEffect } from "react";
const Signup = () => {
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirm, setConfirm] =useState('');
    const [tickBox, setTickbox] =useState('');
    return(
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}>
            <StatusBar  
                    backgroundColor = "white"  
                    barStyle = "dark-content"  
                    hidden = {false}    
                    translucent = {true}  
                />
            <View style={styles.logoback}>
                 <Image source={require('../assets/logo2.png')}
                  style={styles.logo}/>
            </View>
            <View style={styles.form}>
                  <Text style={styles.login}>Create Account</Text>
                  <Text style={styles.enter}>Complete form below to continue shopping</Text>
                  <View style={styles.inputsec}>
                      <View style={styles.inputContainer}>
                      <View style={styles.iconStyle}>
                      <Image 
                         source={require('../assets/vector1.png')}
                         style={styles.vec1}/>
                      </View>
                      <FloatingLabelInput
                         label={'Full Name'}
                         value={username}
                         onChangeText={(text) => setUsername(text)} />
                      </View>
                      <View style={styles.inputContainer}>
                      <View style={styles.iconStyle}>
                      <Image 
                         source={require('../assets/vector3.png')}
                         style={styles.vec3}/>
                      </View>
                      <FloatingLabelInput
                         label={'Email'}
                         value={email}
                         onChangeText={(text) => setEmail(text)} />
                      </View>
                      <View style={styles.inputContainer}>
                      <View style={styles.iconStyle}>
                      <Image 
                         source={require('../assets/vector2.png')}
                         style={styles.vec2}/>
                      </View>
                      <FloatingLabelInput
                         label={'Password'}
                         value={password}
                         onChangeText={(text) => setPassword(text)} />
                      </View>
                      <View style={styles.inputContainer}>
                      <View style={styles.iconStyle}>
                      <Image 
                         source={require('../assets/vector2.png')}
                         style={styles.vec2}/>
                      </View>
                      <FloatingLabelInput
                         label={'Re-type Password'}
                         value={confirm}
                         onChangeText={(text) => setConfirm(text)} />
                      </View>
                      <View style={styles.checkboxContainer}>
                      <View style={styles.checkbox}>
                      <TouchableOpacity
                            onPress={() =>
                              setTickbox(!tickBox)}>
                            <MaterialCommunityIcons
                                name={
                                    tickBox ? "check-bold" : "blank"
                                }
                                size={17}
                                color="#4C6C93"
                                style={{alignSelf:'center'}}
                                />
                      </TouchableOpacity>
                      </View>
                      <View style={{ width:'93.5%'}}>
                       <Text style={styles.label}>Accept terms & conditions</Text>
                      </View>
                      </View>
                      <DropShadow style={styles.shadowProp}>
                         <TouchableOpacity style={styles.buttonContainer} >
                             <Text style={styles.buttonText}>SIGN IN</Text>
                         </TouchableOpacity>
                      </DropShadow>
                      <View style={styles.already}>
                      <Text style={styles.alreadytext}>Already have an account?</Text>
                      <TouchableOpacity>
                        <Text style={styles.sign}>Sign In here</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
            </View>
        </ScrollView>
    );
}
export default Signup;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        // justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    logoback:{
        backgroundColor:"#FCC313",
        borderRadius: 23,
        width: 68,
        height:68,
        marginTop:66,
        alignItems: 'center',
    },
    logo:{
        width:71,
        height:62,
        paddingBottom:3,
        paddingTop:3,
        paddingLeft:1,
        paddingRight:2    
    },
    form:{
        marginTop:43,
        alignSelf:'center',    
        width:"85%",
    },
    login:{
        height: 36,
        color:'black',
        fontSize:24,
        letterSpacing:-0.24,
        fontFamily: 'Poppins-Medium',
        fontStyle:'normal'
    },
    enter:{
        height: 21,
        fontSize:14,
        fontFamily: 'Poppins-Regular',
        letterSpacing:-0.24,
        color:'#545454',
        marginTop:4
    },
    inputsec:{
        marginTop:5
    },
    inputContainer:{
        backgroundColor:'white',
        width:"100%",
        height:69,
        borderWidth:1,
        borderColor: '#C4C4C4',
        borderRadius:16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '18%',  
    },

    vec1:{
        height:24.5,
        width:24.6,   
    },
    vec2:{
        height:24,
        width:18,
    },
    vec3:{
        height:21.8,
        width:20.8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop:22,
        width:"100%"
    },
    checkbox:{
        borderWidth:2,
        height:22,
        width:"6.5%",
        borderRadius:8,
        borderColor:"#4C6C93",
    },
    label: {
        fontSize:14,
        fontFamily:'Poppins-Regular',
        letterSpacing:-0.24,
        fontStyle:'normal',
        color:'#545454',
        height:21,
        marginLeft:10
    },
    buttonContainer: {
        marginTop: 28,
        height: 57,
        width:"100%",
        backgroundColor:'#FCC313',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        
        
        // borderWidth: 1.5
      },
      shadowProp: {
        shadowColor: '#12345C',
        shadowOffset: {width: 2, height: 14},
        shadowOpacity: 0.2,
        shadowRadius: 7,
      },
      buttonText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Poppins-Bold',
        paddingTop:2,
        letterSpacing:-0.24,
        height:27,
        fontStyle:'normal'
    },
    already:{
        flexDirection: 'row',
        marginTop:22,
        width:"100%",
        justifyContent:'center',
        
    },
    alreadytext:{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        letterSpacing:-0.24,
        fontStyle:'normal',
        color:'black',
        height:21
    },
    sign:{
        fontSize:14,
        fontFamily:'Poppins-MEdium',
        letterSpacing:-0.24,
        fontStyle:'normal',
        color:'#4C6C93',
        height:21,
        marginLeft:4
    }

});