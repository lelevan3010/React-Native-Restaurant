import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
import { Ionicons } from '@expo/vector-icons'
import OrderCounter from '../components/OrderCounter'

export default function ItemCart() {
  return (
    <TouchableOpacity style={styles.cartContainer}>
      <Image style={styles.image} source={require('../assets/burger.jpg')} />
      <View style={styles.details}>
        <View style={styles.horizontal}>
          <View>
            <Text style={globalStyles.boldText}>€100</Text>
            <Text style={globalStyles.normalText}>Burger</Text>
          </View>
          <Ionicons name="md-close-circle" size={24} />
        </View>
        <OrderCounter />
      </View>
    </TouchableOpacity>
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
