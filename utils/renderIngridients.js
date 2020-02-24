import React from 'react'
import { Text } from 'react-native'
import { globalStyles } from '../styles/global'

// render sthing like this: chicken, beef, egg, carbage.
export const renderIngridients = ingridients => {
  const ingridientsLength = ingridients.length

  return ingridients.map((el, index) => {
    if (ingridientsLength === index + 1) {
      return (
        <Text style={globalStyles.thinText} key={index + 100}>
          {el + '.'}
        </Text>
      )
    } else {
      return (
        <Text style={globalStyles.thinText} key={index + 100}>
          {el + ', '}
        </Text>
      )
    }
  })
}
