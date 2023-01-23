import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [socket] = useState(io('http://your-server-url.com'));

  useEffect(() => {
    socket.on('new message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // wipe the chat every 2 hours
  useEffect(() => {
    const wipeInterval = setInterval(() => {
      setMessages([]);
    }, 2 * 60 * 60 * 1000); // 2 hours in milliseconds

    return () => {
      clearInterval(wipeInterval);
    };
  }, []);

  const handleSend = () => {
    if (!name) {
      Alert.alert("Error", "Please enter your name first");
      return;
    }
    if (!text) {
      Alert.alert("Error", "Please enter a message");
      return;
    }
    const message = name + ': ' + text;
    socket.emit('new message', message);
    setMessages([...messages, message]);
    setText('');
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.nameInput}
        />
        <View>
        <TextInput
          placeholder="Enter your message"
          value={text}
          onChangeText={setText}
          autoCorrect={true}
          autoCapitalize={'sentences'}
          allowFontScaling={true}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'done'}
          multiline={false}
          dataDetectorTypes={'all'}
          textContentType={'none'}
          style={styles.messageInput}
        />
        </View>
        <View style={styles.sendButton}>
        <Button onPress={handleSend} title="Send"/>
        </View>
      </View>
      <View>
        {messages.map((message) => (
          <Text key={message}>{message}</Text>
        ))}
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bottomBar: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#CCCCFF",
    },
    sendButton: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#CCCCFF",
      position: 'relative',
           bottom:-767,
           left:0,
    },
    nameInput: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#ffffff",
      position: 'relative',
           bottom:-730,
           left:0,
    },
    messageInput: {
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#ffffff",
      position: 'relative',
           bottom:-750,
           left:0,
    }
})
