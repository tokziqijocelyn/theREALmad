import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Text, TouchableOpacity, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'


const AddTask = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
    const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Math'},
      {key:'2', value:'Chemistry'},
      {key:'3', value:'History'},
      {key:'4', value:'Geography'},
      {key:'5', value:'Language'},
      {key:'6', value:'Physics'},
      {key:'7', value:'Chemistry'},
      {key:'8', value:'Biology'},
      {key:'9', value:'Others'},
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Title :</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.title}>Subject :</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder=" "
        boxStyles={{backgroundColor:"#E9DCFF", margin:12, borderRadius:15, borderColor:"#E9DCFF", height:45}}
        dropdownStyles={{backgroundColor:"#E9DCFF", margin:12, borderRadius:15, borderColor:"#E9DCFF"}}
        
    />
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
    }}>
            <Text style={{fontWeight:"bold", fontSize:22, fontFamily:"Lexend-Medium" }}>Add New Task</Text>
          </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#E9DCFF",
    borderRadius:15,
    borderColor:"#E9DCFF",
    
    
  },
  container:{
    marginTop:10
  },
  
  title:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft:15,
    marginBottom:-11,
    fontFamily:"Lexend-Medium"
  }
});

export default AddTask;