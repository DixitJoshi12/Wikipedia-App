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
        }
    }
});

export const serachTextActions = searchTextSlice.actions;

export default searchTextSlice.reducer;