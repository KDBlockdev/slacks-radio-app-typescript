import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

interface Props {
  onPlay: () => void;
  onStop: () => void;
}

const NowPlayingBanner: React.FC<Props> = ({ onPlay, onStop }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlaying, setNowPlaying] = useState('');

  useEffect(() => {
    if (isPlaying) {
      // make an API call to radio.co to get the currentsong information
      fetch('https://s3.radio.co/seb7265206/listen')
        .then((response) => response.json())
        .then((data) => {
          setNowPlaying(data.current_song.title);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay();
  };

  const handleStop = () => {
    setIsPlaying(false);
    onStop();
  };

  return (
    <View>
      <TouchableOpacity onPress={isPlaying ? handleStop : handlePlay}>
      </TouchableOpacity>
      {isPlaying && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text>Now Playing: {nowPlaying}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default NowPlayingBanner;
