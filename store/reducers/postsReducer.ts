import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../store';
import IPost from '../../models/IPost';


interface PostsState {
  posts: IPost[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],  
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(fetchPostById.pending, (state) => {  
        state.status = 'loading';
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = [action.payload];
      })
      .addCase(fetchPostById.rejected, (state, action) => { 
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default postsSlice.reducer;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;