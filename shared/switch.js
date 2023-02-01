import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'

const toggle = (props) => {

const trackColor = props.trackColor
const thumbColor = props.thumbColor

const [isEnabled, setIsEnabled] = useState(false);


  return (
    <View>
      <Text>switch</Text>
    </View>
  )
}

export default toggle