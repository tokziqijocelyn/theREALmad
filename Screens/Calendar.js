import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function CalendarApp({ navigation }) {





    let [fontsLoaded] = useFonts({
        'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.calendarStyle}>
                <Calendar
                    onDayPress={day => { console.log('selected day', day); }}
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
        flex: 2,
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
