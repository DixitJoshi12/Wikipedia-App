import { useState } from "react";
import classes from "./components-styles/LoginForm.module.css";

const LoginForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== "";
  const enteredNameInvalid = !enteredNameValid && enteredNameTouched;

  const enteredPasswordValid = enteredPassword.trim() !== "";
  const enteredPasswordInvalid = !enteredPasswordValid && enteredPasswordTouched;

  let formIsValid = false;
  if(enteredNameValid && enteredPasswordValid){
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const passwordBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredPasswordTouched(true);
    if(!enteredNameValid && !enteredPasswordValid){
      return;
    }
    if (!enteredNameValid) {
      return;
    }
    if (!enteredPasswordValid) {
      return;
    }

    setEnteredName("");
    setEnteredPassword("");
    setEnteredNameTouched(false);
    setEnteredPasswordTouched(false);
  };
  return (
    <div className={classes["inner-box"]}>
      <div className={classes.upper}>
        <img
          src="http://localhost:3001/static/media/padlock.938bce02.png"
          alt=""
        />
        <h3>Login</h3>
      </div>
      <form onSubmit={formSubmitHandler}>
        <input
          name="user"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          placeholder="username"
          value={enteredName}
        />
        {enteredNameInvalid && <p>Username must be at least 5 characters.</p>}
        <input
          name="password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          placeholder="password"
          value={enteredPassword}
        />
        {enteredPasswordInvalid && (
          <p>Password must be at least 6 characters.</p>
        )}
        <button disabled={!formIsValid} className={classes.btn1}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
