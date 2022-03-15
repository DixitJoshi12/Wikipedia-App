// import LoginForm from "../components/LoginForm";
import classes from "./Layout.styles/Container.module.css";

const Container = (props) => {
  return <div className={classes.box}>
    {/* <LoginForm/> */}
    {/* {props.value} */}
    {props.children}
  </div>;
};

export default Container;