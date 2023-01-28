import {Picker} from '@react-native-picker/picker';
import {useState} from 'react'
import {StyleSheet, View} from 'react-native'

export default function DropDown({onValueChange}, props) {

    const [selectedGrade, setSelectedGrade] = useState(0)

    const key = props.key

    const handleUpdateGrade = async (newGrade, key) => {

        try {
            await db.collection('Grades').doc(key).update({ grade: newGrade });
            const updatedItems = items.map(item => {
                if (item.key === key) {
                    return { ...item, grade: newGrade };
                }
                return item;
            });
            setItems(updatedItems);

        } catch (error) {
            alert("Error encountered: \n" + error)
        }
          
    }
    

    return (
        <View style ={styles.container}>
            <Picker 
            selectedValue={selectedGrade}
            onValueChange={
                (itemValue) => {
                    setSelectedGrade(itemValue);
                    onValueChange(selectedGrade);
                    console.log(itemValue)
                    handleUpdateGrade(itemValue)
                }
            }>
                <Picker.Item label="A"
                    value={4}/>
                <Picker.Item label="B+"
                    value={3.5}/>
                <Picker.Item label="B"
                    value={3}/>
                <Picker.Item label="C+"
                    value={2.5}/>
                <Picker.Item label="C"
                    value={2}/>
                <Picker.Item label="D+"
                    value={1.5}/>
                <Picker.Item label="D"
                    value={1}/>
                <Picker.Item label="D-"
                    value={0.5}/>
                <Picker.Item label="F"
                    value={0}/>
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
