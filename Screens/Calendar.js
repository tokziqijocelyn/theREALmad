
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import React from 'react'


export default function CalendarApp({ navigation}) {

    const getAllData = async()  =>{
        const snapshot = await db.collection
        ("newProjectDates").get()
    
        const allProjects = snapshot.docs.map((doc)=>{
          const docData = doc.data();
          return{
            id:doc.id,
            title: docData.title,
            date: docData.date,
            formattedDate: docData.formattedDate,
            color: docData.color
          }
        })
        setProjectList(allProjects)
    
      }
    
    
      useEffect(()=>{
        getAllData()
      }, [])

      
    const projects = [
        {
            id: 1,
            title: "BED CA3",
            date: "16/01/2023",
            daysLeft: "3 days left",
            color: "#ffc1bd"
        },

        {
            id: 2,
            title: "Java MST",
            date: "23/01/2023",
            daysLeft: "10 days left",
            color: "#bdc4ff"
        },

        {
            id: 3,
            title: "DEUI CA2",
            date: "24/01/2023",
            daysLeft: "11 days left",
            color: "#ffedb3"
        },
    ]
    

    const renderItem = ({ item }) => {
        let color = item.color

        return (
        <TouchableOpacity >
            <View style={{flexDirection: 'row', backgroundColor: color ,padding: 15, margin: 7, borderRadius: 10, justifyContent: 'space-evenly'}}>
                <View style={{flex:2}}>
            
                <Text style={{fontFamily:"Lexend-Medium", fontSize: 22}}>{item.title}</Text>
                <Text style={{fontFamily:"Lexend-Medium"}}>{item.date}</Text>
            
                </View>
                <View style ={{justifyContent: 'center', flex: 1}}>
                <Text style={{fontFamily: "Lexend-Medium", color: '#4B1A80', fontSize: 20, textAlign: 'center'}}>{item.daysLeft}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.calendarStyle}>
                <Calendar
                    onDayPress={day => { console.log('selected day', day); console.log(route) }}
                    enableSwipeMonths={true}
                    markedDates={{
                        '2023-01-16': { selected: true, selectedColor: '#ffc1bd' },
                        '2023-01-23': { selected: true, selectedColor: '#bdc4ff' },
                        '2023-01-24': { selected: true, selectedColor: '#ffedb3' },
                    }}

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
                    <FlatList data={projects} renderItem={renderItem}/>
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
        margin:4

    },
    projectList: {
        flex: 5,
        borderRadius: 20
    },
    item:{
        padding: 4,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#bec71e'
    }

});
