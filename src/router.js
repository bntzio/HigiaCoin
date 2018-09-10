import { createStackNavigator } from 'react-navigation'

import Home from './components/Home'
import Filters from './components/Filters'
import Detail from './components/Detail'

export const Router = createStackNavigator(
  {
    Home: { screen: Home },
    Filters: { screen: Filters },
    Detail: { screen: Detail }
  },
  {
    initialRouteName: 'Home'
  }
)
