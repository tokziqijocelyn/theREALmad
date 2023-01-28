import { FlashList } from '@shopify/flash-list'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import DropDown from '../shared/DropDown'
import React, { useState, useEffect } from 'react'
import fireBaseApp from '../firebase';

export default function List() {

    const handleAddItem = async () => {
        const newItem = {
            module: "Module " + (
                (items.length + 1).toString()
            ),
            grade: selectedGrade,
            creditUnits: creditUnits
        }

        try {
            const docRef = await db.collection('Grades').add(newItem)
            alert("New GPA added \n" + docRef.id)
            const GPAJSON = {
                ...newItem,
                key: docRef.id
            }
            setItems([
                ...items,
                GPAJSON
            ])
        } catch (error) {
            alert("Error encountered: \n" + error)
        }
    }


    const db = fireBaseApp.firestore()

    const [items, setItems] = useState([]);

    const [selectedGrade, setSelectedGrade] = useState(0)
    const [creditUnits, setCreditUnits] = useState(0)
    const [listOfGPAs, setListOfGPAs] = useState([])


    const handleUpdateGrade = async (newGrade, key) => {

        try {
            await db.collection('Grades').doc(key).update({ grade: newGrade });
            const updatedItems = items.map(item => {
                if (item.key === key) {
                    return { ...item, grade: newGrade };
                }
                return item;
            });
            setItems(updatedItems);

        } catch (error) {
            alert("Error encountered: \n" + error)
        }
    }

    const handleUpdateCU = async (newCU, key) => {
        try {
            if (!isNaN(newCU)) {
                await db.collection('Grades').doc(key).update({ creditUnits: newCU });
                const updatedItems = items.map(item => {
                    if (item.key === key) {
                        return { ...item, creditUnits: newCU };
                    }
                    return item;
                });
                setItems(updatedItems);
            } else {
                throw new Error("Credit Unit should be a number!")
            }
        } catch (error) {
            alert("Error encountered: \n" + error)
        }
    }


    const onValueChange = (valueSelected) => {
        setSelectedGrade(valueSelected);
        console.log(valueSelected)
        handleUpdateGrade(valueSelected)
    }


    const addItemToDB = async () => {

        for (let i = 0; i < items.length; i++) {
            try {
                if (items[i].creditUnits > 0) {
                    const listOfScores = items

                    const docRef = await db.collection('Grades').add(items[i])
                    alert("New GPA added \n" + docRef.id)

                    const GPAJSON = {
                        ...items,
                        id: docRef.id
                    }

                    listOfScores.push(GPAJSON)
                    setListOfGPAs(listOfScores)
                }
                else if (isNaN(items[i].creditUnits)) {
                    throw new Error("Credit Unit of module " + (i + 1) + " should be a number!")
                }

            } catch (error) {
                alert("Error encountered: \n" + error)
            }
        }
    }


    useEffect(() => {
        console.log(items.length)
    }, [])

    return (
        <View style={{ height: 450, }}>

            <FlashList data={items}
                renderItem={
                    ({ item }) => {
                        console.log(items + "in flashlist")
                        return (

                            <View style={styles.List}>
                                <Text style={{ fontFamily: "Lexend-Medium", fontSize: 20, margin: 5 }}>
                                    {item.module}
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                                    <Text style={{ fontFamily: "Lexend-Medium", fontSize: 15 }}>
                                        Grade
                                    </Text>

                                    <DropDown onValueChange={onValueChange} key={items.key} />

                                    <Text style={{ fontFamily: "Lexend-Medium", fontSize: 15 }}>
                                        Credits
                                    </Text>
                                    <TextInput style={styles.CUInput} onChangeText={(text) => handleUpdateCU(text, item.key)} />
                                </View>
                            </View>
                        )
                    }
                }
                estimatedItemSize={15}
            />

            <TouchableOpacity style={
                { alignItems: 'center' }
            }
                onPress={handleAddItem}>
                <Text style={
                    styles.addNewGrade
                }>+ Add new Module Grade</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }} onPress={addItemToDB} >
                <Text style={styles.calculateGPA} >Calculate GPA</Text>
            </TouchableOpacity>

            <Text>

            </Text>

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
    },
    calculateGPA: {
        fontFamily: "Lexend-Medium",
        fontSize: 20,
        color: "#9842F5"
    }
})
