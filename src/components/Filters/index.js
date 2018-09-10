import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DefaultTheme, Drawer } from 'react-native-paper'
import { View } from 'react-native'

import { selectFilter } from './../../actions/FiltersActions'

const drawerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'gray'
  }
}

class Filters extends React.Component {
  static navigationOptions = {
    header: null
  }

  onFilterItems (filter) {
    const { navigation, selectFilter } = this.props
    selectFilter(filter)
    navigation.navigate('Home', { selectedFilter: filter })
  }

  render () {
    return (
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <Drawer.Section
          title='Filter by'
          theme={drawerTheme}
          style={{ marginTop: '9%' }}
        >
          <Drawer.Item
            label='Market Cap'
            onPress={() => this.onFilterItems('Market Cap')}
          />
          <Drawer.Item
            label='Price'
            onPress={() => this.onFilterItems('Price')}
          />
          <Drawer.Item
            label='Volume (24H)'
            onPress={() => this.onFilterItems('Volume')}
          />
        </Drawer.Section>
      </View>
    )
  }
}

Filters.propTypes = {
  navigation: PropTypes.object,
  selectFilter: PropTypes.func
}

export default connect(
  null,
  {
    selectFilter
  }
)(Filters)
