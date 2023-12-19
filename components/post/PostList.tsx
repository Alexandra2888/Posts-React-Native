import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {styles} from "./PostList.styles";


const PostList = ({ posts, onPress }) => {
  return (
    <ScrollView>
      {posts.map((post) => (
        <TouchableOpacity
          onPress={() => onPress(post.id)}
          key={post.id}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{post.title.toUpperCase()}</Text>
            <Text style={styles.body}>{post.body}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


export default PostList;
