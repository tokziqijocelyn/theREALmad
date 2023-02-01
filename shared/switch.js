import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'

const toggle = (props) => {

const trackColor = props.trackColor
const thumbColor = props.thumbColor
const ios_backgroundColor = "#3e3e3e"

const [isEnabled, setIsEnabled] = useState(false);

const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View>
      <Switch
        trackColor={trackColor} 
        thumbColor={thumbColor}
        ios_backgroundColor = {ios_backgroundColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default toggle