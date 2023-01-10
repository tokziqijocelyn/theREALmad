import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigation from './BottomNavigation'
import CalendarStackNav from './CalendarStackNav'

import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
      </NavigationContainer>
  )
}

export default App