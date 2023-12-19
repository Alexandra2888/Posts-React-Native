import React, { useEffect, useMemo } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import { fetchPosts, selectPosts, selectPostsStatus } from '../../../store/reducers/postsReducer';
import { PostList } from '../../../components/post';
import Loader from '../../../components/common/Loader';
import { styles } from "./Main.styles";
import { AppDispatch } from '../../../store/store';

const Main = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const memoizedPosts = useMemo(() => posts || [], [posts]);

  const goToDetail = (id: number) => {
    navigation.navigate('PostDetailStack', { postId: id });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.title}>Posts</Text>
          {memoizedPosts.length > 0 ? (
            <PostList onPress={goToDetail} posts={memoizedPosts} />
          ) : (
            <Text>No posts available.</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Main;
