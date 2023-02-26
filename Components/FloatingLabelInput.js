import React, { Component } from 'react';

import {
  View,
  StatusBar,
  TextInput,
  Animated,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  UNSAFE_componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver:false
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const style = defaultStyles;
    const animatedLabelStyle = {
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [22, 9],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#888', '#888'],
      }),
      
    };
    return (
      <View style={{ paddingTop: 18, height:'100%',width:'82%', flexDirection:'row' }}>
        <Animated.Text style={[style.labelStyle,animatedLabelStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={[style.textInput,isFocused&&style.focusedTextInput]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
          selectionColor={style.selectionColor}
          underlineColorAndroid="transparent"
        />
        <View style={defaultStyles.iconStyle1} >
                      <Ionicons name={this.props.iconType} size={24} color="#4C6C93" onPress={this.props.onPress}/>
        </View>
      </View>
    );
  }
}

const defaultStyles = {
  labelStyle: {
    position: 'absolute',
    left: 3,
    letterSpacing:-0.24,
    color:'#545454',
    fontFamily: 'Poppins-Regular',
    fontStyle:'normal',
    
  },
  textInput: {
    fontSize:17,
    letterSpacing:-0.24,
    color:'black',
    fontFamily: 'Poppins-SemiBold',
    marginTop:12,
    height:'90%',
    width: '82%',
    },
    focusedTextInput: {

    },
    iconStyle1: {
      height: '100%',
      alignItems: 'center',
      paddingRight:12,
      paddingTop:3,
      width: '18%',
      alignSelf:'flex-end',
      marginRight:5
    },
    // selectionColor: 'red',
}