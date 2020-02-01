import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'

export default function OrderCounter(props) {
  return (
    <View style={styles.orderCounter}>
      <Entypo name="circle-with-minus" size={24} />
      <Text style={globalStyles.normalText}> 1 </Text>
      <Entypo name="circle-with-plus" size={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  orderCounter: {
    flexDirection: 'row',
  },
})
