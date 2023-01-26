import {FlashList} from '@shopify/flash-list'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import DropDown from '../shared/DropDown'
import React, {useState} from 'react'

export default function List() {

    const [items, setItems] = useState([]);

    const [selectedGrade, setSelectedGrade] = useState({})
    const [creditUnits, setCreditUnits] = useState({}) 

    const onValueChange = (valueSelected) => {
        setSelectedGrade(valueSelected);
        console.log(valueSelected)
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

    return (
        <View style={
            {
                height: 350,
                width: Dimensions.get("screen").width
            }
        }>
            <FlashList data={items}
                renderItem={
                    ({item}) => {
                        return (
                            <View style={
                                styles.List
                            }>
                                <Text style={
                                    {
                                        fontFamily: "Lexend-Medium",
                                        fontSize: 20,
                                        margin: 5
                                    }
                                }>
                                    {
                                    item.module
                                }</Text>
                                <View style={
                                    {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        margin: 5
                                    }
                                }>
                                    <Text style={
                                        {
                                            fontFamily: "Lexend-Medium",
                                            fontSize: 15
                                        }
                                    }>Grade</Text>


                                    <DropDown onValueChange={onValueChange}/>


                                    <Text style={
                                        {
                                            fontFamily: "Lexend-Medium",
                                            fontSize: 15
                                        }
                                    }>Credits</Text>
                                    <TextInput style={
                                        styles.CUInput
                                    }/>
                                </View>
                            </View>
                        )
                    }
                }
                estimatedItemSize={15}/>

            <TouchableOpacity style={
                    {alignItems: 'center'}
                }
                onPress={handleAddItem}>
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
