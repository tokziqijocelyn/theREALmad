import { View, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit";

const Chart = () => {

    const data = {
        labels: ["JUN", "AUG", "DEC", "FEB", "JUN"],
                    datasets: [
                        {
                            data: [
                                4,
                                (Math.random() * 1) + 3,
                                (Math.random() * 1) + 3,
                                (Math.random() * 1) + 3,
                                (Math.random() * 1) + 3,
                            ]
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