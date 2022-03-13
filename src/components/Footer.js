import classes from "./components-styles/Footer.module.css";
import Icon from "../images/app-icon.png";
import ButtonComponent from "./ButtonComponent";

const Footer = ()=>{
    return <div className={classes.foot}>
        <img src={Icon} alt="" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <ButtonComponent value="English" />
    </div>
}

export default Footer;