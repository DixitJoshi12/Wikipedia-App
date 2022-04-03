import RoundedButton from "../utils/RoundedButton";
import classes from "./Layout.styles/Pagination.module.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pagination = (props) => {
  // const [dataLength,numberOfButtons] = props;
  // const dataLength = props.data.length;
  // const numberOfButtons = props.numberOfButtons;
  const defaultcurrentPage = useSelector(state => state.currentPage.defaultCurrentPage);
  const [pages, setPages] = useState(
    Math.ceil(props.data.length / props.numberOfButtons)
    );
//     console.log("default current page : "+defaultcurrentPage);
//     console.log("no. of buttons"+props.numberOfButtons)
//     console.log("data length : "+props.data.length)
// console.log("pages : "+pages)
  useEffect(() => {
    setPages(Math.ceil(props.data.length / props.numberOfButtons));
    props.onGetCurrentPage(defaultcurrentPage);
  }, [props.data.length, props.numberOfButtons, defaultcurrentPage]);

  // useEffect(() => {
  //   setPages(Math.ceil(props.data.length / props.numberOfButtons));
  //   props.onGetCurrentPage(defaultcurrentPage);
  // }, [dataLength,numberOfButtons, defaultcurrentPage]);

  let totalpages = [];
  for (let i = 0; i < pages; i++) {
    totalpages.push(
      <RoundedButton
        key={Math.random() * 10}
        value={i + 1}
      />
    );
  }

  return <div className={classes["btn-round"]}>{totalpages}</div>;
};

export default Pagination;
