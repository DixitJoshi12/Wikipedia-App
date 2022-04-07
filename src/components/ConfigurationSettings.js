import DropdownCard from "../Layout/DropdownCard";
import Box from "../Layout/Box";
import React, { useEffect, useState } from "react";
import classes from "./components-styles/ConfigurationSettings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { settingsActions } from "../store/settingsSlice";
import { currentPageActions } from "../store/currentPage";
import { serachTextActions } from "../store/searchTextSlice";

const ConfigurationSettings = (props) => {

  const [textValue,setTextValue] = useState('');
  
  const searchText = useSelector(state => state.searchText.searchText);

  const defaultSearchTitle = useSelector((state) => state.setting.defaultSearchType);
  const defaultSortOrder = useSelector((state) => state.setting.defaultSortOrder);
  const defaultPerPage = useSelector((state) => state.setting.defaultResultsPerPage);

  const searchTypes = useSelector((state) => state.setting.searchTypes);
  const sortOrders = useSelector((state) => state.setting.sortOrders);
  const resultsPerPage = useSelector((state) => state.setting.resultsPerPage);

 

  const dispatch = useDispatch();

  const getSearchOnHandler = (searchParameter) => {
    dispatch(settingsActions.updateDefaultSearchType(searchParameter));
  };
  const getSortHandler = (sortParameter) => {
    dispatch(settingsActions.updateDefaultSortOrder(sortParameter));
  };
  const getResultOnPageHandler = (numberPerPage) => {
    dispatch(settingsActions.updateDefaultResultsPerPage(numberPerPage));
    dispatch(currentPageActions.setCurrentPage(1));
  };

  useEffect(()=>{
    let index = searchText.findIndex(item => item === textValue);
    if(index !== -1){
      console.log("hello");
      console.log(index)
      dispatch(serachTextActions.removeElementAtIndex(index));
    }
  },[textValue])

  const onCloseResult = value=>{
    setTextValue(value);
  }

  const searchHistoryClassName = searchText.length > 0 ? "row2" : "row2empty";
  return (
    <div className={classes.wrap}>
      <div className={classes.row1}>
        <h1>Settings</h1>
        <p>Manage search settings and history</p>
      </div>
      <div className={` ${searchText.length > 0 ? classes.row2 : classes.row2empty}`}>
        <h2>Search History</h2>
        
        {searchText.length === 0 && <div className={classes.centeredbox}>No history found!!!</div>}
        {searchText.length > 0 && searchText.slice(searchText.length-2,searchText.length).reverse().map((item)=> <Box paratitle={item} closedResult={onCloseResult} key={Math.random()*1000}/>)}
      </div>
      <div className={classes["row-empty"]}></div>
      <div className={classes.row3}>
        <h2>Search Defaults</h2>
        <DropdownCard
          labelName="DEFAULT SEARCH ON"
          defaultPattern={defaultSearchTitle}
          options={searchTypes}
          getSelectHandler={getSearchOnHandler}
        />
        <DropdownCard
          labelName="DEFAULT SORT ORDER"
          defaultPattern={defaultSortOrder}
          options={sortOrders}
          getSelectHandler={getSortHandler}
        />
        <DropdownCard
          labelName="RESULTS PER PAGE"
          defaultPattern={defaultPerPage}
          options={resultsPerPage}
          getSelectHandler={getResultOnPageHandler}
        />
      </div>
    </div>
  );
};

export default ConfigurationSettings;
