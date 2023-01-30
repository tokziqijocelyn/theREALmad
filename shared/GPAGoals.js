import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class GPAGoals extends Component {
  render() {
    return (
      <View>
        <View style={[styles.GPAs, { backgroundColor: '#9842F5' }]}>
            <Text style={{ fontFamily: "Lexend-Medium", fontSize: 18, textAlign: 'center', color: '#fff' }}>Current GPA:</Text>
            <Text style={{ fontFamily: "Lexend-Medium", fontSize: 25, color: '#fff' }}>{currentGPA}</Text>
          </View>
      </View>
    )
  }
}

export default GPAGoals