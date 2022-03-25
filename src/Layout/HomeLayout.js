import classes from "./Layout.styles/HomeLayout.module.css";

const HomeLayout = props =>{
    return <div className={classes['home-container']}>{props.children}</div>
}

export default HomeLayout;