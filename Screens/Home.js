import React, { Component } from 'react';
import {  ScrollView,View, Image, StyleSheet, Text,TouchableOpacity, StatusBar, TextInput,Animated,} from "react-native";
import { useState, useEffect } from "react";

const Home = () => {
    return(
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}></ScrollView>
    );
}
export default Home;

const styles= StyleSheet.create({});