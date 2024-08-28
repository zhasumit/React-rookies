import { configureStore } from "@reduxjs/toolkit"; // to make the store (CORE redux)

// importing reducers
import counterReducer from "../features/reducer.js";

// importing store and making a new store for Single source of truth
export const store = configureStore({
    reducer: counterReducer,
});
