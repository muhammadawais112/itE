import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Seearch from '../components/Seearch';
import { Data } from '../data';


const list = [
    {
        status: "A"
    },
    {
        status: "B"
    },
    {
        status: "C"
    },


]







export default function Home({ navigation }) {


    const [status, setStatus] = useState("A")
    const [demoList, setDemoList] = useState(Data)

    const setFlter = status => {
        if (status !== "A") {
            setDemoList([...Data.filter(e => e.status === status)])
        } else {
            setDemoList(Data)
        }
        setStatus(status)
    }




    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 2, backgroundColor: "#007fff", marginBottom: 10 }}>

                <Seearch />


            </View>


            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {
                    list.map((e, index) => <View key={index} style={{ width: 100, marginBottom: 20, borderWidth: 0.5, borderColor: "red", padding: 10, justifyContent: "center", marginLeft: 15 }}>
                        <Text
                            style={[styles.btnText, status === e.status && styles.btnActive]}
                            onPress={() => setFlter(e.status)} >{e.status}</Text>
                    </View>)
                }
            </View>




            <View style={{ flex: 8 }}>
                {
                    demoList.map((item, index) => <View key={index} style={{ height: 80, width: 340, backgroundColor: "white", marginLeft: 10, borderRadius: 10, marginBottom: 10, }}>
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
                            </View>
                        </View>


                    </View>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    btnText: {
        backgroundColor: "black",
        color: "blue"
    },
    btnActive: {
        backgroundColor: "red"

    }


});