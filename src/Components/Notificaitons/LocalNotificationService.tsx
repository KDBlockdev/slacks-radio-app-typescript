import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

const localNotificationService = {
  showLocalNotification: (title: string, body: string) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: 'default',
      },
      trigger: {
        seconds: 1,
      },
    });
  },
};

export default localNotificationService;