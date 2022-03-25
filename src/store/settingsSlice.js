import { createSlice } from "@reduxjs/toolkit";

const initialSettingsState = {
    searchTypes: ["Titles Only", "Titles and Text"],
	sortOrders: ["relevance", "random"],
	resultsPerPage: [1, 2, 3, 4],
	defaultSearchType: "Titles Only",
	defaultSortOrder: "random",
	defaultResultsPerPage: 1,
	searchHistory: [],
};

const settingsSlice = createSlice({
    name : 'searchDefault',
    initialState :initialSettingsState,
    reducers : {
        updateDefaultSearchType(state, action) {
			state.defaultSearchType = action.payload;
		},
		updateDefaultSortOrder(state, action) {
			state.defaultSortOrder = action.payload;
		},
		updateDefaultResultsPerPage(state, action) {
			state.defaultResultsPerPage = action.payload;
		},
    }
});

export const settingsActions =  settingsSlice.actions;

export default settingsSlice.reducer;

