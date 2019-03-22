import React, {Component} from 'react'
import {
  Header, Container, StyleProvider, Left, Text,
  Body, Title, Tab, Tabs, Icon, TabHeading, Button,
  Right
} from 'native-base'
import {StyleSheet} from 'react-native'
import CustomVariables from './native-base-theme/variables'
import getTheme from './native-base-theme/components'


export default class App extends Component{
  render(){
    return(
      <StyleProvider style={getTheme(CustomVariables)}>
        <Container>
          <Header hasTabs androidStatusBarColor='#054E47'>
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
          <Tabs initialPage={1}>
            <Tab heading={
              <TabHeading>
                <Icon name='camera' />
              </TabHeading>
            }>
              <Text>Take Pics</Text>
            </Tab>
            <Tab heading='CHATS'>
              <Text>Chat List</Text>
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
