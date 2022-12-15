import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';


export default function Seearch() {


    return (
<View style={{marginHorizontal:20 ,borderRadius:20}}>
        <Searchbar
            placeholder="Search"
            style={{borderRadius:50,height:50,marginTop:30}}
        />
        </View>

    )
}