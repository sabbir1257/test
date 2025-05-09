import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './Features/Counter/CounterSlice';
import logger from "./middlewares/Logger";

const store = configureStore({
    reducer: {
        counter: counterReduser,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;