import React from 'react';

import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'; 

import { styles } from './PostList.styles';

const PostList = ({ posts, onPress }) => {
  return (
    <ScrollView>
      {posts.map((post) => (
        <TouchableOpacity
          onPress={() => onPress(post.id)}
          key={post.id}
        >
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.title}>{post.title.toUpperCase()}</Card.Title>
            <Card.Divider />
            <Text style={styles.body}>{post.body}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PostList;
