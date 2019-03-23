import React, {Component} from 'react'
import {
  Header, Container, StyleProvider, Left, Text,
  Body, Title, Tab, Tabs, Icon, TabHeading, Button,
  Right, Content
} from 'native-base'
import {StyleSheet, View} from 'react-native'
import CustomVariables from './native-base-theme/variables'
import getTheme from './native-base-theme/components'

import ChatList from './components/chatList'

export default class App extends Component{
  state = {
    page: 0,
    scrollWithoutAnimation: true
  }

  componentDidMount(){
    setTimeout(() => this.setState({ page: 1, scrollWithoutAnimation: false }), 0.1);
  }

  render(){
    let {page, scrollWithoutAnimation} = this.state

    return(
      <StyleProvider style={getTheme(CustomVariables)}>
        <Container>
          <Header hasTabs noShadow={true}>
            <Left>
              <Title>WhatsApp</Title>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='search' style={{fontSize: 20}} />
              </Button>
              <Button transparent>
                <Icon name='md-more' />
              </Button>
            </Right>
          </Header>

          <Tabs page={page} scrollWithoutAnimation={scrollWithoutAnimation}>
            <Tab heading={
              <TabHeading>
                <Icon name='camera' />
              </TabHeading>
            }>
              <Text>Take Pics</Text>
            </Tab>
            <Tab heading='CHATS'>
              <ChatList />
            </Tab>
            <Tab heading='STATUS'>
              <Text>Status</Text>
            </Tab>
            <Tab heading='CALLS'>
              <Text>Call me</Text>
            </Tab>
          </Tabs>

        </Container>
      </StyleProvider>
    )
  }
}
