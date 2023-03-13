import { PostType, CommentType } from './../types';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import data from '../posts.json'

const initialState = {
  currentPost: undefined as PostType | undefined,
  postsList: data as PostType[] 
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  }
});


export default postsSlice.reducer;