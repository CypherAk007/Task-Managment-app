import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {toggle:false};

const addProjSlice = createSlice({
    name:'addProj',
    initialState:initialModalState,
    reducers:{
        toggleModal(state){
            state.toggle = !state.toggle
        }
    }
})

export const addProjActions = addProjSlice.actions
export default addProjSlice.reducer