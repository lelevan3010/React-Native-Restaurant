import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { defaultOptions } from './DefaultOptions'

import About from '../views/About'

const screens = {
  About: { screen: About },
}

const AboutNavigator = createStackNavigator(screens, defaultOptions)

const AboutStack = createAppContainer(AboutNavigator)

export default AboutStack
