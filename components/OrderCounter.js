import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'

import { CartContext } from '../context/CartContext'

export default function OrderCounter({ amount, title }) {
  const { cartItems, setCartItems } = useContext(CartContext)

  const filteredCart = cartItems.filter(item => item.title === title)

  const increaseAmount = () => {
    filteredCart[0].amount += 1
    const otherCartItems = cartItems.filter(item => item.title !== title)
    setCartItems([...otherCartItems, ...filteredCart])
  }

  const decreaseAmount = () => {
    filteredCart[0].amount -= 1
    const otherCartItems = cartItems.filter(item => item.title !== title)
    if (filteredCart[0].amount === 0) {
      setCartItems([...otherCartItems])
    } else {
      setCartItems([...otherCartItems, ...filteredCart])
    }
  }

  return (
    <View style={styles.orderCounter}>
      <TouchableOpacity>
        <Entypo
          name="circle-with-minus"
          size={24}
          onPress={() => decreaseAmount()}
        />
      </TouchableOpacity>
      <Text style={globalStyles.normalText}> {amount} </Text>
      <TouchableOpacity>
        <Entypo
          name="circle-with-plus"
          size={24}
          onPress={() => increaseAmount()}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  orderCounter: {
    flexDirection: 'row',
  },
})
