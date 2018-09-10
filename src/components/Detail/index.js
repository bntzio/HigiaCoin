import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

import Navbar from './../Navbar'

class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Navbar
        title={`${navigation.getParam('info').title}`}
        backOnlyIcon
        navigation={navigation}
      />
    )
  })

  renderInfo () {
    const { navigation } = this.props

    const info = navigation.getParam('info')

    const {
      title,
      symbol,
      price,
      volume,
      marketCap,
      circulatingSupply,
      maxSupply
    } = info

    return (
      <View style={{ padding: '8%', paddingTop: '8%' }}>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Currency: </Text>
          {title}
        </Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Symbol: </Text>
          {symbol}
        </Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Market Cap: </Text>
          {`$${marketCap}`}
        </Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Price: </Text>
          {`$${price}`}
        </Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Volume (24H): </Text>
          {`$${volume || 'Not Available'}`}
        </Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Circulating Supply: </Text>
          {circulatingSupply || 'Not Available'}
        </Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ fontWeight: '500' }}>Max Supply: </Text>
          {maxSupply || 'Not Available'}
        </Text>
      </View>
    )
  }
  render () {
    return (
      <View
        style={{ marginTop: '20%', height: '100%', backgroundColor: 'white' }}
      >
        {this.renderInfo()}
      </View>
    )
  }
}

Detail.propTypes = {
  navigation: PropTypes.object
}

export default withNavigation(Detail)
