import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const App = ({color, setColor}) => {



    const onColorChange = color => {
        setColor(color);
    };
    return (
        <View style={
            styles.sectionContainer
        }>
            <ColorPicker discretes={true}
                onColorChangeComplete={
                    onColorChange
                }
                swatches={false}
                />
        </View>
    );
};
const styles = StyleSheet.create({
    sectionContainer: {
        padding: 0,
        margin: 0,
        backgroundColor: 'red'
    }
});
export default App;
