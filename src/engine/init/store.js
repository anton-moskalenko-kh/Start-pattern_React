import {configureStore} from "@reduxjs/toolkit";
import example from '../core/slice'
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        example
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
})