import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import localNotificationService from './LocalNotificationService';

const PushNotification = () => {
  const [pushToken, setPushToken] = useState<string | undefined>(undefined);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(undefined);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync();
    localNotificationService.configure(onOpenNotification);
  }, []);

  useEffect(() => {
    setIsNotificationEnabled(notification ? true : false);
  }, [notification]);

  const onOpenNotification = (notification: Notifications.Notification | undefined) => {
    console.log('onOpenNotification', notification);
    setNotification(notification);
  };

  const registerForPushNotificationsAsync = async () => {
    try {
      if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        const token = await Notifications.getExpoPushTokenAsync();
        console.log('Token:', token);
        setPushToken(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const handleNotification = (notification: Notifications.Notification) => {
    console.log('handleNotification', notification);
    setNotification(notification);
    if (Platform.OS === 'android') {
      const localNotification = {
        title: notification.data.title,
        body: notification.data.body,
        sound: true,
        priority: 'high',
        vibrate: true,
      };
      localNotificationService.showLocalNotification(localNotification);
    }
  };

  return null;
};

export default PushNotification;
