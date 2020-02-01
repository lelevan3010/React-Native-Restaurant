import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { OptimizedFlatList } from 'react-native-optimized-flatlist'
import { globalStyles } from '../styles/global'
import ItemCart from '../components/ItemCart'
import DetailsBar from '../components/DetailsBar'
import { DATA } from '../json/data'

export default function ItemDetails(props) {
  return (
    <View style={{ ...globalStyles.container, justifyContent: 'flex-end' }}>
      <Image style={styles.image} source={require('../assets/burger.jpg')} />
      <DetailsBar />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
})
