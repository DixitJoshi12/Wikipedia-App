import RoundedButton from "../utils/RoundedButton";
import classes from "./Layout.styles/Pagination.module.css";
import React from "react";

const Pagination = (props) => {
  return (
    <div className={classes["btn-round"]}> 
      <RoundedButton num="1"/>
    </div>
  );
};

export default Pagination;
