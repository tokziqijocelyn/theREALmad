import React, {useState} from 'react';
import {
    Modal,
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput
} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import fireBaseApp from '../firebase';

const InputModal = ({visible, onCancel, ...props}) => {
    const db = fireBaseApp.firestore()

    const currentGoal = props.currentGoal

    const [goalInput, setGoalInput] = useState('')

    let [fontsLoaded] = useFonts({
        'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
      });
      
      if (!fontsLoaded){
        return <AppLoading/>
      }
    
      const onUpdate = async(goalInput) =>{
        try {
            await db.collection('GoalGPA').doc("5XNeN1nGvADtiTwB00q9").update({ GoalGPA : goalInput });
            alert("Update success!")
        } catch (error) {
            alert("Error encountered: \n" + error)
        }
      }

    return (
        <Modal animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}>
                
            <View style={
                styles.modalContainer
            }>
                <Text style={
                    styles.modalText
                }>Update Goal GPA to:</Text>

                <TextInput placeholder={currentGoal}
                style={styles.textInputStyle} 
                keyboardType='numeric'
                placeholderTextColor={'purple'}
                placeholderFontFamily={'Lexend-Medium'}
                onChangeText={(text)=>{setGoalInput(text)}}
                />
                <View style={
                    styles.buttonContainer
                }>
                    <TouchableHighlight>
                        <Text style={
                                styles.yesButton
                            }
                            onPress={()=>{onUpdate(goalInput)
                              onCancel()}}>Yes</Text>
                    </TouchableHighlight>
                    <Text style={
                            styles.cancelButton
                        }
                        onPress={onCancel}>Cancel</Text>
                </View>
            </View>
        </Modal>
    );
};

export default InputModal

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#E9DCFF',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily:"Lexend-Medium"
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
      },
      yesButton: {
        fontFamily:"Lexend-Medium",
        color: 'green',
        fontWeight: 'bold',
        padding: 12,
      },
      cancelButton: {
        fontFamily:"Lexend-Medium",
        color: 'red',
        fontWeight: 'bold',
        padding: 12,
      },
      textInputStyle:{
        backgroundColor:'white', 
        width:70, 
        height: 50, 
        fontFamily:'Lexend-Medium', 
        textAlign:'center', 
        borderRadius:20
      }

});
