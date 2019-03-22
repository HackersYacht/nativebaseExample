import React, {Component} from 'react'
import {
  Container, Header, Content, Button, Text, Form, Input, Item, Label,
  Left, Right, Body, Title, Icon
} from 'native-base'

export default class App extends Component{
  render(){
    return (
      <Container>
        <Header androidStatusBarColor='#054E47'
          style={{backgroundColor: '#006257'}} >
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
        <Content>
          <Form >
            <Item floatingLabel>
              <Label> Full Name </Label>
              <Input autoFocus />
            </Item>
            <Item floatingLabel>
              <Label> Password </Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}
