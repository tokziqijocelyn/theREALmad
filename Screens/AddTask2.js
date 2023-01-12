import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import {TouchableOpacity, TextInput} from 'react-native';
import {
 
  MaterialCommunityIcons
} from '@expo/vector-icons'
import AddTask from "../Screens/AddTaskList"

export default AddTaskPageScreen = ({navigation}) => {
  const [press, setPress] = useState(false);

  const AddNewTask = () => {
    setPress(!press);
  };


  return (
    
    <View style={{backgroundColor:"white", paddingBottom:1000}} >
      <View style={styles.container1}>
      <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
        <Ionicons name="close" size={24} color="#9842F5"  />
        
      </TouchableOpacity>
      <Text style={styles.title}>Add Task</Text>
      </View>
      <AddTask/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
    // alignItems: "center",
    // justifyContent: "center"
  },
  container1:{
    flexDirection:"row",
    alignItems:"center",
    padding:15,
    backgroundColor:"white"
  },
  title:{
    fontFamily:'Lexend-Medium',
    fontSize:20,
    paddingLeft:90,
    color:"#2A0052"
  }
});