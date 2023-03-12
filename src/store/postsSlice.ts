import { PostType } from './../types';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  currentPost: null as {} | null,
  postsList: [
    
  ] as PostType[] 
}

export type PostsStateType = typeof initialState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getCurrentPost: (state, action: PayloadAction<PostType>) => {
      state.currentPost =  action.payload
    }
  }
});

export default postsSlice.reducer;