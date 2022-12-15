import { View, Text } from 'react-native'
import React from 'react'

export default function Profile({ route, navigation }) {
  const { itemId } = route.params;

  return (
    <View>
      {
        itemId.map((item, index) => <View>
          <Text>{item.title}</Text>
          <Text>{item.offer}</Text>

        </View>)
      }
    </View>
  )
}