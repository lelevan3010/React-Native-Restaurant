import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { defaultOptions } from './DefaultOptions'

import Home from '../views/Home'
import Category from '../views/Category'
import Cart from '../views/Cart'
import ItemDetails from '../views/ItemDetails'

const screens = {
  Appetize: { screen: Home },
  Category: { screen: Category },
  Cart: { screen: Cart },
  ItemDetails: { screen: ItemDetails },
}

const HomeNavigator = createStackNavigator(screens, defaultOptions)

const HomeStack = createAppContainer(HomeNavigator)

export default HomeStack
