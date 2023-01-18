/// <reference path="../../expo-av.d.ts" />
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

interface RadioPlayerProps {
  streamUrl: string;
}

const RadioStream: React.FC<RadioPlayerProps> = ({ streamUrl }) => {
  const audioRef = useRef<typeof Audio>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePlayback = async () => {
    try {
      if (isPlaying) {
        await audioRef.current?.pauseAsync();
      } else {
        await audioRef.current?.playAsync();
      }
      setIsPlaying(!isPlaying);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handlePlaybackStatusUpdate = (status: { isBuffering: boolean }) => {
    setIsBuffering(status.isBuffering);
  };

  React.useEffect(() => {
    (async () => {
      try {
        await audioRef.current?.loadAsync({ uri: streamUrl });
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, [streamUrl]);

  return (
    <View>
      <Audio
        ref={audioRef}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <TouchableOpacity onPress={togglePlayback}>
        <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      {isBuffering && <Text>Buffering...</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

export default RadioStream;
