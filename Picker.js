import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'
import {View} from 'react-native'
import React from 'react'


const Picker = () => (
    <View>
        <ColorPicker
            onColorSelected={color => alert(`Color selected: ${color}`)}
            hideControls = {false}
            hideSliders = {false}
            style = {{flex: 1}}
        />

        <TriangleColorPicker />
    </View>
)

export default Picker