import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class TimerDisplay extends Component {
  state = {};
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    
    padding: "10%",
    borderColor: "#E9DCFF",
    borderRadius: 125,
    borderWidth: 3,
    width:250,
    height:250,
    backgroundColor:"#E9DCFF",
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    blurRadius:8
    
    
  },
  textStyle: {
    color: "black",
    fontSize: 45,
    fontWeight: "400",
    fontFamily:"Lexend-Medium"
    
   
  }
});

export default TimerDisplay;