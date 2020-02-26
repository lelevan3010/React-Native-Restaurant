import React from 'react'
import { View } from 'react-native'
import { globalStyles } from '../styles/global'
import { db } from '../firebase/firebaseConfig'

import withSpinner from '../hoc/withSpinner'
import ListingMenu from '../components/ListingMenu'

const ListingMenuWithSpinner = withSpinner(ListingMenu)
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      menu: [],
    }
  }

  // Use lyfe-cycle method to avoid side-effect of hooks
  componentDidMount() {
    let docRef = db.collection('menu')
    const menuList = []
    docRef.get().then(querySnapshot => {
      // Use Arrow function for binding, or this.setState() won't work
      querySnapshot.forEach(doc => {
        const { title, price, ingridients, uri } = doc.data()
        menuList.push({
          id: doc.id,
          title,
          ingridients,
          price,
          uri,
        })
      })
      this.setState({ isLoaded: true, menu: menuList })
    })
  }

  // componentWillMount() {
  //   this.props.navigation.setParams({
  //     scrollToTop: this._scrollToTop,
  //   })
  // }

  // // Scroll to top, using FlatList from react-navigation
  // _scrollToTop = () => {
  //   if (!!this.refComponent) {
  //     this.refComponent.scrollToOffset({ offset: 0, animated: true })
  //   }
  // }

  render() {
    const { isLoaded, menu } = this.state
    const { navigation } = this.props

    return (
      <View style={globalStyles.container}>
        <ListingMenuWithSpinner
          isLoaded={isLoaded}
          menuData={menu}
          navigation={navigation}
        />
      </View>
    )
  }
}

export default Home
