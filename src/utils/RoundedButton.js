// import { useState } from "react";
import classes from "./RoundedButton.module.css";
import { useDispatch } from "react-redux";
import {currentPageActions} from "../store/currentPage";

const RoundedButton = (props) => {
  const dispatch = useDispatch();
  // const [currentPage,setCurrentPage] = useState(1);
  const onPageNumberHandler = event =>{
    event.preventDefault();
    dispatch(currentPageActions.setCurrentPage(event.target.textContent))
    // dispatch(currentPageActions.setCurrentPage(event.target.textContent));
  }
  return <button className={classes['pagination-btn']} onClick={onPageNumberHandler}>{props.value} </button>;
};

export default RoundedButton;
