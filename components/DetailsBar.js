import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { globalStyles } from '../styles/global'
import { renderIngridients } from '../utils/renderIngridients'

import { CartContext } from '../context/CartContext'

export default function DetailsBar({ id, title, ingridients, price, uri }) {
  const { cartItems, setCartItems } = useContext(CartContext)

  const setItemAndCheckName = () => {
    //  To see if the item already existed in cartItems,
    //  filterCart used in else if statement
    const filteredCart = cartItems.filter(item => item.title === title)

    // If cartItems is empty
    if (cartItems === undefined || cartItems.length == 0) {
      setCartItems([
        ...cartItems,
        {
          id,
          title,
          price,
          uri,
          amount: 1,
        },
      ])
    }
    // If we add the same item e.g Thai Curry x2
    else if (filteredCart.length !== 0) {
      filteredCart[0].amount += 1
      const otherCartItems = cartItems.filter(item => item.title !== title)
      setCartItems([...otherCartItems, ...filteredCart])
    }
    // If we add another item e.g Thai Curry, Steak, ...
    else {
      setCartItems([
        ...cartItems,
        {
          id,
          title,
          price,
          uri,
          amount: 1,
        },
      ])
    }
  }

  return (
    <View style={styles.DetailsBarContainer}>
      <View style={styles.bill}>
        <Text style={globalStyles.boldText}>{title}</Text>
        <Text style={globalStyles.boldText}>€{price}</Text>
      </View>
      <Text style={styles.description}>{renderIngridients(ingridients)}</Text>
      <Button
        text="ADD TO CART"
        onPress={() => {
          alert(`${title} is added to your cart!`)
          setItemAndCheckName()
        }}
      />
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
