import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';
import PushNotification from '../Notificaitons/PushNotificaitons'

const streamUrl = 'https://s3.radio.co/seb7265206/low';

const RadioStream: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState<Audio.Sound | null>(null);

  const playStream = async () => {
    if (!soundObject) {
      const newSoundObject = new Audio.Sound();
      setSoundObject(newSoundObject);
      await newSoundObject.loadAsync({ uri: streamUrl }, {}, false);
    }
    soundObject?.playAsync();
    setIsPlaying(true);
    <PushNotification handleStreamLiveProp={playStream}/>
  };

  const pauseStream = async () => {
    if (soundObject) {
      await soundObject.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if(isPlaying){
      <PushNotification handleStreamLiveProp={playStream}/>
    }
  }, [isPlaying]);

  return (
    <View>
      <TouchableOpacity onPress={isPlaying ? pauseStream : playStream}>
        {isPlaying ? (
          <Image
          style={styles.transportButton}
          source={require('../../Images/stop.png')}
          />
          ) : (
            <Image
            style={styles.transportButton}
            source={require('../../Images/play1.png')}
            />
            )}
        <Text style={styles.text}>LISTEN LIVE!</Text>
            <PushNotification handleStreamLiveProp={playStream}/>
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