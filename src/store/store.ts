import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import postsSlice from "./postsSlice";


const store = configureStore({
  reducer: {
    posts: postsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store;