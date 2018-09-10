import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import _ from 'lodash'

import Navbar from './../Navbar'
import List from './../List'

import { renderCryptos } from './../../actions/CryptosActions'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff'
  }
}

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <PaperProvider theme={theme}>
        <Navbar
          title='Top Cryptocurrencies'
          subtitle={`By ${navigation.getParam('selectedFilter') ||
            'Market Cap'}`}
          color='black'
          icon='filter-list'
          navigation={navigation}
        />
      </PaperProvider>
    )
  })

  componentDidUpdate (prevProps) {
    const { activeFilter, renderCryptos } = this.props

    if (prevProps.activeFilter !== activeFilter) {
      return this.fetchAndSortCryptos(activeFilter)
        .then(cryptocurrencies => renderCryptos({ cryptocurrencies }))
        .catch(e => alert(e))
    }
  }

  componentDidMount () {
    const { activeFilter, renderCryptos } = this.props

    return this.fetchAndSortCryptos(activeFilter)
      .then(cryptocurrencies => renderCryptos({ cryptocurrencies }))
      .catch(e => alert(e))
  }

  async fetchAndSortCryptos (filter) {
    switch (filter) {
      case 'Market Cap':
        const capCoins = await fetch(
          'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank'
        )
          .then(response => response.json())
          .then(values => values.data)
          .catch(e => e)

        return _.orderBy(capCoins, ['rank'], ['asc'])
      case 'Price':
        const priceCoins = await fetch(
          'https://api.coinmarketcap.com/v2/ticker'
        )
          .then(response => response.json())
          .then(values => values.data)
          .catch(e => e)

        return _.orderBy(priceCoins, ['quotes.USD.price'], ['desc']).slice(
          0,
          10
        )
      case 'Volume':
        const volumeCoins = await fetch(
          'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=volume_24h'
        )
          .then(response => response.json())
          .then(values => values.data)
          .catch(e => e)

        return _.orderBy(volumeCoins, ['quotes.USD.volume_24h'], ['desc'])
    }
  }

  render () {
    const { cryptocurrencies } = this.props

    return (
      <PaperProvider theme={theme}>
        <List cryptocurrencies={cryptocurrencies} />
      </PaperProvider>
    )
  }
}

Home.propTypes = {
  cryptocurrencies: PropTypes.array,
  activeFilter: PropTypes.string,
  renderCryptos: PropTypes.func
}

const mapStateToProps = state => {
  const { activeFilter } = state.filters
  const { cryptocurrencies } = state.cryptos

  return { cryptocurrencies, activeFilter }
}

export default connect(
  mapStateToProps,
  {
    renderCryptos
  }
)(Home)
