import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import HomeStack from './HomeStack'
import CartStack from './CartStack'
import AboutStack from './AboutStack'
import AccountStack from './AccountStack'

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state
  let IconComponent = MaterialIcons
  let iconName
  switch (routeName) {
    case 'Home':
      iconName = `home`
      break
    case 'Cart':
      iconName = `shopping-cart`
      break
    case 'About':
      iconName = `info`
      break
    case 'Account':
      iconName = `account-circle`
      break
    default:
      break
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />
}

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Cart: { screen: CartStack },
      About: { screen: AboutStack },
      Account: { screen: AccountStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => getTabBarIcon(navigation, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#04b33e',
        inactiveTintColor: '#333',
      },
    },
  ),
)
