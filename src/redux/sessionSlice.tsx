import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
	table: number;
	orders: [];
	phone: number;
	name: string;
	shopName: string;
	authToken: string;
}

const initialState: SessionState = {
	table: 0,
	orders: [],
	phone: 0,
	name: "",
	shopName: "",
	authToken: "",
};

export const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		setTable: (
			state,
			action: PayloadAction<{ table: number; shopName: string }>
		) => {
			state.table = action.payload.table;
			state.shopName = action.payload.shopName;
		},
		setPhone: (state, action: PayloadAction<number>) => {
			state.phone = action.payload;
		},
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setAuthToken: (state, action: PayloadAction<string>) => {
			state.authToken = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTable, setPhone, setName, setAuthToken } =
	sessionSlice.actions;

export default sessionSlice.reducer;
