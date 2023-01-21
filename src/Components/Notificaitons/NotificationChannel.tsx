import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'my_channel_id',
    channelName: 'My Channel',
    channelDescription: 'My channel for notifications',
    soundName: 'default',
    importance: 4,
    vibration: true
  },
  (created) => console.log('Channel created', created)
);