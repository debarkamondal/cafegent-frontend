import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

let initialState: any = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<string>) => {
			let itemId = action.payload;
			if (!state[itemId]) state[itemId] = 0;
			state[itemId]++;
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			let itemId = action.payload;
			if (state[itemId]) state[itemId]--;
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
