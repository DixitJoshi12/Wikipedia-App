
import {  configureStore} from "@reduxjs/toolkit";

import settingReducer from "./settingsSlice";
import homeSlice from "./homeSlice";
import currentPageSlice from "./currentPage";
import serachTextSlice from "./searchTextSlice";


const store = configureStore({
    reducer : {setting : settingReducer , home : homeSlice, currentPage : currentPageSlice , searchText : serachTextSlice}
});



export default store;