import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { globalStyles } from '../styles/global'

export default function CheckoutBar() {
  return (
    <View style={styles.CheckoutBarContainer}>
      <View style={styles.bill}>
        <Text style={globalStyles.boldText}>Total</Text>
        <Text style={globalStyles.boldText}>€60</Text>
      </View>
      <Button text="checkout" />
    </View>
  )
}

const styles = StyleSheet.create({
  CheckoutBarContainer: {
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
})
