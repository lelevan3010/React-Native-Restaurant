import React from 'react'
import { View } from 'react-native'
import { OptimizedFlatList } from 'react-native-optimized-flatlist' // render faster than FlatList
import { DATA } from '../json/data' // test data
import { globalStyles } from '../styles/global'

import ItemMenu from '../components/ItemMenu'

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <OptimizedFlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <ItemMenu
            onPress={() => navigation.navigate('ItemDetails')}
            uri={item.uri}
            title={item.title}
            ingridients={item.ingridients}
            price={item.price}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}
