import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'



const Icons = () => {
  const [press, setPress] = useState(false);

  const switchMusicIcon = () => {
    setPress(!press);
  };


  return (
    
    <View style={styles.container1}>
      <TouchableOpacity onPress={() => switchMusicIcon()}>
        <MaterialCommunityIcons
          name={press ? 'music' : 'music-off'}
          size={32}
          color="#2A0052"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="tune-vertical"
          size={32}
          color="#2A0052"
        />
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container1:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:15
  }
});

export default Icons;