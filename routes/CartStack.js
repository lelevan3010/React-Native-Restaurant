import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { defaultOptions } from './DefaultOptions'

import Cart from '../views/Cart'
import Home from '../views/Home'

const screens = {
  Cart: { screen: Cart },
}

const CartNavigator = createStackNavigator(screens, defaultOptions)

const CartStack = createAppContainer(CartNavigator)

export default CartStack
