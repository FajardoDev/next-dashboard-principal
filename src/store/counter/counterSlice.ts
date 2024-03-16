// rxslice
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
	count: number;
	isReady: boolean;
}

const initialState: CounterState = {
	count: 0,
	isReady: false,
};

const counterSlice = createSlice({
	name: "Counter",
	initialState,
	reducers: {
		valorInicialCount: (state, action: PayloadAction<number>) => {
			if (state.isReady) return;

			state.count = action.payload;
			state.isReady = true;
		},

		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			if (state.count === 0) return;

			state.count--;
		},
		reset: (state, action: PayloadAction<number>) => {
			if (action.payload < 0) action.payload = 0;

			state.count = action.payload;
		},
		// reset: (state) => {
		// 	state.count = 0;
		// },
	},
});

export const { increment, decrement, reset, valorInicialCount } =
	counterSlice.actions;

export default counterSlice.reducer;
