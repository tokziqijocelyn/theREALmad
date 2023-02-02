import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard, ScrollView
} from 'react-native';
import { firebase } from '../firebase';

import { useNavigation } from '@react-navigation/native';

import { SelectList } from 'react-native-dropdown-select-list'
import { Ionicons } from '@expo/vector-icons';



export default AddTask = () => {
  const navigation = useNavigation();
  const [newItem, setNewItem] = useState({
    isDone: false,
    description: '',
    subject:''
  });
  const [listOfItems, setListOfItems] = useState([]);
   const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Math'},
      {key:'2', value:'Science'},
      {key:'3', value:'Humanities'},
      {key:'4', value:'Language'},
      {key:'5', value:'Others'},
  ]

  


const addItem = async () => {
  if (newItem.description != "" && newItem.subject != "") {
    const list = listOfItems;

    try {
      const id = firebase.firestore().collection("toDoCollection").doc().id;
      const docRef1 = await firebase.firestore().collection("toDoCollection").doc(id).set(newItem);
      alert("doc added to toDoCollection with ID: " + id);

      if (newItem.subject === "Math") {
        const docRef2 = await firebase.firestore().collection("toDoMath").doc(id).set(newItem);
      alert("doc added to toDoMath with ID: " + id);
      } else if(newItem.subject === "Science") {
        const docRef2 = await firebase.firestore().collection("toDoScience").doc(id).set(newItem);
      alert("doc added to toDoScience with ID: " + id);
      } else if(newItem.subject === "Language") {
        const docRef2 = await firebase.firestore().collection("toDoLanguage").doc(id).set(newItem);
      alert("doc added to toDoLanguage with ID: " + id);
      } else if(newItem.subject === "Humanities") {
        const docRef2 = await firebase.firestore().collection("toDoHumanities").doc(id).set(newItem);
      alert("doc added to toDoHumanities with ID: " + id);
      }else if(newItem.subject === "Others") {
        const docRef2 = await firebase.firestore().collection("toDoOthers").doc(id).set(newItem);
      alert("doc added to toDoOthers with ID: " + id);
      }

      const newItemJSON = {
        ...newItem,
        id: id,
      };

      list.push(newItemJSON);
      setListOfItems(list);
      setNewItem({
        isDone: false,
        description: "",
        subject: "",
      });

      Keyboard.dismiss();
      navigation.navigate("RefreshedHome");
    } catch (error) {
      alert("error adding doc" + error);
    }
  }
};



  const getAllData = async () =>{
      const snapshot = await firebase.firestore().collection('toDoCollection').get()
      const allItems = snapshot.docs.map((doc)=>{
        const docData = doc.data()
        return {
          id: doc.id,
          description: docData.description,
          isDone: docData.isDone,
          subject:docData.subject

        }
      })

      setListOfItems(allItems)
    }

  useEffect(()=>{
    getAllData()
  }, [])


  return (
    <View style={styles.container}>
    <View style={styles.container1}>
      <TouchableOpacity  onPress={() => navigation.navigate('RefreshedHome')}>
        <Ionicons name="close" size={24} color="#9842F5"  />
        
      </TouchableOpacity>
      <Text style={styles.title2}>Add Task</Text>
      </View>
    <Text style={styles.title1}>Task Title :</Text>
      
        <TextInput
          placeholder=""
          style={styles.input}
          onChangeText={(text) => {
            setNewItem({
              ...newItem,
              description: text,
            });
          }}
          value={newItem.description}></TextInput>
        
        <Text style={styles.title}>Subject :</Text>
        <SelectList 
        setSelected={(val) => {
            setNewItem({
              ...newItem,
              subject: val,
            });
          }} 
        data={data} 
        save="value"
        placeholder=" "
        boxStyles={{backgroundColor:"#E9DCFF", margin:12, borderRadius:15, borderColor:"#E9DCFF", height:45}}
        dropdownStyles={{backgroundColor:"#E9DCFF", margin:12, borderRadius:15, borderColor:"#E9DCFF"}}
        showsVerticalScrollIndicator={false}
        value={newItem.subject}
        
    />
        <View>
          <ScrollView>
            {listOfItems.map((item) => {
              return (
                console.log("rrr")
              );
            })}
          </ScrollView>
        </View>
      
      <View style={styles.container}>
      
      
    <View style={{marginTop:30, alignItems:'center'}}>
    <TouchableOpacity  style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      backgroundColor: '#E9DCFF',
      borderRadius: 30,
      padding:10,
      width:180
    }} onPress={addItem}>
            <Text style={{fontWeight:"bold", fontSize:22, fontFamily:"Lexend-Medium" }}>Add New Task</Text>
          </TouchableOpacity>
    </View>
    </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    backgroundColor: 'white',
    
    flex:1
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#E9DCFF",
    borderRadius:15,
    borderColor:"#E9DCFF",
    
    
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft:15,
    marginBottom:-11,
    fontFamily:"Lexend-Medium"
  },
  title1:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft:15,
    marginBottom:-11,
    fontFamily:"Lexend-Medium",marginTop:10
  },

  container1:{
    flexDirection:"row",
    alignItems:"center",
    padding:15,
    backgroundColor:"white"
  },
  title2:{
    fontFamily:'Lexend-Medium',
    fontSize:20,
    paddingLeft:90,
    color:"#2A0052"
  }
});