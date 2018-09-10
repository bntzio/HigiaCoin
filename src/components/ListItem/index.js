import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { List as PaperList, TouchableRipple } from 'react-native-paper'

const ListItem = ({
  navigation,
  ranking,
  title,
  symbol,
  price,
  volume,
  marketCap,
  circulatingSupply,
  maxSupply
}) => {
  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate('Detail', {
          info: {
            title,
            symbol,
            price,
            volume,
            marketCap,
            circulatingSupply,
            maxSupply
          }
        })
      }}
      rippleColor='rgba(0, 0, 0, .10)'
    >
      <PaperList.Item
        title={`${ranking}. ${title}`}
        left={() => (
          <PaperList.Icon
            icon={{
              uri: `https://rawgit.com/bntzio/HigiaCoin/master/assets/icons/32%402x/${symbol.toLowerCase()}.png`
            }}
          />
        )}
      />
    </TouchableRipple>
  )
}

ListItem.propTypes = {
  navigation: PropTypes.object,
  ranking: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number,
  marketCap: PropTypes.number,
  circulatingSupply: PropTypes.number,
  maxSupply: PropTypes.number
}

export default withNavigation(ListItem)
