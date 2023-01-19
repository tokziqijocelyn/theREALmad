import React, { Component }from 'react';
import { FlatList, StyleSheet, Text, View, Switch } from 'react-native';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { useState } from "react";


const MoonIcon = (<MaterialCommunityIcons name="weather-night" size={24} color={"black"} style={{}}  />)


const BellIcon = (<MaterialCommunityIcons name="bell-badge" size={24} color={"black"}  />);

const MusicIcon =(<Ionicons name="musical-notes" size={28} color="black" style={{}}/>)

const musicName = [ 'Forest','Waves', 'Rain','Birds'];




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
  }

 

class SettingsList extends Component {
  constructor() {
    super();
    this.state = {
       listKeys: [
      {key: 'Night Mode', switch : false, icon:MoonIcon},
      {key: 'Notification', switch : false, icon:BellIcon}
      ]
    }
  }

  
  

  setSwitchValue = (val, ind) => {
      const tempData = _.cloneDeep(this.state.listKeys);
      tempData[ind].switch = val;
      this.setState({ listKeys: tempData });
  }

  listItem = ({item, index}) => (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems:"center", marginHorizontal: 30, paddingLeft:40, paddingRight:30}}>
      {item.icon}
      <Text style={styles.item}>{item.key}</Text>
      
      <Switch
        
        trackColor={{ false: "#2A0052", true: "#2A0052" }}
        thumbColor= "#E9DCFF" 
        activeThumbColor= "#E9DCFF"
        

      />
    </View>
  );
  

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.container1}>
      <FlatList
        
        data={this.state.listKeys}
        renderItem={this.listItem}
      />
      <Ionicons name="musical-notes" size={28} color="black" style={{padding:15, position:"absolute", paddingLeft:65, marginTop:93 }} />
      <Text style={{padding:15, position:"absolute", paddingLeft:128, marginTop:93, fontSize:18, fontFamily:"Lexend-Medium" }} >Music</Text>
      <AntDesign
          name="caretleft"
          size={13}
          color="black"
          style={{padding:15, position:"absolute", paddingLeft:200, marginTop:99 }}
          
        />
        <Text style={{padding:15, position:"absolute", paddingLeft:240, marginTop:99, fontFamily:"Lexend-Medium" }}>Forest</Text>
        <AntDesign
          name="caretright"
          size={13}
          color="black"
          style={{padding:15, position:"absolute", paddingLeft:315, marginTop:99 }}
          
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   
    justifyContent: 'center'

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontFamily:"Lexend-Medium"
  },
  
  container1: {
   flex: 1,
   backgroundColor:"white",
   marginTop:150,
   
    

  },
})
export default SettingsList;