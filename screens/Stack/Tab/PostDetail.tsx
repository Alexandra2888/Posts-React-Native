import React, {useState, useEffect, useLayoutEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

import Loader from '../../../components/common/Loader';
import IPost from '../../../models/IPost';
import {styles} from "./PostDetail.styles";



const PostDetail = ({ route }) => {
  const { postId } = route.params;

  const [post, setPost] = useState<IPost | undefined>();
  const [isReady, setReady] = useState(false);

  useLayoutEffect(() => {
    fetchGetByIdPost(postId);
  }, [postId]);

  useEffect(() => {
    if (post) {
      setReady(true);
    }
  }, [post]);

  const fetchGetByIdPost = async (id: number) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const fetchPost: IPost = await res.json();
      setPost(fetchPost);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {isReady ? (
        <View>
          <Text style={styles.title}>{post?.title.toUpperCase()}</Text>
          <Text style={styles.body}>{post?.body}</Text>
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};



export default PostDetail;
