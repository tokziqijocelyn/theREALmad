import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    AntDesign,
} from '@expo/vector-icons';
import fireBaseApp from '../firebase';

const App = (props) => {

    const navigation = useNavigation()
    const title = props.title
    const color = props.color
    const date = props.date
    const formattedDate = props.formattedDate

    const db = fireBaseApp.firestore()

    //PROJECT DETAILS

    const newProject = {


        title: title,
        date: date, 
        formattedDate: formattedDate,
        color: color 
    };
    
    const [projectList, setProjectList] = useState([])

    const addNewProject = async () => {
        if (newProject.title != '') {
            const list = projectList;
            try {
                const docRef = await db.collection
                    ('newProjectDates').add(newProject)
                alert('New Date Added!\n' + docRef.id)

                const newProjectJSON = {
                    ...newProject,
                    id: docRef.id
                }

                list.push(newProjectJSON)
                setProjectList(list)

            } catch (error) {
                alert('Error adding project: \n' + error)
            }
        }
    }


    return (
        <View style={styles.acceptIcon}  >
            <Pressable onPress={() => {
                Alert.alert('Confirm', 'Are you sure you want to continue?', [
                    {
                        text: 'Cancel',
                        onPress: () => { console.log("cancel pressed") }
                    },
                    {
                        text: 'OK', onPress: () => {
                                              
                            console.log(newProject);
                            navigation.navigate('Calendar');
                            addNewProject()
                        }
                    },
                ]);
            }}>
                <AntDesign name="checkcircle" size={50} color="#9842F5" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    acceptIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});

export default App;