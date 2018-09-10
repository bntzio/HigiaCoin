import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List as PaperList, TouchableRipple } from 'react-native-paper'

import { showCryptoModal } from './../../actions/CryptosActions'

const ListItem = ({
  navigation,
  ranking,
  title,
  symbol,
  price,
  volume,
  marketCap,
  circulatingSupply,
  maxSupply,
  showCryptoModal
}) => {
  return (
    <TouchableRipple
      onPress={() => {
        showCryptoModal({
          title,
          symbol,
          marketCap,
          price,
          volume,
          circulatingSupply,
          maxSupply
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
  maxSupply: PropTypes.number,
  showCryptoModal: PropTypes.func
}

export default connect(
  null,
  { showCryptoModal }
)(ListItem)
