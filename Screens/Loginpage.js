import React, { Component } from 'react';
import {  ScrollView,View, Image, StyleSheet, Text,TouchableOpacity, StatusBar, TextInput,Animated,} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DropShadow from "react-native-drop-shadow";
import FloatingLabelInput from '../Components/FloatingLabelInput'
import { useState, useEffect } from "react";

const Loginpage = () =>{
    const [passwordVisible,setPasswordVisible]=useState(true);
    const [text, setText] =useState('');
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
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
            <Text style={styles.text}>BeelyDrop</Text>
            
            <View style={styles.form}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.enter}>Enter your email and password</Text>
                <View style={styles.inputsec}>
                <View style={styles.inputContainer}>   
                    <View style={styles.iconStyle}>
                    <Image 
                    source={require('../assets/vector1.png')}
                    style={styles.vec1}/>
                    </View>
                    {/* <TextInput
                    placeholder='Username'
                    placeholderTextColor='#545454'
                    style={styles.textinput}/>  */}
                    
                    <FloatingLabelInput
                     label={'Username'}
                     value={username}
                     onChangeText={(text) => setUsername(text)}
                     
                  />
                  
                </View>
                
        
                <View style={styles.inputContainer}>   
                    <View style={styles.iconStyle}>
                    <Image 
                    source={require('../assets/vector2.png')}
                    style={styles.vec2}/>
                    </View>
                    {/* <TextInput
                    placeholder='Password'
                    placeholderTextColor='#545454'
                    secureTextEntry={passwordVisible}
                    style={styles.textinput}
                    />   */}
                    <FloatingLabelInput
                     label={'Password'}
                     value={password}
                     onChangeText={(text) => setPassword(text)}
                     secureTextEntry={passwordVisible}
                     onPress={() => setPasswordVisible(!passwordVisible)}
                     iconType={passwordVisible ? 'eye-off' : 'eye'}
                  />

                    {/* <View style={styles.iconStyle1} >
                      <Ionicons name={passwordVisible ? 'md-eye-off-outline' : 'eye'} size={25} color="#4C6C93" onPress={() => setPasswordVisible(!passwordVisible)}/>
                    </View>  */}
                </View>
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
                  <View style={{ width:'43.5%'}}>
                       <Text style={styles.label}>Remember me</Text>
                  </View>
                  <View style={styles.forgotview}>
                       <TouchableOpacity >
                           <Text style={styles.forgottext}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <DropShadow style={styles.shadowProp}>
                  <TouchableOpacity style={styles.buttonContainer} >
                     <Text style={styles.buttonText}>SIGN IN</Text>
                  </TouchableOpacity>
                </DropShadow>
                <TouchableOpacity style={styles.didnt} >
                           <Text style={styles.didnttext}>Didn't have an account?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1} >
                     <Text style={styles.buttonText1}>Create an Account</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    );
}
export default Loginpage;

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
        marginTop:85,
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
    text:{
        position: 'relative',
        marginTop:8,
        width:123,
        height:36,
        fontSize:24,
        letterSpacing:-0.24,
        color:'black',
        textAlign:'center',
        fontFamily: 'Poppins-SemiBold',
    },
    form:{
        marginTop:59,
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
        marginTop:10
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
        marginTop: 17
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
    textinput:{
        fontSize:18,
        fontFamily:'Poppins-Medium',
        width:'64%',
        paddingTop:20,
        height: '100%',
        alignSelf:'center',
        letterSpacing:-0.24,
        
    },
    iconStyle1: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '18%',
        alignSelf:'flex-end'
      },
    buttonContainer: {
        marginTop: 26,
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
      checkboxContainer: {
        flexDirection: 'row',
        marginTop:26,
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
      forgotview:{
        height:21,
        width:'50%',
        alignItems:'flex-end'   
      },
      forgottext:{
        fontSize:14,
        fontFamily:'Poppins-SemiBold',
        letterSpacing:-0.24,
        fontStyle:'normal',
        color:'#AD3D3D',
        height:21
      },
      didnt:{
        marginTop:30,
        alignItems:"center"
      },
      didnttext:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        letterSpacing:-0.24,
        fontStyle:'normal',
        color:'black',
        height:18
      },
      buttonContainer1: {
        marginTop: 19,
        height: 57,
        width:"100%",
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor:'#979797'
      },
      buttonText1: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Muli-Bold',
        letterSpacing:-0.24,
      },
    
});