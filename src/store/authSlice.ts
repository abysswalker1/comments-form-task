import { RootState } from './store';
import { UserType } from './../types';
import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isModal: true,
  user: {id: 0 } as UserType,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   setAuthData: (state, action: PayloadAction<string>) => {
      state.user = {
        id: 1,
        name: action.payload
      }
   },
   toggleIsModal: (state, action: PayloadAction<boolean>) => {
    state.isModal = action.payload;
   }
  }
});

const authSelector = (state: RootState) => state.auth;
export const authUserState = createSelector(authSelector, slice => slice.user)

export const { setAuthData, toggleIsModal } = authSlice.actions;

export default authSlice.reducer;