import React, { useState , useContext} from 'react';
import themeContext from '../config/themeContext';
import { View, Switch, StyleSheet, Text } from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Octicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import ToggleSwitch from '../shared/switch'
import { EventRegister } from 'react-native-event-listeners';

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

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.container1}>
        <MaterialCommunityIcons name="weather-night" size={24} color={theme.color} style={{}} />
        <Text style={[styles.text,{color: theme.color}]}>Night Mode</Text>

        <ToggleSwitch
          isEnabled={darkMode}
          toggleSwitch={toggleDarkMode}
        />

      </View>
      <View style={styles.container1}>
        <MaterialCommunityIcons name="bell-badge" size={24} color={theme.color} />
        <Text style={[styles.text,{color: theme.color}]}>Notification</Text>
        
        <ToggleSwitch
          isEnabled={notification}
          toggleSwitch={toggleNotif} />
      </View>
      <View style={styles.container2}>
        <Ionicons name="musical-notes" size={28} color={theme.color} />
        <Text style={{ fontSize: 18, fontFamily: "Lexend-Medium", paddingLeft: 45 }} >Music</Text>
        <AntDesign
          name="caretleft"
          size={13}
          color={theme.color}
          style={{ padding: 15, position: "absolute", paddingLeft: 200, marginTop: 6 }}

        />
        <Text style={[{ padding: 15, position: "absolute", paddingLeft: 240, marginTop: 2, fontFamily: "Lexend-Medium", color: theme.color }]}>Forest</Text>
        <AntDesign
          name="caretright"
          size={13}
          color={theme.color}
          style={{ padding: 15, position: "absolute", paddingLeft: 315, marginTop: 6 }}

        />
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
    paddingLeft: 48,

  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 15,
  },
  text: { fontSize: 18, fontFamily: "Lexend-Medium" },

});

export default Icons;