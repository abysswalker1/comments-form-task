import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "./authSlice";
import postsSlice from "./postsSlice";


const store = configureStore({
  reducer: {
    posts: postsSlice,
    auth: authSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;