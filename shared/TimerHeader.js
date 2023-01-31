import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";


class TimerHeader extends Component {

  handleText = () => {

    if(this.props.session1 == this.props.session2 + 1) {
      return "Take a break for " + this.props.longbreakDuration + " mins"
    }


    if (this.props.intervalType == "focus") {
      
        return "Stay focus for " + this.props.focusDuration + " mins" ;
      
    } else {
      
        return "Take a break for " + this.props.shortbreakDuration + " mins" ;
      
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
    fontFamily:'Lexend_500Medium',
    position:'absolute',
    bottom:28,
    
    
  }
});
export default TimerHeader;