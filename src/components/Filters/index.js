import React from 'react'
import PropTypes from 'prop-types'

import { DefaultTheme, Drawer } from 'react-native-paper'
import { View } from 'react-native'

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

  state = {
    active: undefined
  }

  goBack () {
    this.props.navigation.goBack()
  }

  render () {
    const { active } = this.state

    return (
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <Drawer.Section
          title='Filter by'
          theme={drawerTheme}
          style={{ marginTop: '9%' }}
        >
          <Drawer.Item
            label='Market Cap'
            active={active === 'first'}
            onPress={() => {
              this.setState({ active: 'first' })
              this.goBack()
            }}
          />
          <Drawer.Item
            label='Price'
            active={active === 'second'}
            onPress={() => {
              this.setState({ active: 'second' })
              this.goBack()
            }}
          />
          <Drawer.Item
            label='Volume (24H)'
            active={active === 'third'}
            onPress={() => {
              this.setState({ active: 'third' })
              this.goBack()
            }}
          />
        </Drawer.Section>
      </View>
    )
  }
}

Filters.propTypes = {
  navigation: PropTypes.object
}

export default Filters
