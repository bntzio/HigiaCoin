import React from 'react'
import PropTypes from 'prop-types'
import { List as PaperList } from 'react-native-paper'

const renderIcon = title => {
  switch (title) {
    case 'Bitcoin':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/btc.png')}
        />
      )
    case 'Ethereum':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/eth.png')}
        />
      )
    case 'XRP':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/xrp.png')}
        />
      )
    case 'Bitcoin Cash':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/bch.png')}
        />
      )
    case 'EOS':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/eos.png')}
        />
      )
    case 'Stellar':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/xlm.png')}
        />
      )
    case 'Litecoin':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/ltc.png')}
        />
      )
    case 'Tether':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/usdt.png')}
        />
      )
    case 'Cardano':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/ada.png')}
        />
      )
    case 'Monero':
      return (
        <PaperList.Icon
          icon={require('./../../../assets/icons/32@2x/xmr.png')}
        />
      )
  }
}

const ListItem = ({ ranking, title }) => {
  return (
    <PaperList.Item
      title={`${ranking}. ${title}`}
      left={() => renderIcon(title)}
    />
  )
}

ListItem.propTypes = {
  ranking: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default ListItem
