import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import fireBaseApp from '../firebase';

export default function DropDown({ onValueChange, itemKey }) {

    const db = fireBaseApp.firestore()
    const [selectedGrade, setSelectedGrade] = useState(0)

    const [listOfGPAs, setListOfGPAs] = useState([])

    const getAllData = async () => {
        const snapshot = await db.collection
            ("Grades").get()

        const allGPA = snapshot.docs.map((doc) => {
            const docData = doc.data();
            return {
                id: doc.id,
                key: docData.key,
                module: docData.module,
                grade: docData.grade,
                creditUnits: docData.creditUnits
            }
        })
        setListOfGPAs(allGPA)
        console.log(listOfGPAs)
    }

    const handleUpdateGrade = async (newGrade, key) => {

        try {
            await db.collection('Grades').doc(key).update({ grade: newGrade });

            const updatedItems = listOfGPAs.map(item => {
                if (item.id === key) {
                    return { ...listOfGPAs, grade: newGrade };
                }
                return listOfGPAs;
            });
            setListOfGPAs(updatedItems);

        } catch (error) {
            alert("Error encountered: \n" + error)
        }
    }

    useEffect(()=>{
        getAllData()
    }, [])


    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedGrade}
                onValueChange={
                    (itemValue) => {
                        setSelectedGrade(itemValue);
                        onValueChange(itemValue);
                        console.log(itemValue)
                        handleUpdateGrade(itemValue, itemKey)
                        console.log("key: " + itemKey)
                    }
                }>
                <Picker.Item label="A"
                    value={4} />
                <Picker.Item label="B+"
                    value={3.5} />
                <Picker.Item label="B"
                    value={3} />
                <Picker.Item label="C+"
                    value={2.5} />
                <Picker.Item label="C"
                    value={2} />
                <Picker.Item label="D+"
                    value={1.5} />
                <Picker.Item label="D"
                    value={1} />
                <Picker.Item label="D-"
                    value={0.5} />
                <Picker.Item label="F"
                    value={0} />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9DCFF',
        borderRadius: 20,
        width: 85,
        margin: 20
    }
})
