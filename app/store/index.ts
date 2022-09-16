import { configureStore } from "@reduxjs/toolkit";
import homeworkReducer from "./homeworkSlice";

export const store = configureStore({
    reducer: {
        homework: homeworkReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
