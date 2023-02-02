import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Home from './Screens/Home';

import AddTask from './Screens/AddTask';
import NewHomeScreen from './Screens/NewHome'
import RefreshedHome from './Screens/RefreshedHome'
import {TouchableHighlight, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import MathScreen from './shared/MathCollection'
import ScienceScreen from './shared/ScienceCollection'
import LanguageScreen from './shared/LanguageCollection'
import OthersScreen from './shared/OthersCollection'
import HumanitiesScreen from './shared/HumanitiesCollection'

const Stack = createStackNavigator()

export default function App() {
  
  return (
      <Stack.Navigator >
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
            headerStyle: {
            backgroundColor: '#E9DCFf',
            borderBottomEndRadius: 130,
            borderBottomStartRadius: 130,
        },

        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Lexend-Medium"
        },

        headerTintColor: '#9842F5',  
        headerTitleAlign: 'center',}}
          name='Home' 
          component={NewHomeScreen} 
        />
        <Stack.Screen 
          name='AddTask'
          options={{   
            title:'Add Task',    
                headerShown: false,
             
            headerStyle: {
            backgroundColor: 'white'
           },
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Lexend-Medium"
        },

        headerLeft: () => (
               <TouchableOpacity style={{paddingLeft:"15%"}}>
        <Ionicons name="close" size={24} color="#9842F5"   />
        
      </TouchableOpacity>
              ),

        headerTintColor: '#9842F5',
        }}

        
          component={AddTask}
        />
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
            headerStyle: {
            backgroundColor: '#E9DCFF',
            borderBottomEndRadius: 130,
            borderBottomStartRadius: 130,
        },

        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Lexend-Medium"
        },
        headerLeft: ()=> null,
        headerTintColor: '#9842F5',  
        headerTitleAlign: 'center',}}
          name='RefreshedHome' 
          component={RefreshedHome} 
        />
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
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
        headerTitleAlign: 'center',headerLeft: null}}
          name='Math' 
          component={MathScreen} 
        />
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
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
        headerTitleAlign: 'center',headerLeft: null}}
          name='Science' 
          component={ScienceScreen} 
        />
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
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
        headerTitleAlign: 'center',
        headerLeft: null}}
          name='Language' 
          component={LanguageScreen} 
        />
        
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
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
        headerTitleAlign: 'center',
        headerLeft: null
        }}
          name='Others' 
          component={OthersScreen} 
        />
        <Stack.Screen 
        options={{     
            title:'TO DO LIST',               
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
        headerTitleAlign: 'center',
        headerLeft: null
        }}
          name='Humanities' 
          component={HumanitiesScreen} 
        />
        
        
      
      </Stack.Navigator>

  );
}