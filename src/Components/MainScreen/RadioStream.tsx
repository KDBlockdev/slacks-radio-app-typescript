import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';

const streamUrl = 'https://s3.radio.co/seb7265206/low';

const RadioStream = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);

  const playStream = async () => {
    if (!soundObject) {
      const newSoundObject = new Audio.Sound();
      setSoundObject(newSoundObject);
      await newSoundObject.loadAsync({ uri: streamUrl });
      newSoundObject.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setIsPlaying(status.isPlaying);
        }
      });
    } else {
      await soundObject.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseStream = async () => {
    if (soundObject) {
      await soundObject.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const sendNotification = async () => {
      // Add code to send push notification
    };
    sendNotification();
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={isPlaying ? pauseStream : playStream}>
        {isPlaying ? (
          <Image
            style={styles.transportButton}
            source={require('../../Images/stop-button.png')}
          />
        ) : (
          <Image
            style={styles.transportButton}
            source={require('../../Images/play-button.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RadioStream;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  transportButton: {
    padding: 50,
    margin: 15,
    height: 200,
    width: 200,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
