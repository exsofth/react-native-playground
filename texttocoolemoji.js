import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class TranslateTextToCoolEmoji extends Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render(){
    return(
      <View style={{padding:9}}>
        <TextInput
          style={{height: 40, borderBottomWidth: 1}}
          placeholder="Type here the text to translate :-)"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding:9, fontSize:26}}>
          {this.state.text.split(' ').map((word) => word && '😎').join(' ')}
        </Text>
      </View>
    )
  }
}

