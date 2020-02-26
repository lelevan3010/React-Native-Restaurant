import React, { useContext } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/global'
import HomeStack from '../routes/HomeStack'

import ItemCart from '../components/ItemCart'
import CheckoutBar from '../components/CheckoutBar'
import Button from '../components/Button'

import { CartContext } from '../context/CartContext'

export default function Cart({ navigation }) {
  const { cartItems } = useContext(CartContext)

  if (cartItems.length > 0) {
    return (
      <View style={globalStyles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* Got issue with OptimizedFlatList so replace it with FlatList */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
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
        </SafeAreaView>
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
        <Button
          text="SHOP NOW"
          onPress={() => {
            if (HomeStack) navigation.popToTop('Home')
            navigation.navigate('Home')
          }}
        />
      </View>
    )
  }
}
