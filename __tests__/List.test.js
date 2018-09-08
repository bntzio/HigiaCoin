import React from 'react'
import renderer from 'react-test-renderer'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { shallow } from 'enzyme'

import List from './../src/components/List'
import ListItem from './../src/components/ListItem'

const cryptocurrencies = [
  { id: 1, name: 'Bitcoin' },
  { id: 2, name: 'Ethereum' },
  { id: 3, name: 'XRP' },
  { id: 4, name: 'Bitcoin Cash' },
  { id: 5, name: 'EOS' },
  { id: 6, name: 'Stellar' },
  { id: 7, name: 'Litecoin' },
  { id: 8, name: 'Tether' },
  { id: 9, name: 'Cardano' },
  { id: 10, name: 'Monero' }
]

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eb82a8'
  }
}

describe('List', () => {
  it('renders correctly', () => {
    const wrapper = (
      <PaperProvider theme={theme}>
        <List cryptocurrencies={cryptocurrencies} />
      </PaperProvider>
    )
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a scroll view', () => {
    const wrapper = shallow(<List cryptocurrencies={cryptocurrencies} />)
    expect(wrapper.find(ScrollView)).toHaveLength(1)
  })

  it('should render 10 list items', () => {
    const wrapper = shallow(<List cryptocurrencies={cryptocurrencies} />)
    expect(wrapper.find(ListItem)).toHaveLength(10)
  })

  it('should render Bitcoin first', () => {
    const wrapper = shallow(<List cryptocurrencies={cryptocurrencies} />)
    expect(
      wrapper
        .find(ListItem)
        .first()
        .props().title
    ).toBe('Bitcoin')
  })

  it('should render Monero last', () => {
    const wrapper = shallow(<List cryptocurrencies={cryptocurrencies} />)
    expect(
      wrapper
        .find(ListItem)
        .last()
        .props().title
    ).toBe('Monero')
  })
})
