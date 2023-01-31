import { View, Dimensions } from 'react-native'
import React,{useState, useEffect} from 'react'
import { LineChart } from "react-native-chart-kit";
import fireBaseApp from '../firebase';

const Chart = () => {

    const db = fireBaseApp.firestore()

    const [listOfGPAs, setListOfGPAs] = useState([0]) 

    const getAllGPA= async () => {
        const snapshot = await db.collection
            ("GPA").orderBy("date", "asc").onSnapshot(snapshot => {
                 const allGPA = snapshot.docs.map((doc) => {
            const docData = doc.data();
            return parseFloat(docData.GPA)
        })

        setListOfGPAs(allGPA)
            })

       
    }

    useEffect(()=>{
        getAllGPA()
    })

    const data = {
        
                    datasets: [
                        {
                            data:listOfGPAs
                        }
                    ],
    }

    const screenWidth = Dimensions.get("window").width - 50;

    return (
        <View>
            <LineChart
                data={data}

                width={screenWidth}
                height={200}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#E9DCFF",
                    backgroundGradientFrom: "#E9DCFF",
                    backgroundGradientTo: "#CCAEFF",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(127, 17, 224, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(127, 17, 224, ${opacity})`,
                    propsForDots: {
                        r: "7",
                        strokeWidth: "1",
                        stroke: "#EDE2FF"
                    },
                    
                }}
                bezier
                style={{
                    marginVertical: 10,
                    borderRadius: 16,

                }}
               

            />
        </View>
    )
}

export default Chart