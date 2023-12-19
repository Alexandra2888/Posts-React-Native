import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts, selectPostsStatus } from '../../../store/reducers/postsReducer';
import { PostList } from '../../../components/post';
import Loader from '../../../components/common/Loader';
import { styles } from './Main.styles';
import { AppDispatch } from '../../../store/store';

const Main = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = useMemo(() => {
    if (searchQuery.trim() === '') {
      return posts;
    }

    const lowercaseQuery = searchQuery.toLowerCase();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.body.toLowerCase().includes(lowercaseQuery)
    );
  }, [posts, searchQuery]);

  const goToDetail = (id: number) => {
    navigation.navigate('PostDetailStack', { postId: id });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>
        <View>
          <Text style={styles.title}>Posts</Text>
        </View>
        <View>
          <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            style={styles.input}
          />
        </View>
        {status === 'loading' ? (
          <Loader />
        ) : (
          <>
            {filteredPosts.length > 0 ? (
              <PostList onPress={goToDetail} posts={filteredPosts} />
            ) : (
              <Text>No posts available.</Text>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Main;
