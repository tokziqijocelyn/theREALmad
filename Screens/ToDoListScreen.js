import {View, FlatList, StyleSheet, Text, StatusBar, SafeAreaMove, CheckBox,Pressable, TouchableOpacity, Image} from 'react-native'
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";
import { FontAwesome } from '@expo/vector-icons'; 


const DATA = [
  { id: 1, txt: 'Math Vector W/S', isChecked: false },
    { id: 2, txt: 'Math Prac Paper 1', isChecked: false },
    { id: 3, txt: 'Physics Revision Notes', isChecked: false },
  
];



export default TodolistScreen = ({ navigation }) => {


  let [fontsLoaded] = useFonts({
    'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
});




const clickHandler = () => {
    //function to handle click on floating Action Button
    alert('Floating Button Clicked');
  };

const [task, setTask] = React.useState(DATA);
const [strike, setStrike] = useState(false);
  const [crossedOut, setCrossedOut] = useState(false) 
  

const handleChange = (id) => {
        let temp = task.map((task) => {
            if (id === task.id) {
              
                return { ...task, isChecked: !task.isChecked };
            }
            return task;
        });
        
        setTask(temp);
        setCrossedOut(true)
        
};

const switchoptions = [
  {
    label: "All               3",
  },
  {
    label: "Math              2", value:2
  },
  {
    label: "Phy               1",
  },
];

const renderFlatList = (renderData) => {

  
    
        return (
            <FlatList
                data={renderData}
                renderItem={({ item }) => (
                  
                    <Card style={styles.item}>
                    
                        <View style={styles.card}>
                        
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    justifyContent: 'space-between',
                                    alignItems:'center'
                                }}>
                                <Text style={styles.title}>{item.txt}</Text>
                                <Pressable onPress={() => handleChange(item.id)} >
                                    <MaterialCommunityIcons
                                        name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank'} size={28} color = "rgba(28, 0, 55, 0.6)" />
                                    
                                </Pressable>
                                 
                            </View>
                            
                        </View>
                    </Card>
                    
                )}
            />
        );
    }

    return (
        <View style={styles.container}>
        <SwitchSelector
            options={switchoptions}
            initial={0}
            textColor={'#1C0037'}
            buttonColor={"#1C0037"}
            borderRadius={10}
            fontSize={16}
            style={styles.font1}
            onPress={(value) => console.log(value)}
            bold
          />
        
            
            <TouchableOpacity style={{ flexDirection:"row" ,padding:20, paddingLeft:300}}>
              <FontAwesome name="trash" size={24} color="black" />
            </TouchableOpacity>   
            
        
            <View style={{ flex: 1 , backgroundColor:"white"}}>
                {renderFlatList(task)}
            </View>  
            
                <TouchableOpacity style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      position: 'absolute',
      bottom: 40,
      right: 155,
      height: 50,
      backgroundColor: '#E9DCFF',
      borderRadius: 100,
    }}
    onPress={() => navigation.navigate('AddTaskPage')}
    
  >
    <Entypo name="plus" size={24} color="#1F003E" />
        </TouchableOpacity>
              
            
            
        </View>
    );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:"#ffffff",
    
    
  },
  item: {
    backgroundColor: '#E9DCFF',
    height: 80,
    marginVertical: 8,
    marginHorizontal: 30,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  
  },
  title: {
    fontSize: 16,
    padding:10,
    color: '#000000',
    fontWeight:'bold',
    fontFamily:'Lexend-Medium'
  
  },
  font1 :{
    fontFamily:"Lexend-Medium"
  },
  
  container2: {
    
    backgroundColor:"blue"
    
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 0,
  },
  checkbox: {
    alignSelf: "right",
  },
  card: {
      padding: 10,
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  touchableOpacityStyle: {
    position: 'relative',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: -142,
    bottom: 30,
  }

});