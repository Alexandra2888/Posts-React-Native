import React, {useState, useEffect, useLayoutEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

import Loader from '../../../components/common/Loader';
import {styles} from "./PostDetail.styles";

const PostDetail = ({route}) => {
  const {postId} = route.params;

  const [post, setPost] = useState();
  const [isReady, setReady] = useState(false);

  useLayoutEffect(() => {
    fetchGetByIdPost(postId);
  }, [postId]);

  useEffect(() => {
    if (post ) {
      setReady(true);
    }
  }, [post]);

  const fetchGetByIdPost = async id => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const fetchPost = await res.json();
    setPost(fetchPost);
  };


  return (
    <ScrollView style={styles.container}>
      {isReady ? (
        <View>
          <Text style={styles.title}>{post.title.toUpperCase()}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};


export default PostDetail;
