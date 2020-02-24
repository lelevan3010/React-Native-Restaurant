import React from 'react'
import TabNavigator from './routes/TabNavigator'

import { Provider } from './context/CartContext'

// Remove this later
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])

export default function App() {
  return (
    <Provider>
      <TabNavigator />
    </Provider>
  )
}
