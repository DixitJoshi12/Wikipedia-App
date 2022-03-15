import classes from "./components-styles/Footer.module.css";
import Icon from "../images/app-icon.png";
import ButtonComponent from "./ButtonComponent";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes['up-arrow']}>
          {/* <img src="/src/images/up-arrow.png" alt="up-arrow" /> */}
      </div>
      <div className={classes.foot}>
        <img src={Icon} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <ButtonComponent value="English" />
      </div>
    </React.Fragment>
  );
};

export default Footer;
