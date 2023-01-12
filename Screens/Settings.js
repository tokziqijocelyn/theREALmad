import React, { useState } from "react";
import { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Switch } from 'react-native';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from '@expo/vector-icons'

const musicName = [ 'Forest','Waves', 'Rain','Birds'];


const App = () => {

  const [SelectMusic, SetSelectMusic] = React.useState(musicName[0]);


  const NextPress = () => {
    if (SelectMusic.id !== 4) {
      let temp = musicName.find((c) => c.id === SelectMusic.id + 1);
      if (temp) {
        SetSelectMusic(temp);
      }
    }
  };

  const PrevPress = () => {
    if (SelectMusic.id !== 1) {
      let temp = musicName.find((c) => c.id === SelectMusic.id - 1);
      if (temp) {
        SetSelectMusic(temp);
      }
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <MaterialCommunityIcons name="weather-night" size={35} color={"black"} style={styles.icon1}  />
      <MaterialCommunityIcons name="bell-badge" size={30} color={"black"}  />
      <Text style={styles.title1}>Dark Mode</Text>
      <Text style={styles.title2} >Notifications</Text>
      <Switch
        style={styles.switch1}
        trackColor={{ false: "#2A0052", true: "#2A0052" }}
        thumbColor= "#E9DCFF" 
        activeThumbColor= "#E9DCFF"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
      <Switch
        style={styles.switch2}
        trackColor={{ false: "#2A0052", true: "#2A0052" }}
        thumbColor= "#E9DCFF"
        activeThumbColor= "#E9DCFF"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Ionicons name="musical-notes" size={32} color="black"  />
      <Text style={styles.title3} >Music</Text>
      <AntDesign
          name="caretleft"
          size={15}
          color="black"
          style={styles.icon4}
          onPress={() => PrevPress()}
        />

        <AntDesign
          name="caretright"
          size={15}
          color="black"
          style={styles.icon5}
          onPress={() => NextPress()}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: "space-evenly",
    backgroundColor:"#ffffff",
    
  },
  container2 :{
    backgroundColor:"blue",
    paddingLeft:50,
    
    
  },
  icon1:{
    
    
    
  },
  icon2:{
    height: 0,
    position:'absolute',
    top:-160,
    left:53
  },
  title1:{
    position:"absolute",
    top:8,
    paddingLeft:110,
    fontSize: 20,
    color: '#000000',
    fontWeight:'bold',
    fontFamily:'Lexend-Medium'
  },
  title2:{
    position:"absolute",
    top:39,
    paddingLeft:110,
    fontSize: 20,
    color: '#000000',
    fontWeight:'bold',
    fontFamily:'Lexend-Medium'
  },
  title3:{
      position:"absolute",
      fontSize: 20,
    color: '#000000',
    fontWeight:'bold',
    fontFamily:'Lexend-Medium',
    paddingLeft:110,
    top:70
  },
  switch1:{
    position:"absolute",
    top:0,
    paddingLeft:250,
    
  },
  switch2:{
    position:"absolute",
    top:30,
    paddingLeft:250
    
  },
  icon3:{
    height: 0,
    position:'relative',
    top:-198,
    left:52
  },
  icon5:{
    position:"absolute",
    top:78,
    paddingLeft:280
  },
  icon4:{
    position:"absolute",
    top:78,
    paddingLeft:220
  }
});

export default App;