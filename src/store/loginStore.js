import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
    loggedin: false,
    loginData: {}
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
    },
});


export const loginActions = loginSlice.actions;

export default loginSlice.reducer;