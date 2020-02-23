import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import DetailsBar from '../components/DetailsBar'

export default function ItemDetails({ navigation }) {
  const imageUri = navigation.getParam('uri', '')
  const title = navigation.getParam('title', '')
  const ingridients = navigation.getParam('ingridients', '')
  const price = navigation.getParam('price', '')

  return (
    <View style={{ ...globalStyles.container, justifyContent: 'flex-end' }}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <DetailsBar title={title} ingridients={ingridients} price={price} />
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
