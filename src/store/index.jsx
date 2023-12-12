import { configureStore } from "@reduxjs/toolkit";
import addProjReducer from "./addProj";

const store = configureStore({
    reducer:{
        addProj:addProjReducer
    }
})

export default store;