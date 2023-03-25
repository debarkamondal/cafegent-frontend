import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./redux/reservationSlice";

export const store = configureStore({
  reducer: {
    reservation: reservationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
