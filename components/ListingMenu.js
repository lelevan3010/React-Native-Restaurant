import React from 'react'
import { OptimizedFlatList } from 'react-native-optimized-flatlist' // acts like FlatList

import ItemMenu from '../components/ItemMenu'

const ListingMenu = ({ menuData }) => {
  return (
    <OptimizedFlatList
      showsVerticalScrollIndicator={false}
      data={menuData}
      renderItem={({ item }) => {
        return (
          <ItemMenu
            onPress={() => navigation.navigate('ItemDetails')}
            uri={item.uri}
            title={item.title}
            ingridients={item.ingridients}
            price={item.price}
          />
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default ListingMenu
