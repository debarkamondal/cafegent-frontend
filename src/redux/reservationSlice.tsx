import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ReservationState {
	table: number;
	orders: [];
	phone: number;
	name: string;
}

const initialState: ReservationState = {
	table: 0,
	orders: [],
	phone: 0,
	name: "",
};

export const reservationSlice = createSlice({
	name: "reservation",
	initialState,
	reducers: {
		setTable: (state, action: PayloadAction<number>) => {
			state.table = action.payload;
		},
		setPhone: (state, action: PayloadAction<number>) => {
			state.phone = action.payload;
		},
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTable, setPhone, setName } = reservationSlice.actions;

export default reservationSlice.reducer;
