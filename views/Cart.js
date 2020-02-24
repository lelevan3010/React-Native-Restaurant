import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { OptimizedFlatList } from 'react-native-optimized-flatlist'
import { globalStyles } from '../styles/global'

import ItemCart from '../components/ItemCart'
import CheckoutBar from '../components/CheckoutBar'
import Button from '../components/Button'

import { CartContext } from '../context/CartContext'

export default function Cart({ navigation }) {
  const { cartItems, setCartItems } = useContext(CartContext)
  useEffect(() => {
    return setCartItems(cartItems)
  })

  if (cartItems.length > 0) {
    return (
      <View style={globalStyles.container}>
        <OptimizedFlatList
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemCart
              uri={item.uri}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <CheckoutBar />
      </View>
    )
  } else {
    return (
      <View
        style={{
          ...globalStyles.container,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ marginBottom: 8 }}>Your cart is empty</Text>
        <Button text="SHOP NOW" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }
}
