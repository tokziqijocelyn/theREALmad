import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, ScrollView} from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import FlashList from './Flashlist';

import {
  AntDesign,
} from '@expo/vector-icons';

const AddGrades = ({navigation}) => {



  let today = new Date()
  let fToday =  today.getDate() + '/' + (today.getMonth() + 1) + "/" + today.getFullYear()

  const [date, setDate] = useState(new Date()); 
  const [mode, setMode] = useState('date') 
  const [show, setShow] = useState(false)
  const [text, setText] = useState(fToday)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios");
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setText(fDate)

    console.log(fDate) 

  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }



  let [fontsLoaded] = useFonts({
    'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style ={styles.container}>
      <View style = {styles.inputs}>
        <TouchableOpacity onPress={() => { showMode('date') }}>
          <Text style={styles.dateInput}>Date: {text}</Text>
          {show ? <DateTimePicker testID='dateTimePicker' value={date} mode={mode} display='default' onChange={onChange} /> : null}
        </TouchableOpacity>
      </View>
  <ScrollView>
        <View style ={{margin:10}}>
          <FlashList/>
          
        </View>
        
        <Text style={{fontFamily:"Lexend-Medium", margin: 5, fontSize: 20}}>Current GPA: 3.59</Text>
        <TouchableOpacity>
        <Text style={styles.addNewGrade}>+ Add new Module Grade</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          alert("GPA Updated!")
          navigation.navigate('Progress')
        }}>
        <AntDesign name="checkcircle" size={50} color="#9842F5" />
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default AddGrades

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff'
  },
  dateInput:{
    backgroundColor: '#9842F5',
    padding: 11,
    borderRadius: 15,
    color: '#fff',
    fontFamily: 'Lexend-Medium',
    textAlign: 'center',
    fontSize:20
  },
  inputs:{
    padding: 20,
  }, 

  addNewGrade:{
    fontFamily:"Lexend-Medium", 
    margin: 20, 
    fontSize: 20, 
    backgroundColor: "#9842F5",
    color:"#fff",
    borderRadius:20,
    padding: 10, 
    textAlign:'center'
  }

})