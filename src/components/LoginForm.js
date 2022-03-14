import classes from "./components-styles/LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes["inner-box"]}>
      <div className={classes.upper}>
        <img
          src="http://localhost:3001/static/media/padlock.938bce02.png"
          alt=""
        />
        <h3>Login</h3>
      </div>
      <form action="">
        <input name="user" type="text" />
        <p>Username must be at least 5 characters.</p>
        <input name="password" type="password" />
        <p>Password must be at least 6 characters.</p>
        <button disabled className={classes.btn1}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

