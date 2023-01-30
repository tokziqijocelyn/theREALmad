import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Chart from '../shared/Chart';
import { AntDesign } from '@expo/vector-icons';
import fireBaseApp from '../firebase';

const GraphScreen = ({ navigation }) => {
  const db = fireBaseApp.firestore()

  //Keep track of time of when user uses app
  const [appOpenDuration, setAppOpenDuration] = useState(0);
  const [currentGPA, setCurrentGPA] = useState(0)
  const [listOfGPAs, setListOfGPAs] = useState([0])
 
  const getAllGPA = async () => {
    const snapshot = await db.collection
      ("GPA").orderBy("date", "asc").get()

    const allGPA = snapshot.docs.map((doc) => {
      const docData = doc.data();
      return parseFloat(docData.GPA)
    })

    setListOfGPAs(allGPA)
    console.log(listOfGPAs)
  }


  const getLatestGPA = async () => {
    const snapshot = await db.collection("GPA")
      .orderBy("date", "desc")
      .limit(1)
      .get()

    const latestGPA = snapshot.docs.map((doc) => {
      const docData = doc.data();
      return (docData.GPA)
    })

    setCurrentGPA(latestGPA);
  }


 
  useEffect(() => { 
 
    let intervalId;
    const startTime = Date.now();

    intervalId = setInterval(() => {
      const duration = Math.round((Date.now() - startTime) / 1000 / 60 / 60);
      setAppOpenDuration(duration);
    }, 300000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getLatestGPA()
    getAllGPA()
  },[])



  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Lexend-Medium", fontSize: 20, textAlign: "center", padding: 10 }}>Believe in yourself and you will succeed!</Text>
      <ScrollView>
        <View style={styles.timeSpent}>
          <Text style={styles.timeSpentText}>
            <Text >Time spent studying: </Text>
            <Text style={{ textDecorationLine: "underline" }}>{appOpenDuration} hours</Text>
          </Text>
        </View>

        <View style={styles.GPAContainer}>
          <View style={[styles.GPAs, { backgroundColor: '#9842F5' }]}>
            <Text style={{ fontFamily: "Lexend-Medium", fontSize: 18, textAlign: 'center', color: '#fff' }}>Current GPA:</Text>
            <Text style={{ fontFamily: "Lexend-Medium", fontSize: 25, color: '#fff' }}>{currentGPA}</Text>
          </View>
          <View style={[styles.GPAs, { backgroundColor: '#fff' }]}>
            <Text style={{ fontFamily: "Lexend-Medium", fontSize: 18, textAlign: 'center' }}>Goal GPA:</Text>
            <TextInput style={{ fontFamily: "Lexend-Medium", fontSize: 25 }} />
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: "Lexend-Medium", marginTop: 10 }}>GPA Progress</Text>
          <Chart />
        </View>

        <View style={styles.analysis}>
          <Text>
            <AntDesign name="star" size={10} color="#ffd014" />
            <Text style={{ fontSize: 15, fontFamily: "Lexend-Medium", color: '#fff' }}> Analysis: </Text>
            <AntDesign name="star" size={10} color="#ffd014" />
          </Text>

          {parseFloat(listOfGPAs[listOfGPAs.length - 1]) == parseFloat(listOfGPAs[listOfGPAs.length - 2]) ?
            <Text style={{ fontSize: 15, fontFamily: "Lexend-Medium", color: '#fff' }}> Consitency! Keep it up!</Text> :
            null
          }

          {parseFloat(listOfGPAs[listOfGPAs.length - 1]) > parseFloat(listOfGPAs[listOfGPAs.length - 2]) ?
            <Text style={{ fontSize: 15, fontFamily: "Lexend-Medium", color: '#fff' }}> An improvement! Keep it up!</Text> :
            <Text style={{ fontSize: 15, fontFamily: "Lexend-Medium", color: '#fff' }}> You got this! Don't give up!</Text>
          }

        </View>

        <View>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('AddGrades')}>
            <Text style={styles.addGrade}>+ New Grades</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}

export default GraphScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  timeSpent: {
    padding: 18,
    margin: 10,
    borderRadius: 20,
    color: 'blue',
    backgroundColor: '#E9DCFF',
    alignContent: 'center',
    textAlign: 'center'
  },
  timeSpentText: {
    fontFamily: "Lexend-Medium",
    fontSize: 16,
    textAlign: 'center',
    color: "#9842F5"
  },
  GPAContainer: {
    flexDirection: 'row',

  },
  GPAs: {
    padding: 10,
    margin: 10,
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'rgba(155, 57, 222,1)',
  },
  analysis: {
    backgroundColor: '#2A0052',
    padding: 15,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center'
  },
  addGrade: {
    alignItems: 'center',
    backgroundColor: "#9842F5",
    borderRadius: 20,
    fontFamily: "Lexend-Medium",
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    width: 200,
    justifyContent: 'center'
  }
})