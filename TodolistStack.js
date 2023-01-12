import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import TodolistScreen from './Screens/ToDoListScreen';
import AddTaskPageScreen from './Screens/AddTaskList';


// 1. createStackNavigator
// 2. NavigationContainer
// 3. create HomeScreen component & ScheduleScreenComponent
// 4. Stack.Screen


export default function TodolistStack() {

const Stack = createStackNavigator();

  

  return (
        <Stack.Navigator>
          <Stack.Screen name="To Do List"  
          options={{                    
            headerStyle: {
            backgroundColor: '#E9DCFF',
            borderBottomEndRadius: 130,
            borderBottomStartRadius: 130,
        },

        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Lexend-Medium"
        },

        headerTintColor: '#9842F5',  
        headerTitleAlign: 'center',}}
            component={TodolistScreen} />

          <Stack.Screen  name="AddTaskPage" component={AddTaskPageScreen}
            options={{
            
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 23,
                fontFamily: "Lexend-Medium"
              },

              headerTintColor: '#9842F5',
              headerTitleAlign: 'center'

            }} />

        </Stack.Navigator>

  );
}