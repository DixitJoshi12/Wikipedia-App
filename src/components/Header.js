import classes from "./components-styles/Header.module.css";
import LogoImage from "../images/app-icon.png";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.left}>
          <img src={LogoImage} alt="" />
          <h2>WIKIPEDIA SEARCH APP</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
