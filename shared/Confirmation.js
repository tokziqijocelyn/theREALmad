import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  
    const navigation = useNavigation()
    const createTwoButtonAlert = () =>
    Alert.alert('Confirm', 'Are you sure you want to continue?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'OK', onPress: () => navigation.navigate('Calendar')},
    ]);
    
  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;