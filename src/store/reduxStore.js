import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginStore';

const store = configureStore({
    reducer: {login: loginSlice},
});

export default store;