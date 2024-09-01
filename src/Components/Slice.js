import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice=createSlice({
    name:"portfolio",
    initialState:{
        selectedColor:"rgb(255,46,55)",
        mode: localStorage.getItem("color") || "dark-mode"
    },
    reducers:{
        dispatchColors:(state,action)=>{
            console.log(action.payload,"payload")
            state.selectedColor=action.payload
        },
        setMode: (state, action) => {
            state.mode = action.payload
            localStorage.setItem("color", action.payload)
        }
    }
})

export const {dispatchColors,setMode}=portfolioSlice.actions
export default portfolioSlice.reducer