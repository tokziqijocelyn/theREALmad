import React from 'react'
import BottomNavigation from './BottomNavigation'


import { NavigationContainer, DefaultTheme} from '@react-navigation/native'

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