import classes from "./Layout.styles/Box.module.css";
import { useState } from "react";

const Box = (props) => {
  const [buttonID,setbuttonID] = useState('');

  const onCloseResultHandler = event=>{
    event.preventDefault();
    setbuttonID(props.paratitle);
  }
  props.closedResult(buttonID);
  return (
    <div className={classes['box-outer']}>
      <p>{props.paratitle}</p>
      <button className={classes['rounded-btn']} onClick={onCloseResultHandler}>x</button>
    </div>
  );
};

export default Box;
