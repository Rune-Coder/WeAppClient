import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginStore';
import senderSlice from "./senderStore";

const store = configureStore({
    reducer: {login: loginSlice, senders: senderSlice},
});

export default store;