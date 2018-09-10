import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'

import Navbar from './../../components/Navbar'

class About extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Navbar title='About' backOnlyIcon navigation={navigation} />
  })

  render () {
    return (
      <ScrollView
        style={{ padding: 30, paddingTop: '25%', backgroundColor: 'white' }}
      >
        <Title style={{ marginBottom: 20 }}>About HigiaCoin</Title>
        <Paragraph style={{ fontSize: 16 }}>
          HigiaCoin is a React Native application that shows the top 10
          cryptocurrencies, it has the ability to filter the currencies and
          display more information about certain asset.
        </Paragraph>
        <Paragraph style={{ marginTop: 20, fontSize: 16 }}>
          I made HigiaCoin for a React Native developer position at Higia
          Technologies.
        </Paragraph>
        <Paragraph style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: '500' }}>
            Made with the following OSS libraries 🙌
          </Text>
          <View style={{ flexDirection: 'column', paddingTop: 15 }}>
            <Text>{`\u2022 React`}</Text>
            <Text>{`\u2022 React Native`}</Text>
            <Text>{`\u2022 Redux`}</Text>
            <Text>{`\u2022 React Redux`}</Text>
            <Text>{`\u2022 Expo`}</Text>
            <Text>{`\u2022 Styled Components`}</Text>
            <Text>{`\u2022 React Native Paper`}</Text>
            <Text>{`\u2022 React Navigation`}</Text>
            <Text>{`\u2022 Babel`}</Text>
            <Text>{`\u2022 Jest`}</Text>
            <Text>{`\u2022 Enzyme`}</Text>
            <Text>{`\u2022 ESLint`}</Text>
          </View>
        </Paragraph>
      </ScrollView>
    )
  }
}

export default About
