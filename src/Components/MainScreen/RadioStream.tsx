import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Audio } from 'expo-av';

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
    if(soundObject) await soundObject.playAsync();
    setIsPlaying(true);
  };

  const pauseStream = async () => {
    if (soundObject) {
      await soundObject.pauseAsync();
      setIsPlaying(false);
    }
  };

  return (
    <View>
    <TouchableOpacity onPress={isPlaying ? pauseStream : playStream}>
  <Image
    source={isPlaying ? require('../../Images/pause.png') : require('../../Images/play.png')}
  />
</TouchableOpacity>
    </View>
  );
};

export default RadioStream;
