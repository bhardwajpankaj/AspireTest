import { configureStore } from "@reduxjs/toolkit";
import debitCardReducer from "./debitCardReducer";

export const store = configureStore({
    reducer: {
        debitCard: debitCardReducer,
    },
});