import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

let initialState: any = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<object>) => {
			state[`${action.payload.key}`] = action.payload.qty;
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
