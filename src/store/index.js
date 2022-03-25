
import {  configureStore} from "@reduxjs/toolkit";

import settingReducer from "./settingsSlice";
import homeSlice from "./homeSlice";


const store = configureStore({
    reducer : {setting : settingReducer , home : homeSlice}
});



export default store;