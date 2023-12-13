import { configureStore } from "@reduxjs/toolkit";
import addProjReducer from "./addProj";
import projectsReducer from './projects';

const store = configureStore({
    reducer:{
        addProj:addProjReducer,
        projects:projectsReducer
    }
})

export default store;