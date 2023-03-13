import { RootState } from './store';
import { UserType } from './../types';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isModal: true,
  user: { } as UserType,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   setAuthData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
   },
   askForAuth: (state) => {
    if( state.user.id ) {
      state.isModal = true;
    }
   }
  }
});

export default authSlice.reducer;