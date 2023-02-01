import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'
import { NavigationContainer } from '@react-navigation/native';

class AdjustTimerScreen1 extends React.Component {
  
  static focus1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
  static shortbreak1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
  static longbreak1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
  static sessions1 = [1,2,3,4,5,6,7,8,9,10]
  
  constructor(props) {
    super(props);
    this.state = {
      focus:25,
      shortbreak:5,
      longbreak:15,
      session:4
    };
    
  }

  

  handleClickFocus = (val) => {
    this.setState({ focus: val });
  };

  handleClickShortBreak = (val) => {
    this.setState({ shortbreak: val });
  };

  handleClickLongBreak = (val) => {
    this.setState({ longbreak: val });
  };

  handleClickSession = (val) => {
    this.setState({ session: val });
  };

  returnFocus = () => {
    return this.state.focus;
  };


  

  render() {
    
    return (
      <View style={{flex:1, paddingTop:"10%", backgroundColor:"white"}}>
            
            <View>
            <SelectList 
                
                setSelected={(val) => this.handleClickFocus(val)} 
                data={AdjustTimerScreen1.focus1} 
                save="value"
                placeholder={this.state.focus}
                boxStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", height:60}}
                dropdownStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", textAlign:"center", }}
                showsVerticalScrollIndicator={false}
                inputStyles={{color:"white", paddingLeft:"65%", fontSize:20, fontWeight:"bold", marginTop:2}}
                dropdownTextStyles={{color:"white", textAlign:"center"}}
                searchPlaceholder=" "
                maxHeight = {185}
         

            />
            <Text style={{position:"absolute",color:"white", fontSize:20, fontWeight:"bold",paddingLeft:"10%", marginTop :27 }}>Focus Time</Text>
            <Text style={{position:"absolute", color:"white", paddingLeft:"72.5%", fontSize:20, fontWeight:"bold", marginTop :27}}>min</Text>
            </View>
            <View>
            <SelectList 
                setSelected={(val) => this.handleClickShortBreak(val)}
                data={AdjustTimerScreen1.shortbreak1} 
                save="value"
                placeholder={this.state.shortbreak}
                boxStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", height:60}}
                dropdownStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", textAlign:"center", }}
                showsVerticalScrollIndicator={false}
                inputStyles={{color:"white", paddingLeft:"65%", fontSize:20, fontWeight:"bold", marginTop:2}}
                dropdownTextStyles={{color:"white", textAlign:"center"}}
                searchPlaceholder=" "
                maxHeight = {185}
                
            />
            <Text style={{position:"absolute",color:"white", fontSize:20, fontWeight:"bold",paddingLeft:"10%", marginTop :27 }}>Short Break</Text>
            <Text style={{position:"absolute", color:"white", paddingLeft:"72.5%", fontSize:20, fontWeight:"bold", marginTop :27}}>min</Text>
            </View>
            <View>
            <SelectList 
                setSelected={(val) => this.handleClickLongBreak(val)} 
                data={AdjustTimerScreen1.longbreak1} 
                save="value"
                placeholder={this.state.longbreak}
                boxStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", height:60}}
                dropdownStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", textAlign:"center", }}
                showsVerticalScrollIndicator={false}
                inputStyles={{color:"white", paddingLeft:"65%", fontSize:20, fontWeight:"bold", marginTop:2}}
                dropdownTextStyles={{color:"white", textAlign:"center"}}
                searchPlaceholder=" "
                maxHeight = {185}
            />
            <Text style={{position:"absolute",color:"white", fontSize:20, fontWeight:"bold",paddingLeft:"10%", marginTop :27 }}>Long Break</Text>
            <Text style={{position:"absolute", color:"white", paddingLeft:"72.5%", fontSize:20, fontWeight:"bold", marginTop :27}}>min</Text>
            </View>
            <View>
            <SelectList 
                setSelected={(val) => this.handleClickSession(val)}
                data={AdjustTimerScreen1.sessions1} 
                save="value"
                placeholder={this.state.session}
                boxStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", height:60}}
                dropdownStyles={{backgroundColor:"#9842F5", margin:12, borderRadius:40, borderColor:"#E9DCFF", textAlign:"center" }}
                showsVerticalScrollIndicator={false}
                inputStyles={{color:"white", paddingLeft:"55%", fontSize:20, fontWeight:"bold", marginTop:2}}
                dropdownTextStyles={{color:"white", textAlign:"center"}}
                searchPlaceholder=" "
                maxHeight = {100}
            />
            <Text style={{position:"absolute",color:"white", fontSize:20, fontWeight:"bold",paddingLeft:"10%", marginTop :27 }}>Sessions</Text>
            <Text style={{position:"absolute", color:"white", paddingLeft:"62.5%", fontSize:20, fontWeight:"bold", marginTop :27}}>intervals</Text>
            </View>

            <View style={{marginTop:50, justifyContent:"center", alignItems:"center"}}>
        <Text>Selected Value : </Text>
        <Text style={{marginTop:10,color:'gray'}}>{this.state.focus} {this.state.longbreak} {this.state.shortbreak} {this.state.session} </Text>
        <TouchableOpacity  style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 55,
                            backgroundColor: '#E9DCFF',
                            borderRadius: 30,
                            padding:10,
                            width:135
                            
                          }} 
                           
                         
    onPress={() => this.props.navigation.navigate('Timer', {focus: this.state.focus, longbreak: this.state.longbreak, shortbreak: this.state.shortbreak, session: this.state.session})}
        
                      
                    >
          <Text style={{fontWeight:"bold", fontSize:25, fontFamily:"Lexend-Medium" } }>Apply</Text>
        </TouchableOpacity>
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



export default AdjustTimerScreen1;