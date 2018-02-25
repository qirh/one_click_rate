
import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default class ratingApp extends Component {

  renderButton() {
    const buttons = [
      {text: 'button 1', pic: './assets/star.png', action: () => console.log('pressed button 1')},
      {text: 'button 2', pic: './assets/star.png', action: () => console.log('pressed button 2')},
      {text: 'button 3', pic: './assets/star.png', action: () => console.log('pressed button 3')},
      {text: 'button 4', pic: './assets/star.png', action: () => console.log('pressed button 4')},
      {text: 'button 5', pic: './assets/star.png', action: () => console.log('pressed button 5')}
    ];
    const renderedButtons =  buttons.map(b => {
      return <TouchableOpacity key={b.text} title={b.text} onPress={b.action}><Image source={require('./assets/star.png')} style={{height:60,width:60}}/></TouchableOpacity>;});

    return renderedButtons;
  }

  render() {

    return (
      //Base Background
      <ImageBackground source={require("./assets/materialBack.jpg")} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Store Name Here</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <Image source={require("./assets/placeholder.jpg")} style={styles.previewImg}/>
        </View>
        <View style={styles.stars}>
          {this.renderButton()}
        </View>
        <Button onPress={()=>{
          RNGooglePlaces.openPlacePickerModal({
            latitude: 53.544389,
            longitude: -113.490927,
            radius: 0.01 // 10 meters
          })
            .then((place) => {
            console.log(place);
            })
            .catch(error => console.log(error.message));
        }}
        title="test"/>
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
