import React, { useEffect, useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Loader from '../../../components/common/Loader';
import { styles } from './PostDetail.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectPostsStatus, fetchPostById } from '../../../store/reducers/postsReducer';
import { AppDispatch } from '../../../store/store';

const PostDetail = ({ route }) => {
  const { postId } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);

  const post = useMemo(() => posts[0], [posts]);

  return (
    <ScrollView style={styles.container}>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{post?.title?.toUpperCase()}</Text>
          <Text style={styles.body}>{post?.body}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default PostDetail;
