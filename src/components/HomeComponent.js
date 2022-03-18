import Cards from "../Layout/Cards";
import classes from "./components-styles/HomeComponent.module.css";

const SampleData = [
  {
    name: "Cat",
    age: "1 DAY AGO",
    description:
      "djfksjlfjlsdjflj ljlfjlfjldjfl jlfjlds jfljdlf jsldfjl sjdfljsd lfjls jfljdlfjld d fs jlj jfljd lfjlsjf ljlfjljfl jlfj lfjlsdjfl jdslfjlsdj flsdjfl jlfjldsfjl sj fljdslf jdslfjljf l",
  },
  {
    name: "Cat",
    age: "1 DAY AGO",
    description:
      "djfksjlfjlsdjflj ljlfjlfjldjfl jlfjlds jfljdlf jsldfjl sjdfljsd lfjls jfljdlfjld d fs jlj jfljd lfjlsjf ljlfjljfl jlfj lfjlsdjfl jdslfjlsdj flsdjfl jlfjldsfjl sj fljdslf jdslfjljf l",
  },
  {
    name: "Cat",
    age: "1 DAY AGO",
    description:
      "djfksjlfjlsdjflj ljlfjlfjldjfl jlfjlds jfljdlf jsldfjl sjdfljsd lfjls jfljdlfjld d fs jlj jfljd lfjlsjf ljlfjljfl jlfj lfjlsdjfl jdslfjlsdj flsdjfl jlfjldsfjl sj fljdslf jdslfjljf l",
  },
  ,
  {
    name: "Cat",
    age: "1 DAY AGO",
    description:
      "djfksjlfjlsdjflj ljlfjlfjldjfl jlfjlds jfljdlf jsldfjl sjdfljsd lfjls jfljdlfjld d fs jlj jfljd lfjlsjf ljlfjljfl jlfj lfjlsdjfl jdslfjlsdj flsdjfl jlfjldsfjl sj fljdslf jdslfjljf l",
  }
];

const HomeComponent = (props) => {
  return (
    <div className={classes["box-wrap"]}>
      <div className={classes.top}>
        <div className={classes["input-box"]}>
          <div className={classes["input-rows"]}>
            <p>SEARCH ON</p>
            <input type="text" disabled placeholder={props.selectedTitle} />
          </div>
          <div className={classes["input-rows"]}>
            <p>SEARCH TERM</p>
            <input type="text" placeholder="Search Text.." />
          </div>
          <div className={classes["input-rows"]}>
            <p>SORT BY</p>
            <input type="text" disabled placeholder={props.sortByOrder} />
          </div>
        </div>
        <button className={classes["home-btn"]}>Submit</button>
      </div>
      <hr />
      <div className={classes.center}>
        <p>Search Results</p>
      </div>
      <div className={classes.cards}>
        { SampleData.map(item => <Cards searchItem={item.name} days={item.age} description={item.description}/> )}
      </div>
      <div className="bottom-margin"></div>
    </div>
  );
};

export default HomeComponent;
