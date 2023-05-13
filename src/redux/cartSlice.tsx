import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cart {
	[id: string]: { name: string; qty: number; price: number };
}
interface payload {
	id: string;
	price: number;
	name: string;
}

let initialState: cart = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<payload>) => {
			let { id, ...rest } = action.payload;
			if (!state[id]) state[id] = { ...rest, qty: 1 };
			else state[id].qty++;
			// state[id].price = action.payload.price;
		},
		removeFromCart: (state, action: PayloadAction<payload>) => {
			let { id } = action.payload;
			if (state[id]) state[id].qty--;
			if (state[id].qty === 0) delete state[id]; // Deleting Item if quantity is 0
		},
		clearCart: (state) => {
			return { ...initialState };
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
