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
interface payload {
	itemId: string;
	price: number;
	name: string;
}

let initialState: cart = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<payload>) => {
			let { itemId, ...rest } = action.payload;
			if (!state[itemId]) state[itemId] = { ...rest, qty: 1 };
			else state[itemId].qty++;
			// state[itemId].price = action.payload.price;
		},
		removeFromCart: (state, action: PayloadAction<payload>) => {
			// let itemId = action.payload.itemId;
			// if (state[itemId].qty) state[itemId].qty--;
			// if (state[itemId].qty === 0) delete state[itemId]; // Deleting Item if quantity is 0
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
