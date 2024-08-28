import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

// action is user give value since we are not using here
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        reset: (state) => {
            state.counter = 0;
        },
        setValue: (state, action) => {
            state.counter = action.payload;
        },
    },
});

export const { increment, decrement, reset, setValue } = counterSlice.actions;
export default counterSlice.reducer;




