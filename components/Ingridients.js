import React from 'react'
import { View } from 'react-native'
import { renderIngridients } from '../utils/renderIngridients'

export default function Ingridients({ ingridients }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {renderIngridients(ingridients)}
    </View>
  )
}
