import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { OptimizedFlatList } from 'react-native-optimized-flatlist' // render faster than FlatList
import { globalStyles } from '../styles/global'
import { db } from '../firebase/firebaseConfig'

import ItemMenu from '../components/ItemMenu'


export default function Home({ navigation }) {
  const [menu, setMenu] = useState([])

  useEffect( () => {
    let docRef = db.collection("menu")
    docRef.get().then(function(querySnapshot) {
      const menuList = []
      querySnapshot.forEach(doc => {
        const {title, price, ingridients, uri} = doc.data()
        menuList.push({
          id: doc.id,
          title,
          ingridients,
          price,
          uri
        })
      })
      setMenu(menuList)
    });
  })
  

  return (
    <View style={globalStyles.container}>
      <OptimizedFlatList
        showsVerticalScrollIndicator={false}
        data={menu}
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
