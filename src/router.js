import { createStackNavigator } from 'react-navigation'

import Home from './components/Home'
import Filters from './components/Filters'

export const Router = createStackNavigator(
  {
    Home: { screen: Home },
    Filters: { screen: Filters }
  },
  {
    initialRouteName: 'Home'
  }
)
