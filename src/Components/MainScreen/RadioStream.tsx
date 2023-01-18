import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet} from "react-native";
import { Audio } from "expo-av";
import AntDesign from "react-native-vector-icons/AntDesign";

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        alignItems: "center",
        backgroundColor: "purple",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
      }
})

const RadioStream = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [radioUrl, setRadioUrl] = useState("");
  let sound: any;
  let playbackStatus : any;

  useEffect(() => {
    setRadioUrl("https://s3.radio.co/seb7265206/low");
  }, []);

  const togglePlay = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  useEffect(() => {
    sound = new Audio.Sound();

    sound.setOnPlaybackStatusUpdate((playbackStatus) => {
      setCurrentTime(playbackStatus.positionMillis);
      setIsPlaying(playbackStatus.isPlaying);
      setDuration(playbackStatus.durationMillis);
    });

    return () => {
      sound.unloadAsync();
    };
  }, [radioUrl]);

  return (
    <View>
      <TouchableOpacity onPress={togglePlay} style={styles.appButtonContainer}>
        <Text>{isPlaying ? "Paused" : "Listen Live!"}</Text>
      </TouchableOpacity>
    </View>
  );
};