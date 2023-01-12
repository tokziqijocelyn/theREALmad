import {FlashList} from '@shopify/flash-list'
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native'
import DropDown from '../shared/DropDown'
import React from 'react'

export default function List(){


    const modules = [
        {id:1, module: "Module 1:"},
        {id:2, module: "Module 2:"},
        {id:3, module: "Module 3:"},
      ]

    const renderItem = ({ item }) => {
        return ( 
        <View style={styles.List}>
            <Text style={{fontFamily:"Lexend-Medium", fontSize: 20, margin:5}}>{item.module}</Text>
            <View style ={{flexDirection: 'row', alignItems:'center', margin:5}}>
              <Text style={{fontFamily:"Lexend-Medium", fontSize: 15}}>Grade</Text>
            <DropDown/>
            
            <Text style={{fontFamily:"Lexend-Medium", fontSize: 15}}>Credits</Text>
            <TextInput style={styles.CUInput} />
            </View>
        </View>
        )
    }

    return(
        <View style={{height: 300, width: Dimensions.get("screen").width }}>
        <FlashList data={modules} renderItem={renderItem}/>
        </View>
    )


}

const styles = StyleSheet.create({
    List:{
        borderBottomWidth: 0.4,
        borderBottomColor: '#9842F5',
        margin:15,
      },
      CUInput:{
        backgroundColor:'#E9DCFF',
        margin:20,
        padding: 10,
        borderRadius:20,
        fontFamily:"Lexend-Medium",
        fontSize:18
      },
})
