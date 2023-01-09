
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddProject from './Screens/AddProject'
import Calendar from './Screens/Calendar'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeIcon = ({ focused, color, size }) => {
    let iconName = focused ? (size = 31, color = "#000000") : (size = 26, color = "#2A0052")
    return (<Ionicons name={iconName = "home"} size={size} color={color} />);
  };
  
  const GraphIcon = ({ focused, color, size }) => {
    let iconName = focused ? (size = 33, color = "#000000") : (size = 28, color = "#2A0052")
    return (<Octicons name={iconName = "graph"} size={size} color={color} />);
  };
  
  const timerIcon = ({ focused, color, size }) => {
    let iconName = focused ? (size = 34, color = "#000000") : (size = 28, color = "#2A0052")
    return (<MaterialCommunityIcons name={iconName="timer"} size={size} color={color} />);
  };
  
  const ToDoListIcon = ({ focused, color, size }) => {
    let iconName = focused ? (size = 31, color = "#000000") : (size = 26, color = "#2A0052")
    return (<Octicons name= {iconName="checklist"} size={size} color={color} />);
  };
  
  const SettingsIcon = ({ focused, color, size }) => {
    let iconName = focused ? (size = 31, color = "#000000") : (size = 26, color = "#2A0052")
    return  (<Ionicons name= {iconName = "settings-sharp"} size={size} color={color} />);
  
  };

  let [fontsLoaded] = useFonts({
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Calendar" animationType='slide' options={{
            animation: 'slide_from_right',
            animationTypeForReplace: 'push', 
            title: "HOME",

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


          }}

            component={Calendar} />

          <Stack.Screen  name="AddProject" component={AddProject}
            options={{
              
              title: "Add Project/Exam",
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 23,
                fontFamily: "Lexend-Medium"
              },

              headerTintColor: '#9842F5',
              headerTitleAlign: 'center'

            }} />

        </Stack.Navigator>

{/*         
        <Tab.Navigator >
          <Tab.Screen
          name="Graph"
          component={GraphScreen}
          options={{tabBarIcon: GraphIcon}}
          
          />
          <Tab.Screen
          name="Timer"
          component={TimerScreen}
          options={{ tabBarIcon: timerIcon}}
          />
          <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: HomeIcon}}
          />
         <Tab.Screen
          name="ToDoList"
          component={ToDoListScreen}
          options={{ tabBarIcon: ToDoListIcon,
          title: 'To Do List',
            headerStyle: {
              backgroundColor: '#E9DCFF',
              height:45
            }
          }}
          />
          <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: SettingsIcon,
          title: 'Settings',
            headerStyle: {
              backgroundColor: '#E9DCFF'
              
            }
          }}
          />
        </Tab.Navigator> */}

      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
