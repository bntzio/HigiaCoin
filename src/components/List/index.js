import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'

import ListItem from './../ListItem'

const renderItems = cryptocurrencies => {
  return cryptocurrencies.map(cryptocurrency => {
    const { id, name } = cryptocurrency

    return <ListItem key={id} ranking={id} title={name} />
  })
}

const List = ({ cryptocurrencies }) => (
  <ScrollView>{renderItems(cryptocurrencies)}</ScrollView>
)

List.propTypes = {
  cryptocurrencies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default List
