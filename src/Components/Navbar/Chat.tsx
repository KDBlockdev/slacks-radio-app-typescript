import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name) {
      alert('Please enter your name before sending message');
      return;
    }
    if (!message) {
      alert('Please enter your message');
      return;
    }
    setMessages([...messages, `${name}: ${message}`]);
    setMessage('');
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <View>
        {messages.map((m, i) => (
          <Text key={i}>{m}</Text>
        ))}
      </View>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here"
      />
      <Button title="Send" onPress={handleSubmit} />
    </View>
  );
};

export default Chat;