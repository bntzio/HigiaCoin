import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import {
  DefaultTheme,
  Provider as PaperProvider,
  List as PaperList
} from 'react-native-paper'

import ListItem from './../src/components/ListItem'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eb82a8'
  }
}

describe('ListItem', () => {
  it('renders correctly', () => {
    const wrapper = (
      <PaperProvider theme={theme}>
        <ListItem ranking={1} title={'Bitcoin'} />
      </PaperProvider>
    )
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the correct cryptocurrency icon', () => {
    const icon = (
      <PaperList.Icon
        icon={{
          uri: `https://rawgit.com/bntzio/HigiaCoin/master/assets/icons/32%402x/btc.png`
        }}
      />
    )
    const wrapper = shallow(<ListItem ranking={1} title={'Bitcoin'} />)
    expect(
      wrapper
        .find(PaperList.Item)
        .first()
        .prop('left')()
    ).toEqual(icon)
  })
})
