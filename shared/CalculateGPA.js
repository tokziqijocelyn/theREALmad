import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import fireBaseApp from '../firebase';
import { AntDesign } from '@expo/vector-icons';

export default function CalculateGPA() {
    const navigation = useNavigation()
    const db = fireBaseApp.firestore()

    const [listOfGPAs, setListOfGPAs] = useState([])
    const [finalGPA, setFinalGPA] = useState(0)

    const getAllData = async () => {
        const snapshot = await db.collection
            ("Grades").get()

        const allGPA = snapshot.docs.map((doc) => {
            const docData = doc.data();
            return {
                id: doc.id,
                grade: docData.grade,
                creditUnits: parseInt(docData.creditUnits)
            }
        })
        setListOfGPAs(allGPA)
        console.log(listOfGPAs)
    }

    const calculate = () => {
        console.log("ListofGPAs at calculate: " + listOfGPAs)
        var totalCU = 0;
        var totalCredits = 0;
        var GPA = 0;

        for (let i = 0; i < listOfGPAs.length; i++) {
            totalCU += parseInt(listOfGPAs[i].creditUnits);
            totalCredits += parseFloat(((listOfGPAs[i].grade) * (listOfGPAs[i].creditUnits)))
            console.log(listOfGPAs[i].grade)
        }
        GPA = (totalCredits / totalCU).toFixed(2)
        setFinalGPA(GPA)
    } 
 
    const addGPAtoDB = async() =>{
        var timeCreated = new Date()
        try{
            if (finalGPA > 0) {
                const docRef = await db.collection('GPA').add(
                    {
                        GPA: finalGPA,
                        date: timeCreated
                    }
                )
                alert('New GPA Added!\n' + docRef.id)
            } 

        } catch(error){
            alert('Error adding GPA: \n' + error)
        }
    }

    //MIGHT CRASH
    useEffect(() => {
        getAllData()
    }, [calculate])

    return (
        <View style={styles.container}>
            <Text style={styles.result} >
                Current GPA: {finalGPA}
            </Text>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={calculate} >
                <Text style={styles.calculateGPA} >Calculate GPA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => {
                    addGPAtoDB()
                    navigation.navigate('Progress')
                }
            }
                style={
                    { alignItems: 'center', padding: 10, margin:10 }
                }>

                <AntDesign name="checkcircle"
                    size={50}
                    color="#9842F5" />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    calculateGPA: {
        fontFamily: "Lexend-Medium",
        fontSize: 20,
        color: "#9842F5",
        padding:10,
        margin:10
    },
    container: {
        padding: 10,
    },
    result: {
        fontFamily: "Lexend-Medium",
        fontSize: 20,
        color: "#2A0052",
        textAlign:'center'
    }
})