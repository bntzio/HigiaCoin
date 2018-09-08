import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Navbar from './src/components/Navbar'
import List from './src/components/List'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eb82a8'
  }
}

const cryptocurrencies = [
  { id: 1, name: 'Bitcoin' },
  { id: 2, name: 'Ethereum' },
  { id: 3, name: 'XRP' },
  { id: 4, name: 'Bitcoin Cash' },
  { id: 5, name: 'EOS' },
  { id: 6, name: 'Stellar' },
  { id: 7, name: 'Litecoin' },
  { id: 8, name: 'Tether' },
  { id: 9, name: 'Cardano' },
  { id: 10, name: 'Monero' }
]

export default class App extends React.Component {
  render () {
    return (
      <PaperProvider theme={theme}>
        <Navbar
          title='Top 20 Cryptocurrencies'
          color='white'
          icon='filter-list'
        />
        <List cryptocurrencies={cryptocurrencies} />
      </PaperProvider>
    )
  }
}
