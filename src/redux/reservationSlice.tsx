import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ReservationState {
  table: number;
  orders: [];
  phone: number;
  availability: boolean;
}

const initialState: ReservationState = {
  table: 0,
  orders: [],
  phone: 0,
  availability: true,
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    qrSuccess: (state, action: PayloadAction<number>) => {
      state.table = action.payload;
    },
    phoneUpdate: (state, action: PayloadAction<number>) => {
      state.phone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { qrSuccess, phoneUpdate } = reservationSlice.actions;

export default reservationSlice.reducer;
