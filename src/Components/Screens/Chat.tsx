import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../Images/SlacksTextWhite.png')} style={styles.image} />
      </View>
      <View>
      <Text style={styles.messageText}>Slacks Radio is an inclusive station. We do not tolerate any racism, sexism or bullying. Please be a respectful member of our community.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.nameInput}
        />
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Message"
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
        <View style={styles.sendButtonContainer}>
          <Button onPress={handleSend} title="Send"/>
        </View>
      </View>
      <View style={styles.messagesContainer}>
        {messages.map((message) => (
          <Text key={message} style={styles.activeMessageText}>{message}</Text>
        ))}
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    inputContainer: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      padding: 10,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    textInputContainer: {
      flex: 1,
      marginLeft: 10,
    },
    nameInput: {
      height: 40,
      width: 150,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 5,
      fontSize: 16,
      allowFontScaling: true,
      alignSelf: 'stretch'
    },
    messageInput: {
      height: 40,
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 5,
      fontSize: 16,
      alignSelf: 'stretch',
  allowFontScaling: true
    },
    sendButtonContainer: {
      marginLeft: 10,
      padding: 10,
    },
    messagesContainer: {
      flex: 1,
      padding: 10,
      marginBottom: 50,
      marginTop: 50,
      paddingTop: 50,
    },
    activeMessageText: {
      fontSize: 16,
    },
    imageContainer: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        paddingTop: 50,
        backgroundColor: "#CCCCFF",
        alignSelf: 'stretch',
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
      },
      messageText: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'stretch',
       },
  });
      
      