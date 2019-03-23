import React, {Component} from 'react'

import {View, FlatList,} from 'react-native'

import Chat from './chat'

export default class ChatList extends Component{
  state={
    chats: [
      {
        name: 'Captain America',
        img: require('../img/cap.png'),
        msg: 'Hey Everyone !'
      },
      {
        name: 'Guardians of the Galaxy',
        img: require('../img/guardians.jpg'),
        msg: 'Hello!... Groot stop!'
      },
      {
        name: 'Iron Man',
        img: require('../img/iron-man.jpg'),
        msg: 'Some help here!'
      },
      {
        name: 'Liam Neeson',
        img: require('../img/liam-neeson.jpg'),
        msg: 'I will find you and I will kill you.'
      },
      {
        name: 'Mark Zuckerberg',
        img: require('../img/mark.jpg'),
        msg: '😃✌️    👍'
      },
      {
        name: 'Peter Parker (Spiderman)',
        img: require('../img/pete.jpg'),
        msg: 'With great power comes great responsibility 🤨'
      },
      {
        name: 'Thor',
        img: require('../img/thor.jpg'),
        msg: "Cause that's what heroes do 😎"
      },
    ]
  }

  render(){
    return (
      <FlatList
        data={this.state.chats}
        keyExtractor={(item, index)=> JSON.stringify(index)}
        renderItem={({item})=>{
          return (
            <Chat
                detail={item}
            />)
        } }
      />
    )
  }
}
