import React, {useState, useContext} from 'react';
import themeContext from '../config/themeContext';
import {View, Switch, StyleSheet, Text} from 'react-native';
import {
    Ionicons,
    FontAwesome,
    MaterialIcons,
    AntDesign,
    Octicons,
    MaterialCommunityIcons
} from '@expo/vector-icons'
import ToggleSwitch from '../shared/switch'
import {EventRegister} from 'react-native-event-listeners';
import {Audio} from 'expo-av';

const Icons = () => {

    const theme = useContext(themeContext)

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = (value) => {
        setDarkMode(prev => !prev)
        EventRegister.emit("changeTheme", value)
    }

    const [notification, setNotification] = useState(false)
    const toggleNotif = () => {
        setNotification(prev => !prev)
    }

    const [paused, setPaused] = React.useState(false);

    const [sound, setSound] = React.useState();
    const [currentSongTitle, setCurrentSongTitle] = React.useState("Song 1");
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [currentSong, setCurrentSong] = React.useState(0);
    const songs = [
        {
            title: 'Lofi Hip Hop',
            source: require('../assets/lofi-hip-hop-11489.mp3')
        }, {
            title: 'Lofi Study',
            source: require('../assets/lofi-study-112191.mp3')
        }, {
            title: 'Empty Mind',
            source: require('../assets/empty-mind-118973.mp3')
        },
    ];

    const playNextSong = () => {
        const nextSong = currentSong + 1;
        if (nextSong >= songs.length) {
            setCurrentSong(0);
        } else {
            setCurrentSong(nextSong);
        }
    };


    async function playSound2() {
        console.log('Loading Sound');
        try {
            const {sound: newSound} = await Audio.Sound.createAsync(songs[currentSong].source);
            setSound(newSound);

            console.log('Playing Sound');
            await newSound.playAsync();
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        return sound ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
        } : undefined;
    }, [sound]);

    return (
        <View style={
            [
                styles.container, {
                    backgroundColor: theme.background
                }
            ]
        }>
            <View style={
                styles.container1
            }>
                <MaterialCommunityIcons name="weather-night"
                    size={24}
                    color={
                        theme.color
                    }
                    style={
                        {}
                    }/>
                <Text style={
                    [
                        styles.text, {
                            color: theme.color
                        }
                    ]
                }>Night Mode</Text>

                <ToggleSwitch isEnabled={darkMode}
                    toggleSwitch={toggleDarkMode}/>

            </View>
            <View style={
                styles.container1
            }>
                <MaterialCommunityIcons name="bell-badge"
                    size={24}
                    color={
                        theme.color
                    }/>
                <Text style={
                    [
                        styles.text, {
                            color: theme.color
                        }
                    ]
                }>Notification</Text>

                <ToggleSwitch isEnabled={notification}
                    toggleSwitch={toggleNotif}/>
            </View>

            <View style={styles.container2}>
      <Ionicons name="musical-notes" size={28} color={theme.color} style={{}} />
      <Text style={[{ fontSize: 18, fontFamily: "Lexend-Medium", paddingLeft: 45 }, {color:theme.color}]}>
        {songs[currentSong].title}
      </Text>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', paddingRight: 15 }}>
  <AntDesign
    name="stepbackward"
    size={24}
    color={theme.color}
    onPress={() => {
      setCurrentSong(currentSong > 0 ? currentSong - 1 : songs.length - 1);
      sound.stopAsync();
      playSound2();
    }}
  />
  {sound ? (
    <AntDesign
      name={isPlaying ? 'pause' : 'caretright'}
      size={24}
      color={theme.color}
      onPress={() => {
        if (isPlaying) {
          sound.pauseAsync();
          setIsPlaying(false);
        } else {
          sound.playAsync();
          setIsPlaying(true);
        }
      }}
    />
  ) : (
    <AntDesign
      name="caretright"
      size={24}
      color={theme.color}
      onPress={() => {
        playSound2();
      }}
    />
  )}
  <AntDesign
    name="stepforward"
    size={24}
    color={theme.color}
    onPress={() => {
      playNextSong();
      sound.stopAsync();
      playSound2();
    }}
  />
</View>

    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    container2: {
        flexDirection: "row",
        paddingTop: 15,
        paddingLeft: 48

    },
    container1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 15
    },
    text: {
        fontSize: 18,
        fontFamily: "Lexend-Medium"
    }

});

export default Icons;
