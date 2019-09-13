import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

class BlinkImage extends Component{
  componentDidMount(){
    //Switch the state every second
    setInterval(()=>(
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
    ))),1000);
  }
  //state object
  state = {isShowingText: true};

  render(){
    if(!this.state.isShowingText){
      return null;
    }
    return (
      <View>
      <Text>{this.props.title}</Text>
      <Image source={this.props.img} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}
  export default class BlinkApp extends Component{
    render(){
      let pic = {
        uri: 'https://zennetwork.org/wp-content/uploads/2019/09/44541540-92b5-461d-8673-781d16c343ea-e1568412191642.jpg'
      };
      return(
        <View>
          <BlinkImage title='Marcellin' img={pic}/>
          <BlinkImage title='Wabo' img={pic}/>
          <BlinkImage title='Mwabo' img={pic}/>
          <BlinkImage title='Dabfox' img={pic}/>
        </View>
      );
    }
  }
