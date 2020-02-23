import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { globalStyles } from '../styles/global'
import { renderIngridients } from '../utils/renderIngridients'

export default function DetailsBar({ title, ingridients, price }) {
  return (
    <View style={styles.DetailsBarContainer}>
      <View style={styles.bill}>
        <Text style={globalStyles.boldText}>{title}</Text>
        <Text style={globalStyles.boldText}>€{price}</Text>
      </View>
      <Text style={styles.description}>{renderIngridients(ingridients)}</Text>
      <Button text="ADD TO CART" />
    </View>
  )
}

const styles = StyleSheet.create({
  DetailsBarContainer: {
    padding: 16,
  },
  bill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  description: {
    ...globalStyles.normalText,
    marginBottom: 8,
  },
})
