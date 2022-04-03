import { createSlice } from "@reduxjs/toolkit";

const defaultCurrentPage = {
    defaultCurrentPage : 1
};

const currentPageReduceromeSlice = createSlice({
    name : 'currentPage',
    initialState : defaultCurrentPage,
    reducers :{
       setCurrentPage(state,action){
           state.defaultCurrentPage = action.payload;
       }
    }
});

export const currentPageActions = currentPageReduceromeSlice.actions;

export default currentPageReduceromeSlice.reducer;
