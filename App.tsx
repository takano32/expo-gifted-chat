import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

export default function Example() {
  const [messages] = useState([])

  return (
    <GiftedChat
      messages={messages}
      user={{
        _id: 1,
      }}
    />
  )
}
