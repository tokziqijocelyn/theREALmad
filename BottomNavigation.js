
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CalendarStackNav from './CalendarStackNav';
import SettingsScreen from './Screens/Settings';
import ToDoListScreen from './Screens/ToDoListScreen';
import GraphScreen from './Screens/GraphScreen';
import TimerScreen from './Screens/Timer';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import {
    Ionicons,
    Octicons,
    MaterialCommunityIcons
} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

    let [fontsLoaded] = useFonts({
        'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }


    const HomeIcon = ({ focused, color, size }) => {
        let iconName = focused ? (size = 35, color = "#FFF") : (size = 26, color = "#2A0052")
        return (<Ionicons name={iconName = "home"} size={size} color={color} />);
    };

    const GraphIcon = ({ focused, color, size }) => {
        let iconName = focused ? (size = 35, color = "#FFF") : (size = 28, color = "#2A0052")
        return (<Octicons name={iconName = "graph"} size={size} color={color} />);
    };

    const timerIcon = ({ focused, color, size }) => {
        let iconName = focused ? (size = 35, color = "#FFF") : (size = 28, color = "#2A0052")
        return (<MaterialCommunityIcons name={iconName = "timer"} size={size} color={color} />);
    };

    const ToDoListIcon = ({ focused, color, size }) => {
        let iconName = focused ? (size = 34, color = "#FFF") : (size = 26, color = "#2A0052")
        return (<Octicons name={iconName = "checklist"} size={size} color={color} />);
    };

    const SettingsIcon = ({ focused, color, size }) => {
        let iconName = focused ? (size = 35, color = "#FFF") : (size = 26, color = "#2A0052")
        return (<Ionicons name={iconName = "settings-sharp"} size={size} color={color} />);

    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#9842F5',
                    padding: 4,
                    height: 60,
                },
            }}
            tabBarOptions={{
                showLabel: false,
            }
            }>

           
            <Tab.Screen
                name="Progress"
                component={GraphScreen}
                options={{ tabBarIcon: GraphIcon, showLabel: false, 
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
            />
            <Tab.Screen
                name="Timer"
                component={TimerScreen}
                options={{ tabBarIcon: timerIcon }}
            /> 
            <Tab.Screen
                name="Home"
                component={CalendarStackNav}
                options={{
                    tabBarIcon: HomeIcon,
                    headerShown: false,
                }}

            />

            <Tab.Screen
                name="ToDoList"
                component={ToDoListScreen}
                options={{
                    tabBarIcon: ToDoListIcon,
                    title: 'To Do List',

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
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: SettingsIcon,
                    title: 'Settings',
                    headerStyle: {
                        backgroundColor: '#E9DCFF'

                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation