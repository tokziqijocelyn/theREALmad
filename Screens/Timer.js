import React from "react";
import { StyleSheet, View, } from "react-native";
import PomodoroTimer from "../shared/pomodoroTimer";
import Icons from "../shared/icons"


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        
        
        <Icons />
        
        <PomodoroTimer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
    // alignItems: "center",
    // justifyContent: "center"
  }
});