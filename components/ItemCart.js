import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
import { Ionicons } from '@expo/vector-icons'
import OrderCounter from '../components/OrderCounter'

import { CartContext } from '../context/CartContext'

export default function ItemCart({ title, uri, price, amount }) {
  const { cartItems, setCartItems } = useContext(CartContext)

  const deleteItem = () => {
    const otherCartItems = cartItems.filter(item => item.title !== title)
    setCartItems([...otherCartItems])
  }

  return (
    <View style={styles.cartContainer}>
      <Image style={styles.image} source={{ uri: uri }} />
      <View style={styles.details}>
        <View style={styles.horizontal}>
          <View>
            <Text style={globalStyles.boldText}>€{price}</Text>
            <Text style={globalStyles.normalText}>{title}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons
              name="md-close-circle"
              size={24}
              onPress={() => deleteItem()}
            />
          </TouchableOpacity>
        </View>
        <OrderCounter amount={amount} title={title} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    height: 150,
    margin: 16,
    paddingBottom: 16,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 0,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    height: 130,
    resizeMode: 'cover',
  },
  details: {
    justifyContent: 'space-between',
    shadowColor: '#000',
    width: '60%',
    marginLeft: 16,
  },
})
