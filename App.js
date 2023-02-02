import React, {useEffect, useState, useContext} from 'react';
import BottomNavigation from './BottomNavigation'

import {View} from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native' 
import SplashScreen from './splashScreen';

import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/theme'

const MyTheme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const App = () => { 

  const themeUsed = useContext(themeContext)

  const [darkMode, setDarkMode] = useState('false')

  useEffect(()=>{
      let eventListener = EventRegister.addEventListener("changeTheme", (data)=>{
          setDarkMode(data)
      })
      return () => {
          EventRegister.removeEventListener(eventListener)
      }

  })

  return (
    <themeContext.Provider value = {darkMode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={darkMode === true? DarkTheme:MyTheme}>
      <BottomNavigation />
      </NavigationContainer>
  </themeContext.Provider>
  )
}

export default App