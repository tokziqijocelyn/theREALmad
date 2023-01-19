import React from 'react';
import BottomNavigation from './BottomNavigation'

import {View} from 'react-native'
import { NavigationContainer, DefaultTheme} from '@react-navigation/native'
import SplashScreen from './splashScreen';



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const App = () => {

  return (
    <NavigationContainer theme={MyTheme}>
      <BottomNavigation />
      </NavigationContainer>

  )
}

export default App