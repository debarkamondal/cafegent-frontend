import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "./sessionSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
	reducer: {
		session: sessionSlice,
		cart: cartSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;