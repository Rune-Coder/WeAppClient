import { createSlice } from "@reduxjs/toolkit";

const initialSenderState = {
    senderData: {},
    recentMsg: {}
};

const senderSlice = createSlice({
    name: 'senders',
    initialState: initialSenderState,
    reducers: {
        person(state, action){
            const person = action.payload;
            state.senderData = person.senderData;
        },
        currMsg(state, action){
            const message = action.payload;
            state.recentMsg = message.messageData;
        },
    },
});


export const senderActions = senderSlice.actions;

export default senderSlice.reducer;