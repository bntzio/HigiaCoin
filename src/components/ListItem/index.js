import React from 'react'
import PropTypes from 'prop-types'
import { List as PaperList } from 'react-native-paper'

const getCurrencyCode = title => {
  switch (title) {
    case 'Bitcoin':
      return 'BTC'
    case 'Ethereum':
      return 'ETH'
    case 'XRP':
      return 'XRP'
    case 'Bitcoin Cash':
      return 'BCH'
    case 'EOS':
      return 'EOS'
    case 'Stellar':
      return 'XLM'
    case 'Litecoin':
      return 'LTC'
    case 'Tether':
      return 'USDT'
    case 'Cardano':
      return 'ADA'
    case 'Monero':
      return 'XMR'
  }
}

const ListItem = ({ ranking, title }) => {
  const code = getCurrencyCode(title)

  return (
    <PaperList.Item
      title={`${ranking}. ${title}`}
      left={() => (
        <PaperList.Icon
          icon={{
            uri: `https://rawgit.com/bntzio/HigiaCoin/master/assets/icons/32%402x/${code.toLowerCase()}.png`
          }}
        />
      )}
    />
  )
}

ListItem.propTypes = {
  ranking: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default ListItem
