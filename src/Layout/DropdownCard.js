import classes from "./Layout.styles/DropdownCard.module.css";

const DropdownCard = (props) => {
  console.log(props.choice1," : ",props.choice2," : ",props.choice3+" : "+props.choice4);
    const isMoreChoices = props.choice3.trim() !== '' && props.choice4.trim() !== '' ? true : false;
  return (
    <div className={classes['card-wrap']}>
      <label htmlFor={props.labelName} className="">
        <p>{props.headingtitle}</p>
        <select name={props.labelName} className="" id="">
          <option value={props.choice1}>{props.choice1}</option>
          <option value={props.choice2}>{props.choice2}</option>
          {isMoreChoices && <option value={props.choice3}>{props.choice3}</option>}
          {isMoreChoices && <option value={props.choice4}>{props.choice4}</option>}
        </select>
      </label>
    </div>
  );
};

export default DropdownCard;
