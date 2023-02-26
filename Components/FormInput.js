import React from 'react';
import {View, TextInput, StyleSheet, Image, ImageBackground} from 'react-native';


const FormInputs = ({labelValue, placeholderText, img, ...rest}) =>{
    return(
        <View style={styles.inputContainer}>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:'white',
        width:319,
        height:69,
        borderWidth:1,
        borderColor: '#C4C4C4',
        borderRadius:16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17
    },

});

export default FormInputs;