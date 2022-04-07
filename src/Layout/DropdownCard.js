import classes from "./Layout.styles/DropdownCard.module.css";

const DropdownCard = (props) => {

  const option = props.options.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const onChangeHandler = (event) => {
    props.getSelectHandler(event.target.value);
  };
  return (
    <div className={classes["card-wrap"]}>
      <label htmlFor={props.labelName} className="">
        <p>{props.labelName}</p>
        <select
          name={props.labelName}
          className=""
          id=""
          value={props.defaultPattern}
          onChange={onChangeHandler}
        >
          {option}
        </select>
      </label>
    </div>
  );
};

export default DropdownCard;
