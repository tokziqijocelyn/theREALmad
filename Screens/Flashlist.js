import { FlashList } from '@shopify/flash-list'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import DropDown from '../shared/DropDown'
import React, { useState } from 'react'
import fireBaseApp from '../firebase';

export default function List() {

    const db = fireBaseApp.firestore()

    const [items, setItems] = useState([]);

    const [selectedGrade, setSelectedGrade] = useState(0)
    const [creditUnits, setCreditUnits] = useState(0)

    const [listOfGPAs, setListOfGPAs] = useState([])

    const [GPA, setGPA] = useState({
        grade: 0,
        CU: 0
    })

    const onValueChange = (valueSelected) => {
        setSelectedGrade(valueSelected);
        console.log(valueSelected)
    }

    const onCUChange = (newValue) => {
        newValue = parseInt(newValue)
        setCreditUnits(newValue)
        console.log(newValue)
    }

    const finaliseGPA = (grade, CU) => {
        setGPA({
            grade, CU
        })
        console.log(GPA)
    }

    const addTotalGPA = async () => {
        try {
            if (GPA.grade != 0 && GPA.CU != 0) {
                const listOfScores = listOfGPAs

                const docRef = await db.collection('Grades').add(GPA)
                alert("New GPA added \n" + docRef.id)

                const GPAJSON = {
                    ...GPA,
                    id: docRef.id
                }

                listOfScores.push(GPAJSON)
                setListOfGPAs(listOfScores)
            }
            else if (isNaN(GPA.CU)) {
                throw new Error("Credit Unit is not a number!")
            }

        } catch (error) {
            alert("Error encountered: \n" + error)
        }
    }


    const handleAddItem = () => {
        const newItem = {
            key: items.length.toString(),
            module: "Module " + (
                (items.length + 1).toString()
            ),
        }

        setItems([
            ...items,
            newItem
        ])
    }

    const addAllAtOnce = () =>{
        finaliseGPA(selectedGrade, creditUnits)
        addTotalGPA()
        handleAddItem()
        
    }

    return (
        <View style={
            {
                height: 350,
                width: Dimensions.get("screen").width
            }
        }>
            <FlashList data={items}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={styles.List}>
                                <Text style={{ fontFamily: "Lexend-Medium", fontSize: 20, margin: 5 }}>
                                    {item.module}
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                                    <Text style={{ fontFamily: "Lexend-Medium", fontSize: 15 }}>
                                        Grade
                                    </Text>

                                    <DropDown onValueChange={onValueChange} />

                                    <Text style={
                                        { fontFamily: "Lexend-Medium", fontSize: 15 }
                                    }>Credits</Text>
                                    <TextInput style={styles.CUInput} onChangeText={onCUChange} />
                                </View>
                            </View>
                        )
                    }
                }
                estimatedItemSize={15} />

            <TouchableOpacity style={
                { alignItems: 'center' }
            }
                onPress={addAllAtOnce}>
                <Text style={
                    styles.addNewGrade
                }>+ Add new Module Grade</Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    List: {
        borderBottomWidth: 0.4,
        borderBottomColor: '#9842F5',
        margin: 15
    },
    CUInput: {
        backgroundColor: '#E9DCFF',
        margin: 20,
        padding: 10,
        borderRadius: 20,
        fontFamily: "Lexend-Medium",
        fontSize: 18
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
        alignContent: 'center',
        alignItems: 'center'
    }
})
