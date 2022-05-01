import { createSlice } from "@reduxjs/toolkit";

const initialSearchText = {
    searchText : []
}

const searchTextSlice = createSlice({
    name : 'searchText',
    initialState : initialSearchText,
    reducers : {
        setSearchText(state,action){
            state.searchText.push(action.payload);
        },
        removeElementAtIndex(state,action){
            console.log("action payload : "+action.payload)
            state.searchText.splice(action.payload,1);
        }
    }
});

export const serachTextActions = searchTextSlice.actions;

export default searchTextSlice.reducer;