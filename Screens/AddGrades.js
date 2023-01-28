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
                <View style={
                    {margin: 10, }
                }>

                    <FlashList style={{justifyContent:'center'}} />

                </View>
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
        </View>
    )
}

export default AddGrades

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
