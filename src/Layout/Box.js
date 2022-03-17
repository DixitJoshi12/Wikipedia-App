import classes from "./Layout.styles/Box.module.css";
const Box = (props) => {
  return (
    <div className={classes['box-outer']}>
      <p>{props.paratitle}</p>
      <button className={classes['rounded-btn']}>x</button>
    </div>
  );
};

export default Box;
