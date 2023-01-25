import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';

const PushNotification: React.FC<{handleStreamLiveProp: any}>= ({handleStreamLiveProp}) => {
  const [isLive, setIsLive] = useState(false);

  const askPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to receive push notifications was denied');
    } else {
      handleStreamLiveProp();
    }
  };

  const sendNotification = async () => {
    await askPermissions();
    const notification = {
      title: 'SLACKS RADIO IS LIVE',
      body: 'Tune in now!',
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      },
    };
    Notifications.scheduleNotificationAsync(notification);
  };

  const handleStreamLive = () => {
    setIsLive(true);
    sendNotification();
    handleStreamLiveProp(); 
  };

  return (
    <View>
      {isLive ? (
        <Text>Stream is live!</Text>
      ) : (
        <TouchableOpacity onPress={handleStreamLive}>
          <Text>Start stream</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PushNotification;
