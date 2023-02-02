import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../config/themeContext';

const Icons = ({ navigation }) => {
  const theme = useContext(themeContext)

  const [press, setPress] = useState(false);
  const [sound, setSound] = React.useState(null);

  const switchMusicIcon = () => {
    setPress(!press);
    if (!press) {
      playSound();
    } else {
      console.log('Unloading Sound');
      sound && sound.unloadAsync();
    }
  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound: loadedSound } = await Audio.Sound.createAsync(
      require('../assets/lofi-hip-hop-11489.mp3')
    );
    setSound(loadedSound);

    console.log('Playing Sound');
    await loadedSound.playAsync();
  }

  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={() => switchMusicIcon()}>
        <MaterialCommunityIcons
          name={press ? 'music' : 'music-off'}
          size={35}
          color={theme.color}
          style={{ paddingRight: '80%' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icons;