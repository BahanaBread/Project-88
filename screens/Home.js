import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Home Screen!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Spacecrafts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Star Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Daily Pictures</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    title:{
    color:"black",
    textAlign:"center",
    justifyContent:"center",
    fontSize:40,
    fontWeight:"bold",    
    },

    button:{
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
    },

    buttonText:{
    color:"pink",
    textAlign:"center",
    justifyContent:"center"
    }
})