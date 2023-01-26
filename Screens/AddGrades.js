import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import FlashList from './Flashlist';

import {AntDesign} from '@expo/vector-icons';

const AddGrades = ({navigation}) => {



    let [fontsLoaded] = useFonts({'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf')});

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <View style ={styles.container}>
            <ScrollView>
                <View style={
                    {margin: 10, }
                }>

                    <FlashList />

                </View>

                <Text style={
                    {
                        fontFamily: "Lexend-Medium",
                        margin: 5,
                        fontSize: 20
                    }
                }>Current GPA: 3.59</Text>
                <TouchableOpacity onPress={
                        () => {
                            alert("GPA Updated!")
                            navigation.navigate('Progress')
                        }
                    }
                    style={
                        {alignItems: 'center'}
                }>
                    <AntDesign name="checkcircle"
                        size={50}
                        color="#9842F5"/>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default AddGrades

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    addNewGrade: {
        fontFamily: "Lexend-Medium",
        margin: 20,
        fontSize: 20,
        backgroundColor: "#9842F5",
        color: "#fff",
        borderRadius: 20,
        padding: 10,
        textAlign: 'center',
        alignContent: 'center'
    }, 
    modules:{
      borderWidth:10
    }

})
