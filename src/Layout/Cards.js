import classes from "./Layout.styles/Cards.module.css";

const Cards = (props) => {
  console.log(props);
  return (
    <div className={classes['cards-wrap-item']}>
      <div className={classes['card-row']}>
        <h3>{props.searchItem}</h3>
        <p>1 DAY AGO</p>
      </div>
      <div className={classes['card-box']}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Cards;
