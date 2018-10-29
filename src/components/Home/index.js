import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import CodePush from 'react-native-code-push'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  Card,
  Title,
  Paragraph
} from 'react-native-paper'
import _ from 'lodash'

import Navbar from './../Navbar'
import List from './../List'

import {
  renderCryptos,
  hideCryptoModal,
  cryptosAreLoading
} from './../../actions/CryptosActions'

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
      <Navbar
        title='Top Cryptocurrencies'
        subtitle={`By ${navigation.getParam('selectedFilter') || 'Market Cap'}`}
        icon='menu'
        navigation={navigation}
      />
    )
  })

  componentDidUpdate (prevProps) {
    const { activeFilter, renderCryptos, cryptosAreLoading } = this.props

    if (prevProps.activeFilter !== activeFilter) {
      cryptosAreLoading(true)
      return this.fetchAndSortCryptos(activeFilter)
        .then(cryptocurrencies => {
          cryptosAreLoading(false)
          renderCryptos({ cryptocurrencies })
        })
        .catch(e => alert(e))
    }
  }

  componentDidMount () {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    })

    const { activeFilter, renderCryptos, cryptosAreLoading } = this.props

    return this.fetchAndSortCryptos(activeFilter)
      .then(cryptocurrencies => {
        cryptosAreLoading(false)
        renderCryptos({ cryptocurrencies })
      })
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

  goToDetailScreen (info) {
    this.props.navigation.navigate('Detail', { info })
    this.props.hideCryptoModal()
  }

  renderModal (info) {
    return (
      <TouchableOpacity
        style={styles.outerModal}
        onPress={() => this.props.hideCryptoModal()}
      >
        <Card style={styles.innerModal} elevation={2} onPress={i => i}>
          <Card.Content>
            <Image
              style={styles.icon}
              source={{
                uri: `https://rawgit.com/bntzio/HigiaCoin/master/assets/icons/32%402x/${info.symbol.toLowerCase()}.png`
              }}
            />
            <Title style={styles.title}>{`${info.title} (${
              info.symbol
            })`}</Title>
            <View style={styles.paragraphsContainer}>
              <Paragraph style={styles.paragraph}>
                <Text style={styles.paragraphTitle}>Market Cap:</Text>{' '}
                {info.marketCap || 'Not Available'}
              </Paragraph>
              <Paragraph style={styles.paragraph}>
                <Text style={styles.paragraphTitle}>Price:</Text>{' '}
                {info.price || 'Not Available'}
              </Paragraph>
              <Paragraph style={styles.paragraph}>
                <Text style={styles.paragraphTitle}>Volume (24H):</Text>{' '}
                {info.volume || 'Not Available'}
              </Paragraph>
            </View>
          </Card.Content>
          <Card.Actions style={styles.buttonContainer}>
            <Button
              mode='contained'
              dark
              color='black'
              onPress={() => this.goToDetailScreen(info)}
              style={styles.button}
            >
              MORE STATS
            </Button>
          </Card.Actions>
        </Card>
      </TouchableOpacity>
    )
  }

  render () {
    const { cryptocurrencies, modalOpen, modalInfo } = this.props

    return (
      <PaperProvider theme={theme}>
        <List cryptocurrencies={cryptocurrencies} />
        {modalOpen ? this.renderModal(modalInfo) : null}
      </PaperProvider>
    )
  }
}

const styles = {
  outerModal: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .20)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  innerModal: {
    position: 'absolute',
    borderRadius: 2,
    backgroundColor: 'white',
    top: '25%',
    right: '10%',
    left: '10%',
    height: '50%'
  },
  icon: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    marginTop: 15
  },
  title: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  paragraphsContainer: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 15
  },
  paragraph: {
    fontSize: 16
  },
  paragraphTitle: {
    fontWeight: '500'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0
  },
  button: {
    flex: 1,
    borderRadius: 2
  }
}

Home.propTypes = {
  cryptocurrencies: PropTypes.array,
  activeFilter: PropTypes.string,
  renderCryptos: PropTypes.func,
  modalOpen: PropTypes.bool,
  modalInfo: PropTypes.object,
  hideCryptoModal: PropTypes.func,
  navigation: PropTypes.object,
  cryptosAreLoading: PropTypes.func
}

const mapStateToProps = state => {
  const { activeFilter } = state.filters
  const { cryptocurrencies, modalOpen, modalInfo } = state.cryptos

  return { cryptocurrencies, activeFilter, modalOpen, modalInfo }
}

export default connect(
  mapStateToProps,
  {
    renderCryptos,
    hideCryptoModal,
    cryptosAreLoading
  }
)(withNavigation(Home))
