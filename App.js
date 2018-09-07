import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Navbar from './src/components/Navbar'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eb82a8'
  }
}

export default class App extends React.Component {
  render () {
    return (
      <PaperProvider theme={theme}>
        <Navbar
          title='Top 20 Cryptocurrencies'
          color='white'
          icon='filter-list'
        />
      </PaperProvider>
    )
  }
}
