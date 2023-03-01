import SoundCloud from 'react-native-soundcloud';
import { Player } from 'react-native-soundcloud';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

interface Props {
    userName: string;
}

const SoundCloudPlayer: React.FC<Props> = ({userName}) => {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        SoundCloud.initialize({clientId: 'YOUR_API_KEY'});
        SoundCloud.get(`/users/${userName}/tracks`).then(tracks => setTracks(tracks));
    }, [userName])

  return (
    <View>
      {tracks.map((track) => {
        return (
          <View>
            <Text>{track.title}</Text>
            <Player streamUrl={track.stream_url}/>
          </View>
        )
      })}
    </View>
  );
};

export default SoundCloudPlayer;