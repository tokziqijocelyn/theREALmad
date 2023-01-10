import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const App = () => {
    const [color, setColor] = useState('');

    const onColorChange = color => {
        setColor(color);
    };
    return (
        <View style={
            styles.sectionContainer
        }>
            <ColorPicker discretes={true}
                onColorChangeComplete={
                    color => console.log(color)
                }/>
        </View>
    );
};
const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 5
    }
});
export default App;
