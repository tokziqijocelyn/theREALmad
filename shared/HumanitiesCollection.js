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
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DeleteModal from '../shared/DeleteModal';



export default HumanitiesScreen = () => {
  const navigation = useNavigation();
  const [newItem, setNewItem] = useState({
    isDone: false,
    description: '',
    subject: ''
  });
  const [listOfItems, setListOfItems] = useState([]);
  const [trash, setTrash] =  useState(false);
  const [status, setStatus] = useState('All')
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState('')

  const onClick = (status) => () => {
      setStatus(status)
  }

  

  const getAllData = async () =>{
      const snapshot = await firebase.firestore().collection('toDoHumanities').onSnapshot(snapshot=>{
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
      })
      
    }

  useEffect(()=>{
    getAllData()
  }, [])


const onDelete = async (id) => {
  let subject = '';
  for (let i = 0; i < listOfItems.length; i++) {
    if (listOfItems[i].id === id) {
      subject = listOfItems[i].subject;
      break;
    }
  }

  const updatedList = listOfItems.filter((item) => {
    return item.id !== id;
  });

  try {
    await firebase.firestore().collection("toDoCollection").doc(id).delete();
    switch (subject) {
      case 'Math':
        await firebase.firestore().collection("toDoMath").doc(id).delete();
        break;
      case 'Science':
        await firebase.firestore().collection("toDoScience").doc(id).delete();
        break;
      case 'Language':
        await firebase.firestore().collection("toDoLanguage").doc(id).delete();
        break;
      case 'Humanities':
        await firebase.firestore().collection("toDoHumanities").doc(id).delete();
        break;
      case 'Others':
        await firebase.firestore().collection("toDoOthers").doc(id).delete();
        break;
      default:
        break;
    }
    
    setListOfItems(updatedList);
  } catch (error) {
    alert("Error removing document: ", error);
  }
};


  
const updateItem = async (id) => {
  //clone array const
  const list = [...listOfItems];
  const matchedItem = list.find((item) => {
    return item.id == id;
  });

  matchedItem.isDone = !matchedItem.isDone;

  const newDoc = {
    description: matchedItem.description,
    isDone: matchedItem.isDone,
    subject: matchedItem.subject,
  };

  try {
    await firebase
      .firestore()
      .collection("toDoCollection")
      .doc(id)
      .set(newDoc);

    if(matchedItem.subject == 'Math'){
      await firebase
        .firestore()
        .collection("toDoMath")
        .doc(id)
        .set(newDoc);
    } 
    else if(matchedItem.subject == 'Science'){
      await firebase
        .firestore()
        .collection("toDoScience")
        .doc(id)
        .set(newDoc);
    } 
    else if(matchedItem.subject == 'Language'){
      await firebase
        .firestore()
        .collection("toDoLanguage")
        .doc(id)
        .set(newDoc);
    } 
    else if(matchedItem.subject == 'Humanities'){
      await firebase
        .firestore()
        .collection("toDoHumanities")
        .doc(id)
        .set(newDoc);
    } 
    else if(matchedItem.subject == 'Others'){
      await firebase
        .firestore()
        .collection("toDoOthers")
        .doc(id)
        .set(newDoc);
    } 

    alert("updated");
    setListOfItems(list);
  } catch (error) {
    alert("error updating " + error);
  }
};

  return (
    <View style={styles.container}>
    
    <View style={styles.container1}>
      <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  >
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('RefreshedHome')}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Math')}>
          <Text style={styles.filterText}>Math</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Science')}>
          <Text style={styles.filterText}>Science</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Language')}>
          <Text style={styles.filterText}>Language</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <TouchableOpacity style={{backgroundColor:"#1F003E", 
    padding:5, 
    borderRadius:8}}  onPress={() => navigation.navigate('Humanities')}>
          <Text style={{paddingHorizontal:5, 
    fontSize:19,
    color:"white"}}>Humanities</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Others')}>
          <Text style={styles.filterText}>Others</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>

      {listOfItems.length > 0 && 
  <TouchableOpacity style={{ flexDirection:"row" ,padding:20, paddingLeft:300}} onPress= {() => setTrash(!trash)} >
    <FontAwesome name="trash" size={24} color="black" />
  </TouchableOpacity>
}
            
      <View>
        <View>
        <DeleteModal
                visible={modalVisible}
                onDelete={() => {
                onDelete(itemId)
                setModalVisible(false)  
                }}
                onCancel={() => setModalVisible(false)}
                itemid = {itemId}
                
            />
          <ScrollView>
            {listOfItems.length > 0 ? 
            listOfItems.map((item) => {
              return (
                <View style={{backgroundColor:"white"}}>
                <View style={styles.listview}>
                {trash && 
                  <TouchableOpacity  onPress={()=> {
                   
                    setModalVisible(true); 
                    setItemId(item.id)
                     
                    }}>
                    <Ionicons name="close" size={24} color="#9842F5"  />
                  </TouchableOpacity>
                }
                <View style={{flex:1, justifyContent:"space-between", alignContent:"center", flexDirection:"row"}}>
                  <Text style={{ 
                    ...styles.textDescription,
                    textDecorationLine: item.isDone ? 'line-through' : 'none'
                  }}> {item.description}</Text>
                  
                  
                  <TouchableOpacity
                    style={{backgroundColor:"rgba(0,0,0,0"}}
                    onPress={ () => {updateItem(item.id)}}
                   >
                  <MaterialCommunityIcons
                                        name={item.isDone ? 'checkbox-marked' : 'checkbox-blank'} size={28} color = "rgba(28, 0, 55,0.6)" />
                  </TouchableOpacity>
                  </View>
                </View>
                </View>
              );
            }) : 
            <View style={{backgroundColor:"white", flex:1, justifyContent:"center", alignContent:"center", flexDirection:"row", paddingTop:50}}>
            <Image
              source={require('../assets/emptylist2.png')}
              style={{width:350, height: 450}}
            />
            </View>
            }
          </ScrollView>
        </View>
      </View>
      <View style={{padding:50, backgroundColor:"white",alignItems:"center", justifyContent:"center", flex:1 , flexDirection:"row"}}>
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
    onPress={() => navigation.navigate('AddTask')}
    
  >
    <Entypo name="plus" size={24} color="#1F003E" />
        </TouchableOpacity>
        </View>
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textDescription: {
    
    fontSize: 20,
    
    color: '#000000',
    fontWeight:'bold',
    fontFamily:'Lexend-Medium'
  
  },
  filterButton: {
    backgroundColor:"#E9DCFF", 
    padding:5, 
    borderRadius:8
  },
  filterText:{
    paddingHorizontal:5, 
    fontSize:19,
    color:"#1C0037"
  },
  listview: {
    padding: 15,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
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
  filterBar: {
      flexDirection: 'row',
      // flex: 0.2,
      height: 45,
      padding:5,
      alignItems:"center"
  },
  
}); 