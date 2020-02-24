import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { globalStyles } from '../styles/global'

import { CartContext } from '../context/CartContext'

export default function CheckoutBar() {
  const { cartItems } = useContext(CartContext)

  const renderTotalBill = () => {
    let totalPrice = 0
    cartItems.forEach(item => {
      totalPrice += item.price * item.amount
    })
    return totalPrice
  }

  return (
    <View style={styles.CheckoutBarContainer}>
      <View style={styles.bill}>
        <Text style={globalStyles.boldText}>Total</Text>
        <Text style={globalStyles.boldText}>€{renderTotalBill()}</Text>
      </View>
      <Button text="checkout" />
    </View>
  )
}

const styles = StyleSheet.create({
  CheckoutBarContainer: {
    padding: 16,
  },
  bill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
})
