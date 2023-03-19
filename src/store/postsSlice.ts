import { PostType, CommentType, UserType } from './../types';
import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import data from '../posts.json'

const initialState = {
  currentPost: null as PostType | null,
  //@ts-ignore
  postsList: data as PostType[] 
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPost: (state, action: PayloadAction<number>) => {
      state.currentPost = state.postsList.filter(item => item.id === action.payload)[0] || null;
    },
    likeComment: (state, action: PayloadAction<{commentId: number, likeId: number}>) => {
      let neededComment = state.currentPost?.comments.find(item => item.id === action.payload.commentId);
      
      if(  neededComment && !neededComment.likes.find(item => item === action.payload.likeId) ){
        neededComment.likes.push(action.payload.likeId);
        
      } else if( neededComment ){
        neededComment.likes = neededComment?.likes.filter(item => item !== action.payload.likeId); 
      }
    },
    addComment: (state, action: PayloadAction<{postId: number, text: string, date: string, author: UserType}>) => {
      const newComment = { 
        id: state.currentPost?.comments.length || 0,
        user: action.payload.author,
        date: action.payload.date,
        text: action.payload.text,
        likes: []
      }
      state.currentPost?.comments.unshift(newComment);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      if( state.currentPost ){
        state.currentPost?.comments.splice(action.payload, 1);
      }
    }
  }
});

export const { setCurrentPost, likeComment, addComment, deleteComment } = postsSlice.actions;

export default postsSlice.reducer;