import React from 'react'
import { OptimizedFlatList } from 'react-native-optimized-flatlist' // acts like FlatList

import ItemMenu from '../components/ItemMenu'

const ListingMenu = ({ menuData, navigation }) => {
  console.log(menuData)
  return (
    <OptimizedFlatList
      showsVerticalScrollIndicator={false}
      data={menuData}
      renderItem={({ item }) => {
        return (
          <ItemMenu
            onPress={() =>
              navigation.navigate('ItemDetails', {
                id: item.id,
                title: item.title,
                uri: item.uri,
                ingridients: item.ingridients,
                price: item.price,
              })
            }
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
