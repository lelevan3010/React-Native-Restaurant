import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { globalStyles } from '../styles/global'

export default function DetailsBar() {
  return (
    <View style={styles.DetailsBarContainer}>
      <View style={styles.bill}>
        <Text style={globalStyles.boldText}>Burger</Text>
        <Text style={globalStyles.boldText}>€60</Text>
      </View>
      <Text style={styles.description}>chicken, beef, mushroom, garlic</Text>
      <Button text="ADD TO CART" />
    </View>
  )
}

const styles = StyleSheet.create({
  DetailsBarContainer: {
    padding: 16,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 1,
    // background color must be set for Android
    backgroundColor: '#0000', // invisible color
    elevation: 1,
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
