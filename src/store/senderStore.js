import { createSlice } from "@reduxjs/toolkit";

const initialSenderState = {
    senderData: {}
};

const senderSlice = createSlice({
    name: 'senders',
    initialState: initialSenderState,
    reducers: {
        person(state, action){
            const person = action.payload;
            state.senderData = person.senderData;
        },
    },
});


export const senderActions = senderSlice.actions;

export default senderSlice.reducer;