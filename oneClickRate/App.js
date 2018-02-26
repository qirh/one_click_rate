
import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default class ratingApp extends Component {


  constructor(){
    super();
    this.state = {
      counter: 0,
      num: 0
    }
  }

  renderButton() {
    const buttons = [
      {text: 'button 1', pic: './assets/star.png', action: () => console.log('pressed button 0')},
      {text: 'button 2', pic: './assets/star.png', action: () => console.log('pressed button 1')},
      {text: 'button 3', pic: './assets/star.png', action: () => console.log('pressed button 2')},
      {text: 'button 4', pic: './assets/star.png', action: () => console.log('pressed button 3')},
      {text: 'button 5', pic: './assets/star.png', action: () => console.log('pressed button 4')}
    ];
    const renderedButtons =  buttons.map(b => {
      return <TouchableOpacity key={b.text} title={b.text} onPress={b.action}><Image source={require('./assets/star.png')} style={{height:60,width:60}}/></TouchableOpacity>;});
    return renderedButtons;
  }
  renderTitle(num) {
    const renderedTitle = <View style={styles.header}><Text style={styles.headerText}>{shops[num].name}</Text></View>;
    return renderedTitle;
  }
  renderPic(num) {
    const renderedPic = <View style={{alignItems:"center"}}><Image style={styles.previewImg} source={shops[num].pic}/></View>;
    return renderedPic;
  }

  updateCounters(){
    this.setState({counter: this.state.counter + 1,
                    num: this.state.counter % 5});
  }

  render() {
    var counter = 0;
    var num = 0;
    return (
      //Base Background
      <ImageBackground source={require("./assets/materialBack.jpg")} style={styles.background}>
        {this.renderTitle(this.state.num)}
        {this.renderPic(this.state.num)}

        <TouchableOpacity title="Change Device Location" style={{flex:0,flexDirection:'row',justifyContent:'center'}} onPress={() =>
          { console.log("here --> " + this.state.num);
            this.updateCounters();
          }
        }><Image source={require('./assets/mapspic.png')} style={{height:50,width:50}}/></TouchableOpacity>
        <View style={styles.stars}>
          {this.renderButton()}
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

    background: {
      flex:1,
      flexDirection:"column",
      backgroundColor:"blue",
      justifyContent:"space-between",
    },

    header: {
      alignItems:"center",
      marginTop:75,
    },

    headerText: {
      fontSize:42,
      color:"#FFFFFF",
      textAlign:"center",
    },

    previewImg: {
      height:250,
      width:250,
      borderRadius:125,
      borderWidth:10,
      borderColor:"#DCDCDC",
    },

    stars: {
      flex:0,
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:75,
      marginLeft:15,
      marginRight:15,
    },

    starsDimensions: {
      height: 60,
      width:60,
    },
});

const shops = [
  {name: 'Walmart', pic: require("./assets/shops/walmart.jpg"), action: () => console.log('pressed shop 0')},
  {name: 'HEB', pic: require("./assets/shops/heb.jpg"), action: () => console.log('pressed shop 1')},
  {name: 'Trader Joe\'s', pic: require("./assets/shops/trader.jpg"), action: () => console.log('pressed shop 2')},
  {name: 'Wegmans', pic: require("./assets/shops/wegmans.jpg"), action: () => console.log('pressed shop 3')},
  {name: 'Hyper Panda', pic: require("./assets/shops/panda.jpg"), action: () => console.log('pressed shop 4')}
];
