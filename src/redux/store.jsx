import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './Features/Counter/CounterSlice';

const store = configureStore({
    reducer: {
        counter: counterReduser,
    },
})

export default store;