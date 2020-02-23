import React from 'react'
import { ActivityIndicator } from 'react-native'

const withSpinner = Component => ({ isLoaded, children, ...props }) => {
  if (!isLoaded) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center' }}
        size="large"
        color="#00000"
      />
    )
  } else {
    return <Component {...props}>{children}</Component>
  }
}

export default withSpinner
