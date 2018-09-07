import React from 'react'
import PropTypes from 'prop-types'
import { Appbar } from 'react-native-paper'

const Navbar = ({ title, color, icon }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} color={color} titleStyle={styles.title} />
      {icon ? <Appbar.Action icon={icon} color={color} /> : null}
    </Appbar.Header>
  )
}

const styles = {
  title: {
    fontWeight: '500'
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.string
}

export default Navbar
