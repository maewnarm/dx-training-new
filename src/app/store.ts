import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./features/dropdownSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
