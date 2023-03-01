import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function fetchInstagramData() {
      try {
        const response = await axios.get('https://www.instagram.com/slacksradio');
        setPosts(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchInstagramData();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.caption}</Text>
            <Image source={{ uri: item.imageUrl }} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default InstagramFeed;