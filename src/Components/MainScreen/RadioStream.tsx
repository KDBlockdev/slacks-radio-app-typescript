import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';

const streamUrl = 'https://s3.radio.co/seb7265206/low';

const RadioStream: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState<Audio.Sound | null>(null);

useEffect(() => {
  playStream();
}, []); 

  const playStream = async () => {
    if (!soundObject) {
      const newSoundObject = new Audio.Sound();
      setSoundObject(newSoundObject);
      await newSoundObject.loadAsync({ uri: streamUrl }, {}, false);
    }
    soundObject?.playAsync();
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
  <Image style={styles.transportButton}
    source={isPlaying ? require('../../Images/stop.png') : require('../../Images/play1.png' )}
  />
  <Text style={styles.text}> LISTEN LIVE! </Text>
</TouchableOpacity>
    </View>
  );
};

export default RadioStream;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
  },
  componentBackground: {
    backgroundColor: "#CCCCFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  logo: {
    width: 200,
    height: 40,
    padding: 100,
    paddingHorizontal: 16,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCCCFF",
  },
  appButtonContainer: {
    elevation: 8,
    alignItems: "center",
    backgroundColor: "purple",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  transportButton: {
    padding: 50,
    margin: 15,
    height: 200,
    width: 200,
    resizeMode: 'stretch',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
