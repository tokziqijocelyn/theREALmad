
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform} from 'react-native';

import React, { useEffect, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import Picker from '../shared/Picker'
import Confirmation from '../shared/Confirmation'


export default function AddProject({ navigation }) {    


  //COLOR HANDLER
  const [color, setColor] = useState('');

  const onColorChange = color => {
      setColor(color);
      console.log(color)
    };
 
  //TITLE HANDLER
  const [title, setTitle] = useState('');
  function nameInputHandler(newTitle) {
    setTitle(newTitle)
  }

  //DATE HANDLER
  let today = new Date()
  let fToday = today.getDate() + '/' + (today.getMonth() + 1) + "/" + today.getFullYear()
  let formattedToday = today.getFullYear() + '-' + (today.getMonth() + 1) + "-" + today.getDate()

  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(formattedToday)
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState(fToday)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios");
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    let MDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()
    setText(fDate)
    setFormattedDate(MDate)
    console.log(formattedDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }
 

  function makeList(newTitle, newDate, newColor) {

  }


  return (
    <View style={styles.container}>
      <View style={styles.listOfInputs}>
        <Text style={styles.inputHeader}>Title</Text>
        <TextInput style={styles.nameInput} placeholder="Name of project/exam" placeholderTextColor="#D984E8"
          onChangeText={nameInputHandler} />

        <Text style={styles.inputHeader}>Date</Text>
        <TouchableOpacity onPress={() => { showMode('date') }}>
          <Text style={styles.dateInput}>{text}</Text>
        </TouchableOpacity>

        <Text style={styles.inputHeader}>Color Picker</Text> 
        <Picker onColorChange={onColorChange}/>

        {show ? <DateTimePicker testID='dateTimePicker' value={date} mode={mode} display='default' onChange={onChange} /> : null}
 
      </View>


      <Confirmation color={color} date={text} formattedDate={formattedDate} title={title} />
    </View>
  ); 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Lexend-Medium"

  },
  nameInput: {
    backgroundColor: '#E9DCFF',
    padding: 9,
    borderRadius: 15,
    marginBottom: 15,
    fontFamily: "Lexend-Medium",
    color: '#2A0052'
  },
  dateInput: {
    backgroundColor: '#E9DCFF',
    padding: 11,
    borderRadius: 15,
    marginBottom: 15,
    color: '#2A0052',
    fontFamily: 'Lexend-Medium'
  }
  ,
  listOfInputs: {
    padding: 20,
    margin: 10,
    flex: 5
  },
  inputHeader: {
    fontSize: 20,
    color: '#2A0052',
    fontFamily: "Lexend-Medium",
    margin: 3
  },


});
