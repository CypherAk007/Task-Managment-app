import { createSlice } from "@reduxjs/toolkit";

const initialProjState = {projects:[
        {
            title:'Learning React',
            description:'Welcome to this tutorial!!!',
            email:'react@gmail.com',
            phone:'1234567890',
            date:'2023-12-23'
        }
    ]
}

const projectsSlice = createSlice({
    name:'projects',
    initialState:initialProjState,
    reducers:{
        addProject(state,action){
            state.projects.push(action.payload)
        }
    } 
})

export const projectActions = projectsSlice.actions
export default projectsSlice.reducer