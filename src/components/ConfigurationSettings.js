import DropdownCard from "../Layout/DropdownCard";
import Box from "../Layout/Box";
import React from "react";
import classes from "./components-styles/ConfigurationSettings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { settingsActions } from "../store/settingsSlice";

const ConfigurationSettings = (props) => {
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
  };
  return (
    <div className={classes.wrap}>
      <div className={classes.row1}>
        <h1>Settings</h1>
        <p>Manage search settings and history</p>
      </div>
      <div className={classes.row2}>
        <h2>Search History</h2>
        <Box paratitle="Kite" />
        <Box paratitle="aeroplane" />
        {/* paraname should be dynamic */}
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
