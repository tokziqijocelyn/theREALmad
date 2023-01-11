import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const GraphScreen = () => {

  let [fontsLoaded] = useFonts({
    'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"Lexend-Medium", fontSize:20, textAlign:"center"}}>Believe in yourself and you will succeed!</Text>
      <ScrollView>
        <View>
          <Text>
          <Text styles = {{fontFamily: "Lexend-Medium"}}>Time spent studying: </Text>
          <Text style={{textDecorationLine: "underline"}}>9 hours</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default GraphScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    backgroundColor:'red'
  }, 
  timeSpent:{
    padding:10,
    margin: 5,
    borderRadius: 20,
    color: 'blue',

  }
})