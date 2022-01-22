import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

//Defining the style here
//Style
const styles = StyleSheet.create(
  {
    blue: {
      color: 'blue',
      fontSize: 20,
      fontWeight: 'bold'
    },

    red:{
      color: 'red'
    }
  }
);
export default class FlexDimensionsBasics extends Component{
  render(){
    return(
      <View style={{flex:1, flexDirection:'row'}}>
        <View style={{flex:1, backgroundColor:'red'}}/>
        <View style={{flex:2, backgroundColor:'yellow'}}/>
        <View style={{flex:3, backgroundColor:'blue'}}/>
        <View style={{flex:2, backgroundColor:'black'}}/>
        <View style={{flex:1, backgroundColor:'green'}}/>
      </View>
    );
  }
}
