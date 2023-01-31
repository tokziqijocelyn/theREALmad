import React, {useState} from 'react';
import {
    Modal,
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import fireBaseApp from '../firebase';

const DeleteModal = ({visible, onCancel, ...props}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const db = fireBaseApp.firestore()

  const collection = props.collection
  const itemId = props.itemIdSelected

    let [fontsLoaded] = useFonts({
        'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
      });
      
      if (!fontsLoaded){
        return <AppLoading/>
      }

      const onDelete = async() =>{
        try {
            const itemRef = await db.collection(collection).doc(itemId);
            itemRef.delete();
            alert("Deleted successfully!")

          } catch (error) {
            alert("Error encountered \n"+ error);
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
                }>Are you sure you want to delete this item?</Text>

                <View style={
                    styles.buttonContainer
                }>
                    <TouchableHighlight>
                        <Text style={
                                styles.yesButton
                            }
                            onPress={()=>{onDelete()
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

export default DeleteModal

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

});
