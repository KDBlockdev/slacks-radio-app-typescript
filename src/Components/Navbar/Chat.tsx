import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as io from 'socket.io-client';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [socket, setSocket] = useState<io.Socket | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const socket = io.connect('http://yourserver.com');
    setSocket(socket);
    socket.on('connect', () => {
      setError('');
    });
    socket.on('disconnect', () => {
      setError('Disconnected from the server');
    });
    socket.on('error', (err: any) => {
      setError(err);
    });
    socket.on('message', (data: { name: string; message: string }) => {
      setMessages([...messages, `${data.name}: ${data.message}`]);
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('error');
      socket.off('message');
      socket.disconnect();
    };
  }, [messages]);

  const handleSubmit = () => {
    if (!name) {
      alert('Please enter your name before sending message');
      return;
    }
    if (!message) {
      alert('Please enter your message');
      return;
    }
    if (!socket) {
      alert('Socket not connected to the server');
      return;
    }
    socket.emit('message', { name, message });
    setMessage('');
  };

  return (
    <View>
    {error && <Text>{error}</Text>}
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
 </View>)}

 export default Chat;