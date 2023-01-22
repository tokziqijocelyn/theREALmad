import React, {useState} from 'react';
import ColorPicker from 'react-native-wheel-color-picker';

const App = ({onColorChange}) => {
    
    return (
        <ColorPicker discretes={true}
          onColorChangeComplete={onColorChange}
          swatches={false}/> 
    );
};

export default App;
