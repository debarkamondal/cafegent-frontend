import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface item {
	name: string;
	qty: number;
	price: number;
}
interface cart {
	[itemId: string]: item;
}

let initialState: cart = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<cart>) => {
			let itemId = Object.keys(action.payload)[0];
			if (!state[itemId].qty) state[itemId].qty = 0;
			state[itemId].qty++;
			state[itemId].price = action.payload.itemId.price;
		},
		removeFromCart: (state, action: PayloadAction<cart>) => {
			let itemId = Object.keys(action.payload)[0];
			if (state[itemId].qty) state[itemId].qty--;
			if (state[itemId].qty === 0) delete state[itemId]; // Deleting Item if quantity is 0
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
