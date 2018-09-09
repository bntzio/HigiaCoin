import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { List as PaperList } from 'react-native-paper'

import ListItem from './../ListItem'

const renderItems = cryptocurrencies => {
  return cryptocurrencies.map((cryptocurrency, i) => {
    const { id, name, symbol } = cryptocurrency
    return <ListItem key={id} ranking={++i} title={name} symbol={symbol} />
  })
}

const List = ({ cryptocurrencies }) => (
  <ScrollView style={{ marginTop: '20%', backgroundColor: 'white' }}>
    <PaperList.Section>{renderItems(cryptocurrencies)}</PaperList.Section>
  </ScrollView>
)

List.propTypes = {
  cryptocurrencies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default List
