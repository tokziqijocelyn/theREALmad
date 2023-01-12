import React, { Component }from 'react';
import { FlatList, StyleSheet, Text, View, Switch } from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Octicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'

class SettingsList extends Component {
  constructor() {
    super();
    this.state = {
       listKeys: [
      {key: 'Night Mode', switch : false},
      {key: 'Notification', switch : false}
      ]
    }
  }

  setSwitchValue = (val, ind) => {
      const tempData = _.cloneDeep(this.state.listKeys);
      tempData[ind].switch = val;
      this.setState({ listKeys: tempData });
  }

  listItem = ({item, index}) => (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems:"center", marginHorizontal: 30, paddingLeft:40, paddingRight:30}}>
      <Text style={styles.item}>{item.key}</Text>
      <Switch
        
        trackColor={{ false: "#2A0052", true: "#2A0052" }}
        thumbColor= "#E9DCFF" 
        activeThumbColor= "#E9DCFF"
     
      />
    </View>
  );
  

  render() {
    return (
      <View style={styles.container}>

  

      <MaterialCommunityIcons name="weather-night" size={24} color={"black"} />
      <MaterialCommunityIcons name="bell-badge" size={24} color={"black"} />
      <FlatList
        
        data={this.state.listKeys}
        renderItem={this.listItem}
      />

      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0,
    justifyContent: 'center'

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  icon1: {

    height: 0,
    position:'relative',
    top:10,
    left:50
  },
  icon2: {
    padding: 0,
    height: 0,
    position:'relative',
    top:54,
    left:50
    
  },
})
export default SettingsList;