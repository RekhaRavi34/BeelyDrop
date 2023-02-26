import React from "react";
import {  View, Image, StyleSheet, Text,TouchableOpacity, StatusBar} from "react-native";
import DropShadow from "react-native-drop-shadow";
const Welcome = () =>{
    return(
        <View style={styles.container}>
            <StatusBar  
                    backgroundColor = "rgba(252, 195, 19, 0.94);"  
                    barStyle = "light-content"  
                    hidden = {false}    
                    translucent = {true}  
                /> 
            <View style={styles.logoback}>
            <Image
            source={require('../assets/logo1.png')}
            style={styles.logo}/>
            </View>
            <Text style={styles.main}>BeelyDrop</Text>
            <Text style={styles.text1}>Loremy ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
            <DropShadow style={styles.shadowProp}>
            <TouchableOpacity style={styles.buttonContainer} >
               <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
            </DropShadow>
        </View>
    );
}
export default Welcome;

const styles= StyleSheet.create({
    container:{
        backgroundColor:"rgba(252, 195, 19, 0.94);",
        flex:1,        
    },
    logoback:{
        borderRadius: 33,
        backgroundColor:"black",
        width: 94,
        height: 94,
        paddingHorizontal:7,
        paddingTop: 11,
        paddingBottom: 5,
        marginTop:200,
        alignSelf:'center'
    },
    logo: {
        height: 78 ,
        width: 80
      },
    main:{
        color:"black",
        height: 60,
        fontSize:40,
        letterSpacing: -0.24,
        alignSelf:'center',
        marginTop:15,
        fontFamily:'Poppins-Bold',
    },
    text1:{
        color:"black",
        width: 319,
        height: 66,
        alignSelf:'center',
        justifyContent:'center',
        marginHorizontal:0,
        fontWeight: 400,
        fontSize: 17,
        textAlign:'center',
        marginTop:100,
        paddingHorizontal:10,
        fontFamily: 'Poppins-Regular',     
    },
    buttonContainer: {
        marginTop: 50,
        height: 57,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginHorizontal:28,
        
        // borderWidth: 1.5
      },
      shadowProp: {
        shadowColor: '#12345C',
        shadowOffset: {width: 2, height: 18},
        shadowOpacity: 0.40,
        shadowRadius: 7,
      },
      buttonText: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Poppins-Bold',
        paddingTop:2,
        letterSpacing:-0.24,
        height:27,
        width:116
      },

});