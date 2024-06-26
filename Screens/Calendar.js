
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import React, { useState, useEffect, useContext } from 'react'
import fireBaseApp from '../firebase';
import DeleteModal from '../shared/DeleteModal';
import { EventRegister } from 'react-native-event-listeners';

import themeContext from '../config/themeContext';
import { isLoaded } from 'expo-font';

export default function CalendarApp({ navigation }) {
    const theme = useContext(themeContext)

    const db = fireBaseApp.firestore()

    const [loading, setLoading] = useState(false);

    const [markedDates, setMarkedDates] = useState({})

    const [projectList, setProjectList] = useState([])

    const [modalVisible, setModalVisible] = useState(false);

    const [itemId, setItemId] = useState('')
    

    const getAllData = async () => {
        setLoading(true)
        try{const snapshot = await db.collection("newProjectDates").onSnapshot(snapshot => {
          const allProjects = snapshot.docs.map((doc) => {
            const docData = doc.data();
            return {
              id: doc.id,
              title: docData.title,
              date: docData.date, 
              formattedDate: docData.formattedDate,
              color: docData.color,
              diff: docData.diff,
            };
          });
          setProjectList(allProjects);
          console.log(projectList);
          setLoading(false)
        });}
        catch(error){
            alert(error)
        }
      };
        

    const calendarDates = async () => {
        try{const snapshot = await db.collection("newProjectDates").onSnapshot(snapshot=>{
            let markedDates = {};
        snapshot.docs.map((doc) => {
            var docData = doc.data();
            var date = docData.formattedDate
            var color = docData.color
            markedDates[date] = { selected: true, selectedColor: color }
        });
        setMarkedDates(markedDates);
        });}
        catch(error){
            alert(error)
        }
    }

    const onDelete = async(itemId) =>{
        try {
            const itemRef = await db.collection("newProjectDates").doc(itemId);
            itemRef.delete();
            alert("Deleted successfully!")

          } catch (error) {
            alert("Error encountered \n"+ error);
          }
          
    }
        

    useEffect(() => {
        console.log("----------------------")
        getAllData()
        calendarDates()
    },[])

    return (
        <View style={styles.container} >
            <DeleteModal
                visible={modalVisible}
                onDelete={() => { 
                onDelete(itemId)
                setModalVisible(false);
                }}
                onCancel={() => setModalVisible(false)}
            />

            <View style={styles.calendarStyle}>
                <Calendar
                    onDayPress={day => { console.log('selected day', day); }}
                    enableSwipeMonths={true}
                    markedDates={markedDates}
                />
            </View>

            <View style={styles.ListOfDates}>
                <View style={styles.upcomingTitle}>
                    <Text style={{ fontSize: 25, color: "#2A0052", fontWeight: 'bold', fontFamily: "Lexend-Medium" }}>Upcoming</Text>
                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        onPress={() => navigation.navigate('AddProject')}>
                        <AntDesign name="pluscircle" size={35} color="#2A0052" />
                    </TouchableOpacity>
                </View>
                <View style={styles.projectList}>

                    <ScrollView>
                        {projectList.map((item, index) => {
                            let color = item.color
                            var id = item.id
                            return (
                                <TouchableOpacity key={index} 
                                    onPress={()=>{
                                        setModalVisible(true)
                                        setItemId(id)}} 
                                    item={item}>
                                    <View style={{ flexDirection: 'row', backgroundColor: color, padding: 15, margin: 7, borderRadius: 10, justifyContent: 'space-evenly' }}>
                                        <View style={{ flex: 2 }}>

                                            <Text style={{ fontFamily: "Lexend-Medium", fontSize: 22 }}>{item.title}</Text>
                                            <Text style={{ fontFamily: "Lexend-Medium" }}>{item.date}</Text>

                                        </View>
                                        <View style={{ justifyContent: 'center', flex: 1 }}>
                                            <Text style={{ fontFamily: "Lexend-Medium", color: '#4B1A80', fontSize: 20, textAlign: 'center' }}>{item.diff} Days left</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    touchableOpacityStyle: {
        borderRadius: 100,
        elevation: 3,
        shadowColor: 'rgba(155, 57, 222, 0.93)',
        height: 38,

    },
    calendarStyle: {
        flex: 3,
        paddingRight: 20,
        paddingLeft: 20,
    },
    ListOfDates: {
        backgroundColor: '#E9DCFF',
        flex: 1.9,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 12,
        paddingEnd: 20,
        paddingStart: 20
    },
    upcomingTitle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-between",
        padding: 5,
        margin: 4

    },
    projectList: {
        flex: 5,
        borderRadius: 20
    },
    item: {
        padding: 4,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#bec71e'
    }

});
