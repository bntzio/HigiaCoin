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
        <Text>{`Title: ${title}`}</Text>
        <Text>{`Symbol: ${symbol}`}</Text>
        <Text>{`Market Cap: ${marketCap || 'Not Available'}`}</Text>
        <Text>{`Price: ${price}`}</Text>
        <Text>{`Volume (24H): ${volume || 'Not Available'}`}</Text>
        <Text>
          {`Circulating Supply: ${circulatingSupply || 'Not Available'}`}
        </Text>
        <Text>{`Max Supply: ${maxSupply || 'Not Available'}`}</Text>
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
