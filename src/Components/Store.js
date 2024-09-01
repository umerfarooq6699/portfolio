import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./Slice";

const store=configureStore({
    reducer:{
        Management:portfolioSlice
    }
})


export default store