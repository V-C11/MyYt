import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_NUM } from "./constans";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : []
    },
    reducers : {
        addMessage : (state, action) => {
            state.messages.splice(OFFSET_NUM,10)
            state.messages.push(action.payload)
        }
    }
})

export const {addMessage } = chatSlice.actions

export default chatSlice.reducer