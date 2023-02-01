import { View, Text, Switch } from 'react-native'
import React from 'react'

const Toggle = ({isEnabled, toggleSwitch}) => (
  <View>
    <Switch 
      trackColor={{ false: '#767577', true: '#81b0ff' }} 
      thumbColor={isEnabled ? 'pink' : 'red'}
      ios_backgroundColor = {"#3e3e3e"}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>
)

export default Toggle