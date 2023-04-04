import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

let initialState = [{}];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<object>) => {
			state.push(action.payload);
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
