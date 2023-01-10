

import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native'

import AddProject from './Screens/AddProject'
import Calendar from './Screens/Calendar'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function CalendarStackNav() {
const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
        <Stack.Navigator >
          <Stack.Screen name="Calendar" animationType='slide' options={{
            animation: 'slide_from_right',
            animationTypeForReplace: 'push', 
            title: "Home",
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
