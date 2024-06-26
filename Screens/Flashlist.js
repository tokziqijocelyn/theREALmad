import { FlashList } from '@shopify/flash-list'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import DropDown from '../shared/DropDown'
import CalculateGPA from '../shared/CalculateGPA'
import React, { useState, useContext} from 'react'
import fireBaseApp from '../firebase';
import themeContext from '../config/themeContext'


export default function List() {

    const [isLoading, setIsLoading] = useState(false)

    const theme = useContext(themeContext)

    const handleAddItem = async () => {
        const newItem = {
            key: items.length,
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

    return (
        <View style={{ height: 600, }}>

            <FlashList data={items}
                renderItem={
                    ({ item }) => {
                        return (

                            <View style={styles.List}>
                                <Text style={[{ fontFamily: "Lexend-Medium", fontSize: 20, margin: 5,},{ color:theme.color}]}>
                                    {item.module}
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                                    <Text style={[styles.grade, {color:theme.color}]}>
                                        Grade
                                    </Text>

                                    <DropDown
                                        onValueChange={(newGrade) => {handleUpdateGrade(newGrade, item.key)}}
                                        itemKey={item.key}
                                    />

                                    <Text style={[styles.grade, { color:theme.color}]}>
                                        Credits
                                    </Text>
                                    <TextInput 
                                    keyboardType='numeric' 
                                    style={styles.CUInput} 
                                    onChangeText={(text) => handleUpdateCU(text, item.key)
                                    } /> 
                                    
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
            
            <CalculateGPA/>

        </View>
    )


}

const styles = StyleSheet.create({
    List: {
        borderBottomWidth: 0.4,
        borderBottomColor: '#9842F5',
        margin: 15,

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
        alignItems: 'center',
    },
    grade:{
        fontFamily: "Lexend-Medium", fontSize: 15,
    }
})
