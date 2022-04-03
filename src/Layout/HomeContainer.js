import classes from "./Layout.styles/HomeContainer.module.css";

const HomeContainer = (props)=>{
    return <div className={classes.card}>{props.children}</div>
}

export default HomeContainer;