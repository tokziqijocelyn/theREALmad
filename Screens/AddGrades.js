import {
    View,
    StyleSheet,
} from 'react-native'
import React, { useEffect, useContext, useState} from 'react'
import FlashList from './Flashlist';
import themeContext from '../config/themeContext';
import fireBaseApp from '../firebase';

const AddGrades = ({ navigation }) => {

    const theme = useContext(themeContext)

    const db = fireBaseApp.firestore()

    const deleteEverything = async () => {
        try {
            await db.collection("Grades")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete();
                    });
                });

        } catch (error) {
            alert("Error encountered: " + error)
        }
    }

    useEffect(()=>{
        deleteEverything()
    }, [])

    return (
        <View style={[styles.container,  {backgroundColor: theme.background}]}>
            <View style={
                [{ margin: 10, }]
            }>

                <FlashList style={{ justifyContent: 'center' }} />

            </View>

        </View>
    )
}

export default AddGrades

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
