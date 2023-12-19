import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {PostList} from '../../../components/post';
import Loader from '../../../components/common/Loader';
import IPost from '../../../models/IPost';
import {styles} from "./Main.styles";




const Main = ({ navigation }) => {
  const [posts, setPosts] = useState<IPost[] | undefined>();

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchPosts: IPost[] = await res.json();
      setPosts(fetchPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const goToDetail = (id: number) => {
    navigation.navigate('PostDetailStack', { postId: id });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      {posts ? (
        <View>
          <Text style={styles.title}>Posts</Text>
          <PostList onPress={goToDetail} posts={posts} />
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};



export default Main;
