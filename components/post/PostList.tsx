import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';


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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 0.2,
  },
  title: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
    opacity: 0.5,
  },
});

export default PostList;
