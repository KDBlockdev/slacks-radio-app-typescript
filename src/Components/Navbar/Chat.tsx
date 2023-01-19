import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <View>
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