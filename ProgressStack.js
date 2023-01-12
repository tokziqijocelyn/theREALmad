
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native'

import Graph from './Screens/GraphScreen'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import AddGrades from './Screens/AddGrades';




export default function ProgressStack() {

const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
        <Stack.Navigator>
          <Stack.Screen name="Progress"  
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
            component={Graph} />

          <Stack.Screen  name="AddGrades" component={AddGrades}
            options={{
              
              title: "Add Grade",
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
