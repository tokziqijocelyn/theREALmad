
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform} from 'react-native';

import React, { useState, useContext } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import Picker from '../shared/Picker'
import Confirmation from '../shared/Confirmation'
import themeContext from '../config/themeContext';


export default function AddProject({ navigation }) {    

  const theme = useContext(themeContext)
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

  const [diff, setDiff] = useState(0)
  
  const daysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; 
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    const differenceMs = date2Ms - date1Ms;
    return Math.round(differenceMs / oneDay);
}

  let today = new Date()
  let fToday = today.getDate() + '/' + (today.getMonth() + 1) + "/" + today.getFullYear()

  let formattedToday = today.getFullYear() + '-' + (("0" + (today.getMonth() + 1)).slice(-2)) + "-" + (("0" + today.getDate()).slice(-2))

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
    

    let MDate = tempDate.getFullYear() + '-' + (("0" + (tempDate.getMonth() + 1)).slice(-2))  + '-' + (("0" + tempDate.getDate()).slice(-2))
    setText(fDate)
    setFormattedDate(MDate)
    const diffInDays = daysBetween(today, tempDate)
    console.log(formattedDate)
    console.log(diffInDays)
    setDiff(diffInDays)
  }

  const showMode = (currentMode) => {
    setShow(true) 
    setMode(currentMode)
  }


  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.listOfInputs}>
        <Text style={[styles.inputHeader, {color: theme.color}]}>Title</Text>
        <TextInput style={styles.nameInput} placeholder="Name of project/exam" placeholderTextColor="#D984E8"
          onChangeText={nameInputHandler} />

        <Text style={[styles.inputHeader, {color: theme.color}]}>Date</Text>
        <TouchableOpacity onPress={() => { showMode('date') }}>
          <Text style={styles.dateInput}>{text}</Text>
        </TouchableOpacity>

        <Text style={[styles.inputHeader, {color: theme.color}]}>Color Picker</Text> 
        <Picker onColorChange={onColorChange}/>

        {show ? <DateTimePicker testID='dateTimePicker' value={date} mode={mode} display='default' onChange={onChange} /> : null}
 
      </View>


      <Confirmation color={color} date={text} formattedDate={formattedDate} title={title} diff={diff} />
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
