import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'


class TimerButtons extends Component {
  state = {};
  render() {
    if (this.props.running === true) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.props.pauseClicked} style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      position: 'absolute',
      bottom: 50,
      left:10,
      height: 50,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }}>
            <Foundation name="pause" size={23} color="#1C0037" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.props.playClicked} style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      position: 'absolute',
      bottom: 40,
      left:92.5,
      height: 75,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }}>
            <FontAwesome5 name="play" size={20} color="#1C0037" />
            
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.resetClicked} style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      position: 'absolute',
      bottom: 50,
      right: 10,
      height: 50,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }}>
            <FontAwesome name="refresh" size={23} color="#1C0037" />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={this.props.pauseClicked} style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      position: 'absolute',
      bottom: 50,
      left:10,
      height: 50,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }}>
            <Foundation name="pause" size={23} color="#1C0037" />
          </TouchableOpacity>
        <TouchableOpacity onPress={this.props.playClicked} style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      position: 'absolute',
      bottom: 40,
      left:92.5,
      height: 75,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }} >
          <FontAwesome5 name="play" size={20} color="#1C0037" />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.resetClicked} style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      position: 'absolute',
      bottom: 50,
      right: 10,
      height: 50,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }}>
            <FontAwesome name="refresh" size={23} color="#1C0037" />
          </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    
    
    position:"absolute",
    margin:105,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:130,
    paddingVertical:140
    
  },
  textStyle: {
    fontSize: 30,
    color: "white"
  },
  resetBtnStyle: {
    paddingLeft: "5%",
    color: "white",
    fontSize: 80,
    marginBottom: "4%"
  }
});
export default TimerButtons;