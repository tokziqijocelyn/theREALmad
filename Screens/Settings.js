import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Octicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'

const Icons = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <MaterialCommunityIcons name="weather-night" size={24} color={"black"} style={{}} />
        <Text style={styles.text}>Night Mode</Text>
        <Switch
        trackColor={{false: 'pink', true: 'red'}}
        thumbColor={isEnabled ? 'pink' : 'red'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={styles.container1}>
        <MaterialCommunityIcons name="bell-badge" size={24} color={"black"} />
        <Text style={styles.text}>Notification</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      <View style={styles.container2}>
        <Ionicons name="musical-notes" size={28} color="black" style={{}} />
        <Text style={{ fontSize: 18, fontFamily: "Lexend-Medium", paddingLeft: 45 }} >Music</Text>
        <AntDesign
          name="caretleft"
          size={13}
          color="black"
          style={{ padding: 15, position: "absolute", paddingLeft: 200, marginTop: 6 }}

        />
        <Text style={{ padding: 15, position: "absolute", paddingLeft: 240, marginTop: 2, fontFamily: "Lexend-Medium" }}>Forest</Text>
        <AntDesign
          name="caretright"
          size={13}
          color="black"
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
    backgroundColor: "white",

    paddingTop: 15,
    paddingLeft: 48,

  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 15,
    backgroundColor: "white"
  },
  text: { fontSize: 18, fontFamily: "Lexend-Medium" },

});

export default Icons;