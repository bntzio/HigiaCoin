import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import {
  Appbar,
  DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper'

import { hideCryptoModal } from './../../actions/CryptosActions'

const Navbar = props => {
  const {
    title,
    subtitle,
    icon,
    backWithText,
    backOnlyIcon,
    navigation,
    hideCryptoModal,
    darkModeEnabled
  } = props

  const theme = () => {
    if (darkModeEnabled) {
      return {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#000'
        }
      }
    }
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '#fff'
      }
    }
  }

  return (
    <PaperProvider theme={theme()}>
      <Appbar.Header>
        {backWithText ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Appbar.BackAction
              color={darkModeEnabled ? 'white' : ''}
              onPress={() => navigation.goBack()}
            />
            <Text style={{ fontWeight: '500' }}>Back</Text>
          </View>
        ) : null}
        {backOnlyIcon ? (
          <Appbar.BackAction
            color={darkModeEnabled ? 'white' : 'black'}
            onPress={() => navigation.goBack()}
          />
        ) : null}
        {title && subtitle ? (
          <Appbar.Content
            title={title}
            subtitle={subtitle}
            color={darkModeEnabled ? 'white' : 'black'}
            titleStyle={styles.title}
          />
        ) : null}
        {title && !subtitle ? (
          <Appbar.Content
            title={title}
            color={darkModeEnabled ? 'white' : 'black'}
            titleStyle={styles.title}
          />
        ) : null}
        {icon ? (
          <Appbar.Action
            icon={icon}
            color={darkModeEnabled ? 'white' : 'black'}
            onPress={() => {
              navigation.navigate('Filters')
              hideCryptoModal()
            }}
          />
        ) : null}
      </Appbar.Header>
    </PaperProvider>
  )
}

const styles = {
  title: {
    fontWeight: '500'
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  navigation: PropTypes.object,
  backWithText: PropTypes.bool,
  backOnlyIcon: PropTypes.bool,
  hideCryptoModal: PropTypes.func,
  darkModeEnabled: PropTypes.bool
}

const mapStateToProps = state => {
  const { darkModeEnabled } = state.settings

  return { darkModeEnabled }
}

export default connect(
  mapStateToProps,
  { hideCryptoModal }
)(Navbar)
