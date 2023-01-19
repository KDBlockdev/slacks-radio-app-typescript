import * as React from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';

interface Props {
  trackId: string;
}

interface State {
  sound: Audio.Sound | null;
  isPlaying: boolean;
}

export default class SoundCloudPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sound: null,
      isPlaying: false,
    };
  }

  async componentDidMount() {
    const { trackId } = this.props;
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync({
        uri: `https://api.soundcloud.com/tracks/${trackId}/stream?client_id=YOUR_CLIENT_ID`,
      });
      this.setState({ sound });
    } catch (error) {
      console.log(error);
    }
  }

  handlePlayPause = async () => {
    const { sound, isPlaying } = this.state;
    if (sound !== null) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      this.setState({ isPlaying: !isPlaying });
    }
  }

  handleStop = async () => {
    const { sound } = this.state;
    if (sound !== null) {
      await sound.stopAsync();
      this.setState({ isPlaying: false });
    }
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <View>
        <Text onPress={this.handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
        <Text onPress={this.handleStop}>Stop</Text>
      </View>
    );
  }
}