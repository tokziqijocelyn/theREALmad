import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";


class TimerHeader extends Component {

  

  handleText = () => {
    if (this.props.intervalType == "focus") {
      
        return "Stay focus for 25 minutes";
      
    } else {
      
        return "Take a break for 5 minutes";
      
    }
  };
  render() {
    let displayText = this.handleText();
    return <Text style={styles.textStyle}>{displayText}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    
    fontSize: 20,
    color: '#000000',
    fontWeight:'semi-bold',
    fontFamily:'Lexend-Medium',
    position:'absolute',
    bottom:60
    
  }
});
export default TimerHeader;