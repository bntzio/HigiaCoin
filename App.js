import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import _ from 'lodash'

import Navbar from './src/components/Navbar'
import List from './src/components/List'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eb82a8'
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cryptocurrencies: []
    }
  }

  componentDidMount () {
    const cryptos = this.fetchCryptos()
    cryptos
      .then(res => {
        const cryptocurrencies = this.sortByRank(res.data)
        this.setState({ cryptocurrencies })
      })
      .catch(err => console.log(err))
  }

  fetchCryptos () {
    return fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank')
      .then(response => response.json())
      .catch(error => new Error(error))
  }

  sortByRank (cryptos) {
    const cryptoList = []
    for (let key in cryptos) {
      cryptoList.push(cryptos[key])
    }
    return _.orderBy(cryptoList, ['rank'], ['asc'])
  }

  render () {
    const { cryptocurrencies } = this.state

    return (
      <PaperProvider theme={theme}>
        <Navbar
          title='Top 10 Cryptocurrencies'
          color='white'
          icon='filter-list'
        />
        <List cryptocurrencies={cryptocurrencies} />
      </PaperProvider>
    )
  }
}
