import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Ingridients from './Ingridients'
import { globalStyles } from '../styles/global'

export default function ItemMenu({ uri, title, ingridients, price, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuContainer}>
      <Image style={styles.image} source={{uri: uri}} />
      <View style={styles.details}>
        <Text style={globalStyles.boldText}>{title}</Text>
        <Ingridients ingridients={ingridients} />
        <Text style={globalStyles.normalText}>€{price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 300,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  details: {
    padding: 16,
  },
})
