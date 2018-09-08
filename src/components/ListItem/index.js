import React from 'react'
import PropTypes from 'prop-types'
import { List as PaperList } from 'react-native-paper'

const ListItem = ({ ranking, title, symbol }) => {
  return (
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
  )
}

ListItem.propTypes = {
  ranking: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
}

export default ListItem
