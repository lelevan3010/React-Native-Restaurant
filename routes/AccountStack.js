import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { defaultOptions } from './DefaultOptions'

import Account from '../views/Account'

const screens = {
  Account: { screen: Account },
}

const AccountNavigator = createStackNavigator(screens, defaultOptions)

const AccountStack = createAppContainer(AccountNavigator)

export default AccountStack
