import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";


class SessionHeader extends Component {

  

  handleText = () => {

    if(this.props.session1 == this.props.session2 + 1) {
      return " "
    }

    if (this.props.intervalType == "focus") {
      
        return this.props.session1 + " of " + this.props.session2 + " sessions " ;
      
    } else {
      
        return this.props.session1 +  " of " + this.props.session2 + " sessions " ;
      
    }
  };
  render() {
    let displayText = this.handleText();
    return <Text style={styles.textStyle}>{displayText}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    
    fontSize: 18,
    color: '#000000',
    fontWeight:'semi-bold',
    fontFamily:'Lexend-Medium',
    position:'absolute',
    top:275,
    
    
  }
});
export default SessionHeader;