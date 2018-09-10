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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff'
  }
}

const Navbar = props => {
  const {
    title,
    subtitle,
    color,
    icon,
    backWithText,
    backOnlyIcon,
    navigation,
    hideCryptoModal
  } = props

  return (
    <PaperProvider theme={theme}>
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
              color='black'
              onPress={() => navigation.goBack()}
            />
            <Text style={{ fontWeight: '500' }}>Back</Text>
          </View>
        ) : null}
        {backOnlyIcon ? (
          <Appbar.BackAction
            color='black'
            onPress={() => navigation.goBack()}
          />
        ) : null}
        {title && subtitle ? (
          <Appbar.Content
            title={title}
            subtitle={subtitle}
            color={color}
            titleStyle={styles.title}
          />
        ) : null}
        {title && !subtitle ? (
          <Appbar.Content
            title={title}
            color={color}
            titleStyle={styles.title}
          />
        ) : null}
        {icon ? (
          <Appbar.Action
            icon={icon}
            color={color}
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
  color: PropTypes.string,
  icon: PropTypes.string,
  navigation: PropTypes.object,
  backWithText: PropTypes.bool,
  backOnlyIcon: PropTypes.bool,
  hideCryptoModal: PropTypes.func
}

export default connect(
  null,
  { hideCryptoModal }
)(Navbar)
