import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
//this is the main class
export default class HelloWorld extends Component{
  render(){
    let pic = {
      uri: 'https://zennetwork.org/wp-content/uploads/2019/09/44541540-92b5-461d-8673-781d16c343ea-e1568412191642.jpg'
    };
    return(
    <View style ={{flex:1, justifyContent: "center", alignItems: "center"}} >
    <Text>Hello World from logic!</Text>
    <Image source={pic} style={{width: 193, height: 200}}/>
    </View>
      
);
}
}
