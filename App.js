// import { View, Text, TextInput, Button } from 'react-native'
// import React from 'react';
// import firestore from '@react-native-firebase/firestore';
// import { useEffect, useState } from 'react';
// import { collection, addDoc } from "firebase/firestore";


// export default function App() {

//   const [name, setName] = useState()
//   const [rollNo, setRollNo] = useState()

//   const [showdata, setShowData] = useState([])
//   useEffect(() => {
//     getReco()
//   }, [])

//   const getReco = async () => {

//     try {
//       const data = await firestore().collection('testing').get();
//       console.log(data);




//     } catch (error) {
//       console.log(error);

//     }
//   }


//   const addRecord = async () => {



//     try {
//       const adddata = await firestore().collection('testing').add({
//         name: name,
//         rollNo: rollNo
//       })

//       setShowData(() => {
//         const addlist = [...showdata, name, rollNo];
//         console.log(addlist);
//         return addlist
//       })
//       setName()
//       setRollNo()
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }


//   const removeRecord = (index) => {

//     const upload = showdata.filter((item, i) => {
//       return index != i
//     })
//     setShowData(upload)

//   }


//   return (
//     <View>

//       <TextInput
//         placeholder='Enter a name'

//         onChangeText={(name) => setName(name)}
//         value={name}
//       />
//       <TextInput
//         placeholder='Enter a Roll no'
//         onChangeText={(rollNo) => setRollNo(rollNo)}
//         value={rollNo}
//       />

//       {
//         showdata.map((item, index) => <View key={index}>
//           <Text>{item}</Text>
//           <Button title="remove" onPress={() => removeRecord(index)} color="red" />
//         </View>)
//       }


//       <Button title="add" onPress={() => addRecord()} />


//     </View>
//   )
// }

import { View, Text } from 'react-native'
import React from 'react';
import Home from "./src/screen/Home"
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation/Navigation';
import Seearch from './src/components/Seearch';




export default function App() {
    return (
        
        

            //    <Navigation/>

            <PaperProvider>
             <Navigation/>
            </PaperProvider>


    
    )
}