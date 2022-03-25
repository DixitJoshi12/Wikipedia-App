import { createSlice } from "@reduxjs/toolkit";

const  initialPostState = {
    posts: [],
    isLoading: false,
    hasErrors: false,
} 


const homeSlice = createSlice({
    name : 'homeSlice',
    initialState : initialPostState,
    reducers :{
        postData(state){
            state.isLoading = true;
        },
        postError(state){
            state.isLoading = false;
            state.hasErrors = true;
        },
        postSuccess(state,action){
            state.isLoading = false;
            state.posts = action.payload;
        }
    }
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;