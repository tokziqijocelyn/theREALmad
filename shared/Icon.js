import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = ({ navigation }) => {
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
          color="#2A0052"
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