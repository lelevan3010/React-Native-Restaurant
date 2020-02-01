import React from 'react'
import { View, Text } from 'react-native'
import { OptimizedFlatList } from 'react-native-optimized-flatlist'
import { globalStyles } from '../styles/global'

import ItemCart from '../components/ItemCart'
import CheckoutBar from '../components/CheckoutBar'
import Button from '../components/Button'

const DATA = []
export default function Cart(props) {
  if (DATA.length > 0) {
    return (
      <View style={globalStyles.container}>
        <OptimizedFlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => <ItemCart />}
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
        <Button text="SHOP NOW" />
      </View>
    )
  }
}
