import React from 'react'
import { View } from 'react-native'
import { OptimizedFlatList } from 'react-native-optimized-flatlist' // render faster than FlatList
import { globalStyles } from '../styles/global'
import { db } from '../firebase/firebaseConfig'

import ItemMenu from '../components/ItemMenu'


export default class  Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      menu: []
    }
  }

  componentDidMount(){
    let docRef = db.collection("menu")
    const menuList = []
    docRef.get().then((querySnapshot) => { // Use Arrow function for binding, or this.setState() won't work
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
      this.setState({menu: menuList})
    });
  }
  

  render (){
    return(
    <View style={globalStyles.container}>
      <OptimizedFlatList
        showsVerticalScrollIndicator={false}
        data={this.state.menu}
        renderItem={({ item }) =>{
        return(
          <ItemMenu
            onPress={() => navigation.navigate('ItemDetails')}
            uri={item.uri}
            title={item.title}
            ingridients={item.ingridients}
            price={item.price}
          />
        )}}
        keyExtractor={item => item.id.toString()}
      />
    </View>)
  }
}
