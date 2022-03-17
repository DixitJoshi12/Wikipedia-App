import DropdownCard from "../Layout/DropdownCard";
import Box from "../Layout/Box";
import React from "react";
import classes from "./components-styles/ConfigurationSettings.module.css";

const ConfigurationSettings = (props) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.row1}>
          <h1>Settings</h1>
          <p>Manage search settings and history</p>
      </div>
      <div className={classes.row2}>
        <h2>Search History</h2>
        <Box paratitle="Kite"/>
        <Box paratitle="aeroplane"/>
        {/* paraname should be dynamic */}
      </div>
      <div className={classes['row-empty']}></div>
      <div className={classes.row3}>
      <h2>Search Defaults</h2>
      <DropdownCard
        labelName="DEFAULT SEARCH ON"
        headingtitle="DEFAULT SEARCH ON"
        choice1="Titles Only"
        choice2="Titles and Text"
        choice3=""
        choice4=""
      />
      <DropdownCard
        labelName="DEFAULT SORT ORDER"
        headingtitle="DEFAULT SORT ORDER"
        choice1="relevance"
        choice2="random"
        choice3=""
        choice4=""
      />
      <DropdownCard
        labelName="RESULTS PER PAGE"
        headingtitle="RESULTS PER PAGE"
        choice1="1"
        choice2="2"
        choice3="3"
        choice4="4"
      />
      </div>
    </div>
  );
};

export default ConfigurationSettings;
