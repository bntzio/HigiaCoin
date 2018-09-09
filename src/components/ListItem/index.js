import React from 'react'
import PropTypes from 'prop-types'
import { List as PaperList, TouchableRipple } from 'react-native-paper'

const ListItem = ({ ranking, title, symbol }) => {
  return (
    <TouchableRipple
      onPress={() => console.log('Pressed')}
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
  ranking: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
}

export default ListItem
