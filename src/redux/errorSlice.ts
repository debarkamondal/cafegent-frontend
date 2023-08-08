import { errorType } from "@/common/functions/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState: errorType = {};

export const errorSlice = createSlice({
	name: "error",
	initialState,
	reducers: {
		setError: (state, action: PayloadAction<errorType>) => {
			state.status = action.payload.status;
			state.message = action.payload.message;
		},
	},
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
