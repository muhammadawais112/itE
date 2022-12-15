import { View, Text, ScrollView, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Seearch from '../components/Seearch';
import { Data } from '../data';




export default function Home({ navigation }) {

    const [list, setList] = useState([])


    const handleClick = (item, index) => {
        setList([...list, item])
    }
    console.log(list);


    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 2, backgroundColor: "#007fff", marginBottom: 10 }}>

                <Seearch />


            </View>


            <View style={{ flex: 1, marginTop: 10 }}>
                <ScrollView horizontal={true}>
                    <View style={{ height: 25, width: 60, backgroundColor: "#007fff", borderRadius: 30, marginHorizontal: 5, alignItems: "center" }}>
                        <Text style={{ textAlign: "center", fontWeight: "900", paddingHorizontal: 5, fontSize: 12, color: "white", marginTop: 4 }}>All</Text>
                    </View>

                    <View style={{ height: 25, width: 60, backgroundColor: "#C5C5C5", borderRadius: 30, marginHorizontal: 5 }}>
                        <Text style={{ textAlign: "center", fontWeight: "900", paddingHorizontal: 5, fontSize: 12, color: "black", marginTop: 4 }}>Fashion</Text>
                    </View>
                    <View style={{ height: 25, width: 100, backgroundColor: "#C5C5C5", borderRadius: 30, marginHorizontal: 5 }}>
                        <Text style={{ textAlign: "center", fontWeight: "900", paddingHorizontal: 5, fontSize: 12, color: "black", marginTop: 4 }}>Delivery Apps</Text>
                    </View>
                    <View style={{ height: 25, width: 60, backgroundColor: "#C5C5C5", borderRadius: 30, marginHorizontal: 5 }}>
                        <Text style={{ textAlign: "center", fontWeight: "900", paddingHorizontal: 5, fontSize: 12, color: "black", marginTop: 4 }}>Shoes</Text>
                    </View>
                    <View style={{ height: 25, width: 60, backgroundColor: "#C5C5C5", borderRadius: 30, marginHorizontal: 5 }}>
                        <Text style={{ textAlign: "center", fontWeight: "900", paddingHorizontal: 5, fontSize: 12, color: "black", marginTop: 4 }}>Fashion</Text>
                    </View>
                    <View style={{ height: 25, width: 60, backgroundColor: "#C5C5C5", borderRadius: 30, marginHorizontal: 5 }}>
                        <Text style={{ textAlign: "center", fontWeight: "900", paddingHorizontal: 5, fontSize: 12, color: "black", marginTop: 4 }}>Fashion</Text>
                    </View>
                </ScrollView>







            </View>


            <View style={{ flex: 8 }}>
                {
                    Data.map((item, index) => <View key={index} style={{ height: 80, width: 340, backgroundColor: "white", marginLeft: 10, borderRadius: 10, marginBottom: 10, }}>
                        <View style={{ display: "flex", flexDirection: 'row', marginTop: 10, }}>
                            <Image
                                style={{ height: 60, width: 60, marginLeft: 15, borderRadius: 50 }}
                                source={{
                                    uri: item.img,
                                }}
                            />
                            <View>
                                <Text style={{ marginHorizontal: 5, fontWeight: "bold", color: "black", marginTop: 5 }}>{item.title}</Text>
                                <Text style={{ marginHorizontal: 5, marginTop: 3, }}>Offer:{item.offer}</Text>
                                <Button
                                    title="Go to Details... again"
                                    onPress={() => handleClick(item, index)}
                                />
                            </View>
                        </View>


                    </View>)
                }

                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Profile', {
                            itemId: list

                        });
                    }}
                />




            </View>
        </View>
    )
}