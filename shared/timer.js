import React, { Component } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import TimerHeader from "./TimerHeader";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: this.props.period * 60
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ running: false, time: nextProps.period * 60 });
  }

  render() {
    return (
      <View style={style.containerStyle}>
        
        <TimerDisplay time={this.state.time} />
        
        <TimerButtons
          running={this.state.running}
          playClicked={this.handlePlaying}
          resetClicked={this.handleReset}
          pauseClicked={this.handlePause}
        />
        <TimerHeader
          intervalType={this.props.intervalType}
          running={this.state.running}
        />
        <View style={style.container1}>
        <CountdownCircleTimer
        size= {235}
        rotation="counterclockwise"
        isPlaying={this.state.running}
        duration={1500}
        colors="rgba(243, 247, 254, 1)"
        colorsTime={[1499, 1480, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 5 })}
        updateInterval={1}
        trailColor="rgba(152,66,245,0.28)"
        strokeLinecap="square"
        >
        </CountdownCircleTimer>

        </View>
      </View>
    );
  }

  componentDidUpdate() {
    if (this.state.running === true && this.state.time == 0) {
      clearInterval(this.timer);
      Vibration.vibrate([1000, 2500, 1000, 2500]);
      this.props.Oncomplete();
    }
  }
  handlePlaying = () => {
    this.setState({ running: true });
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);
  };
  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ running: false });
  };
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ running: false, time: this.props.period * 60 });
  };
}

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    marginTop: "20%",
    flex: 1,
    marginBottom: "10%",
    alignItems: "center",
    
  },
  container1:{
    backgroundColor:"rgba(0,0,0,0)",
    position:"absolute",
    margin:7
    
    
  }
});

export default Timer;