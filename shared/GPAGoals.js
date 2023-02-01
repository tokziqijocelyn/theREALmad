import {View, Text, StyleSheet,Pressable} from 'react-native'
import React from 'react'

const GPAGoals = ({onPress, ...props}) => {

    const title = props.title
    const color = props.color
    const GPA = props.GPA
    const fontColor = props.fontColor

    return (
        <Pressable style={
            [styles.GPAs, {
                    backgroundColor: color}]}
                    onPress={onPress}>
            <Text style={
                {
                    fontFamily: "Lexend-Medium",
                    fontSize: 18,
                    textAlign: 'center',
                    color: fontColor
                }
            }>{title}</Text>
            <Text style={
                {
                    fontFamily: "Lexend-Medium",
                    fontSize: 25,
                    color: fontColor
                }
            }>
                {GPA}</Text>
        </Pressable>
    )
}

export default GPAGoals


const styles = StyleSheet.create({

    GPAs: {
        padding: 10,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'rgba(155, 57, 222,1)'
    }

})
