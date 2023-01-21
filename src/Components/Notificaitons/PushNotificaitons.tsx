import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import PushNotification, { LocalNotification } from 'react-native-push-notification';

const streamUrl = "https://s3.radio.co/seb7265206/low";

const PushNotify: React.FC = () => {
  const [streamPlaying, setStreamPlaying] = useState(false);

  const handlePlayPress = () => {
    setStreamPlaying(true);
    PushNotification.localNotification({
      title: "Radio Stream Started",
      message: "Tune in to the stream now!",
    } as LocalNotification)
    .catch((error) => {
      Alert.alert("Error", error.message);
    });
  }

  const handleStopPress = () => {
    setStreamPlaying(false);
    PushNotification.cancelAllLocalNotifications();
  }

  return (
    <View>
      <Text>Stream is currently {streamPlaying ? "playing" : "stopped"}</Text>
      {streamPlaying ? (
        <TouchableOpacity style={styles.stopButton} onPress={handleStopPress}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    margin: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  stopButton: {
    backgroundColor: '#f44336',
    padding: 12,
    margin: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PushNotify;
