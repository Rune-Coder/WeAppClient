import { createSlice } from "@reduxjs/toolkit";
import {io} from 'socket.io-client';
import url from "../components/connect";

const initialLoginState = {
    loggedin: false,
    loginData: {},
    socket: io(url),
    activeUsers: []
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        accountInfo(state, action){
            const user = action.payload;
            state.loginData = user.userData;
            state.loggedin = true;
        },
        activeUsersState(state, action){
            const user = action.payload;
            state.activeUsers = user.activeUserData;
        }
    },
});


export const loginActions = loginSlice.actions;

export default loginSlice.reducer;