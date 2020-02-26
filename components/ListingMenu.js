import React from 'react'
import { FlatList } from 'react-navigation'
import ItemMenu from '../components/ItemMenu'
import useScrollToTop from '../customHooks/useScrollToTop'

const ListingMenu = ({ menuData, navigation }) => {
  const listRef = useScrollToTop(navigation)

  return (
    <FlatList
      ref={listRef}
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
