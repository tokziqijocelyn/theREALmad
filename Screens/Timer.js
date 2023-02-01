import { NavigationContainer, StyleSheet, View } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import Timer from '../shared/MainTimerPage'
import AdjustTimerScreen1 from "../shared/SetTimer1"
import FirstTimerPage from "../shared/FirstTimerPage"
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Lily() {

  const Stack = createStackNavigator();

  return (
    
    <Stack.Navigator>
      <Stack.Screen name="FirstTimerPage"
        options={{
          title: 'Timer',
          headerShown: false}}
        component={FirstTimerPage} />


      <Stack.Screen name="Timer"
        options={{
          headerStyle: {
            backgroundColor: '#E9DCFF',
            borderBottomEndRadius: 130,
            borderBottomStartRadius: 130,

          },

          headerLeft: () => null,

          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Lexend-Medium"
          },

          headerTintColor: '#9842F5',
          headerTitleAlign: 'center',
        }}
        component={Timer} />

      <Stack.Screen name="Adjust Timer"
        options={{
          headerStyle: {
            backgroundColor: 'white'
          },

          headerLeft: () => (
            <TouchableOpacity style={{ paddingLeft: "15%" }}>
              <Ionicons name="close" size={24} color="#9842F5" />

            </TouchableOpacity>
          ),

          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Lexend-Medium"
          },

          headerTintColor: '#9842F5',
          headerTitleAlign: 'center',
        }}
        component={AdjustTimerScreen1} />

    </Stack.Navigator>

  );
}