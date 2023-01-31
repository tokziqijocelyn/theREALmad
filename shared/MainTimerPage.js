import React, { Component } from 'react'
import { View, TouchableHighlight, TouchableOpacity, StyleSheet, Text} from 'react-native'
import * as moment from 'moment'
//import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

import momentDurationFormatSetup from 'moment-duration-format'
import * as Progress from 'react-native-progress'
// import timer from 'react-native-timer'
import { Circle } from 'react-native-svg';
import TimerHeader from "./TimerHeader";
import SessionHeader from "./Sessioncounterheader"

import { Foundation } from '@expo/vector-icons'; 
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import Icons from "./icons"

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.REST_PERIOD = this.props.route.params.shortbreak;
        this.FOCUS_PERIOD = this.props.route.params.focus;
        this.LONGBREAK_PERIOD = this.props.route.params.longbreak;
        this.SESSION = this.props.route.params.session;
        this.state = {
            counter: 0,
            originalCounter: 0,
            initialState: true,
            progress: 0,
            play: true,
            pause: false,
            stop: true,
            resume: false,
            interval: 0,
            remainingTime: this.FOCUS_PERIOD * 60,
            intervalType: "focus",
            sessioncounter: 1, 
        }

        

          this.handleTimerCompleted1 = () => {
            if (this.state.intervalType == "focus") {
              this.setState({ intervalType: "rest", remainingTime: this.REST_PERIOD * 60 });
            } else {
              this.setState({ intervalType: "focus", remainingTime: this.FOCUS_PERIOD });
            }
          };
          
          this.handleTimerCompleted = () => {

            if(this.state.sessioncounter == this.SESSION && this.state.intervalType != "rest"){
              this.setState({remainingTime: this.LONGBREAK_PERIOD * 60, sessioncounter: this.state.sessioncounter +1})
            } else if(this.state.sessioncounter == this.SESSION +1){
              this.setState({intervalType: "focus", sessioncounter: 1, remainingTime: this.FOCUS_PERIOD})
            }else{
                if(this.state.intervalType == "rest") {
                this.setState({ remainingTime: this.REST_PERIOD *60});
              } else if (this.state.intervalType == "focus") {
                this.setState({ remainingTime: this.FOCUS_PERIOD * 60, sessioncounter: this.state.sessioncounter +1});
              }
            }
          };
          
          
            
 
        this.defaultStyles = {
            view: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
            },
            play: {
                underlayColor: '#ffffff',
                borderColor: '#d9dcdd',
                textStyle: {
                    color: '#000000',
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            },
            cancel: {
                underlayColor: '#ffffff',
                borderColor: '#d9dcdd',
                textStyle: {
                    color: '#000000',
                },
                backgroundColor: '#ffffff',
            },
        }
        momentDurationFormatSetup(moment)
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        const remainingTime =
            typeof this.props.remainingTime === 'undefined'
                ? this.state.remainingTime
                : this.props.remainingTime

        this.setState({
            counter: remainingTime,
            originalCounter: remainingTime,
            initialState: true,
            progress: 0,
            play: true,
            pause: false,
            stop: true,
            resume: false,
            interval: remainingTime,
            remainingTime: remainingTime,
        })
    }

    componentDidUpdate(prevProps) {
        const remainingTime = this.state.remainingTime
        if (this.state.originalCounter != remainingTime) {
            this.setState({
                counter: remainingTime,
                originalCounter: remainingTime,
                initialState: true,
                progress: 0,
                play: true,
                pause: false,
                stop: true,
                resume: false,
                interval: remainingTime,
            })
        }
        if (
            typeof this.props.remainingTime !== 'undefined' &&
            typeof prevProps.remainingTime !== 'undefined' &&
            prevProps.remainingTime !== this.props.remainingTime
        ) {
            this.setState({
                counter: this.props.remainingTime,
                originalCounter: this.props.remainingTime,
                interval: this.props.remainingTime,
                remainingTime: this.props.remainingTime,
            })
        }
    }

    tick() {
        if (this.state.initialState) {
            const originalCounter = this.state.interval
            const initCounter = originalCounter > 0 ? originalCounter - 1 : 0
            const initProgress =
                originalCounter > 0 ? 1 - initCounter / originalCounter : 0

            this.setState({
                initialState: false,
                counter: initCounter,
                originalCounter: originalCounter,
                play: false,
                stop: !this.state.stop,
                pause: true,
                resume: false,
                progress: initProgress,
            })
            return
        }

        if (this.state.counter <= 0 && this.state.intervalType =="focus") {
            this.setState({
                counter: 0,
                progress: 0,
                play: true,
                pause: false,
                resume: false,
                intervalType: "rest"
            })
            this.handleTimerCompleted()
            this.releaseResources()
            
        } else if (this.state.counter <= 0 && this.state.intervalType =="rest") {
            this.setState({
                counter: 0,
                progress: 0,
                play: true,
                pause: false,
                resume: false,
                intervalType: "focus"
            })
            this.handleTimerCompleted()
            this.releaseResources()
            
        } else {
            const counter = this.state.counter - 1
            const progress = 1 - counter / this.state.originalCounter
            this.setState({
                counter: counter,
                progress: progress,
                
            })
            
        }
    }

    _displayText() {
        return moment
            .duration(this.state.counter, 'seconds')
            .format('hh:mm:ss', { trim: false })
    }

     _play() {
        if (this.state.play) {
            this.setState({
                initialState: true,
                play: false,
                pause: true,
                resume: false,
            })
        } else if (this.state.pause) {
            this.releaseResources()
            this.setState({
                counter: this.state.counter,
                originalCounter: this.state.originalCounter,
                progress: this.state.progress,
                play: false,
                pause: false,
                resume: true,
            })
            return
        } else if (this.state.resume) {
            this.setState({
                counter: this.state.counter,
                originalCounter: this.state.originalCounter,
                progress: this.state.progress,
                play: false,
                pause: true,
                resume: false,
            })
        }

        timer.setInterval(this, 'tick', () => this.tick(), 1000)
    }

    _cancel() {
        this.releaseResources()
        
    }

    _play2() {
       if (this.state.play) {
            this.setState({
                initialState: true,
                play: false,
                pause: true,
                resume: false,
            })
            
        }  else if (this.state.resume) {
            this.setState({
                counter: this.state.counter,
                originalCounter: this.state.originalCounter,
                progress: this.state.progress,
                play: false,
                pause: true,
                resume: false,
            })
            
        }

        timer.setInterval(this, 'tick', () => this.tick(), 1000)
    }

    _pause(){
      
         if (this.state.pause) {
            this.releaseResources()
            this.setState({
                counter: this.state.counter,
                originalCounter: this.state.originalCounter,
                progress: this.state.progress,
                play: false,
                pause: false,
                resume: true,
            })
            
            return
        } 

        timer.setInterval(this, 'tick', () => this.tick(), 1000)
    
    }

    _showActionText() {
        if (this.state.pause) return <FontAwesome5 name="play" size={20} color="#1C0037" />
        else if (this.state.resume) return <FontAwesome5 name="play" size={20} color="#1C0037" />
        else return   <FontAwesome5 name="play" size={20} color="#1C0037" />
    }

    releaseResources() {
        try {
            timer.clearTimeout(this)
            timer.clearInterval(this)
            timer.cancelAnimationFrame(this)
            this.setState({
                counter: this.state.originalCounter,
                progress: 0,
                play: true,
                pause: false,
                stop: true,
                resume: false,
            })
            
            
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const {
            options = options == null ? this.defaultStyles : options,
            animated,
            borderColor,
            borderWidth,
            color,
            direction,
            fill,
            indeterminate,
            rotation,
            strokeCap,
            textStyle,
            thickness,
            unfilledColor,
            endAngle,
            allowFontScaling,
        } = this.props
        
        
        
        
        const size =
            typeof this.props.size === 'undefined' ? 350 : this.props.size
        const showsText =
            typeof this.props.showsText === 'undefined'
                ? true
                : this.props.showsText
        const formatText =
            typeof this.props.formatText === 'undefined'
                ? 'library'
                : this.props.formatText
        const formatTextFlag =
            typeof this.props.formatText === 'undefined' ? false : true

        const hideCancelCircle =
            typeof this.props.hideCancelCircle === 'undefined'
                ? false
                : this.props.hideCancelCircle
        const textCancelCircle =
            typeof this.props.textCancelCircle === 'undefined'
                ? <FontAwesome name="refresh" size={23} color="#1C0037" />
                : this.props.textCancelCircle
        const sizeCancelCircle =
            typeof this.props.sizeCancelCircle === 'undefined'
                ? 55
                : this.props.sizeCancelCircle
        const underlayColorCancelCircle =
            typeof this.props.underlayColorCancelCircle === 'undefined'
                ? '#ffffff'
                : this.props.underlayColorCancelCircle

        const hideStartCircle =
            typeof this.props.hideStartCircle === 'undefined'
                ? false
                : this.props.hideStartCircle
        const textStartCircle =
            typeof this.props.textStartCircle === 'undefined'
                ? 'Start'
                : this.props.textStartCircle
        const sizeStartCircle =
            typeof this.props.sizeStartCircle === 'undefined'
                ? 75
                : this.props.sizeStartCircle
        const underlayColorStartCircle =
            typeof this.props.underlayColorStartCircle === 'undefined'
                ? '#ffffff'
                : this.props.underlayColorStartCircle

        const textStartCircleFlag =
            typeof this.props.textStartCircle === 'undefined' ? false : true

        return (
          
            <View style={style.containerStyle}>
            <View style = {style.iconcontainer}>
            
            <Icons></Icons>
            <TouchableOpacity onPress={() => {
                      this.props.navigation.navigate('Adjust Timer')
                           
                    }} >
                  <MaterialCommunityIcons
                    name="tune-vertical"
                    size={35}
                    color="#2A0052"
                    style = {{paddingRight:"3%", paddingTop: "4.2%"}}
                    
                  />
                </TouchableOpacity>
                </View>
                <View style={style.timerdisplaycontainer}>
                
                    <Progress.Circle
                        animated={animated}
                        borderColor={"#E9DCFF"}
                        borderWidth={11}
                        color={'rgba(152,66,245,0.45)'}
                        direction={'counter-clockwise'}
                        fill={'#E9DCFF'}
                        formatText={(progress) =>
                            !formatTextFlag
                                ? this._displayText(progress)
                                : formatText
                        }
                        
                        indeterminate={indeterminate}
                        progress={this.state.progress}
                        rotation={rotation}
                        showsText={showsText}
                        size={262}
                        strokeCap={'round'}
                        thickness={13}
                        unfilledColor={'rgba(243, 247, 254, 1)'}
                        endAngle={endAngle}
                        allowFontScaling={allowFontScaling}
                        textStyle= {{ color: '#000000', fontFamily:'serif', fontSize:39}}
                        
                    />
                </View>
                <View style={style.buttonContainer}>
                      <TouchableOpacity onPress={ () => this._pause() } style={{
                          borderWidth: 1,
                          borderColor: '#E9DCFF',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 55,
                          position: 'absolute',
                          bottom: 50,
                          left:10,
                          height: 55,
                          backgroundColor: '#E9DCFF',
                          borderRadius: 100,
                        }}>
                        <Foundation name="pause" size={23} color="#1C0037" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this._play2()} style={{
                            borderWidth: 1,
                            borderColor: '#E9DCFF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 75,
                            position: 'absolute',
                            bottom: 40,
                            left:96,
                            height: 75,
                            backgroundColor: '#E9DCFF',
                            borderRadius: 100,
                          }}>
                        <FontAwesome5 name="play" size={20} color="#1C0037" />
                        
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this._cancel()} style={{
                        borderWidth: 1,
                        borderColor: '#E9DCFF',
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
                <TimerHeader
                  intervalType={this.state.intervalType} focusDuration={this.FOCUS_PERIOD} shortbreakDuration={this.REST_PERIOD} session1={this.state.sessioncounter} session2={this.SESSION} longbreakDuration={this.LONGBREAK_PERIOD}
                />
                <SessionHeader
                  intervalType={this.state.intervalType} focusDuration={this.FOCUS_PERIOD} shortbreakDuration={this.REST_PERIOD} session1={this.state.sessioncounter} session2={this.SESSION} longbreakDuration={this.LONGBREAK_PERIOD}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginBottom: "25%",
    alignItems: "center",
    
    
  },
  buttonContainer:{
    position:"absolute",
    margin:250,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:"20%",
    paddingVertical:"22%",
    
  },
  timerdisplaycontainer:{
    padding: "30%",
    
    position: "absolute",
    marginTop:100,
    width:300,
    height:300,
    justifyContent:'center',
    alignItems:'center',
    
  },
  iconcontainer:{
   
    flexDirection:'row', justifyContent:"space-between"
  }
})