// import { useSelector } from "react-redux";
import Cards from "../Layout/Cards";
import classes from "./components-styles/HomeComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { homeActions } from "../store/homeSlice";
import Container from "../Layout/Container";
import Header from "./Header";
import Pagination from "../Layout/Pagination";
import HomeLayout from "../Layout/HomeLayout";
import Footer from "./Footer";

const postDataA = [  {
  key: 1,
  searchItem: "dixit joshi",
  description:
    "disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl",
},
{
  key: 2,
  searchItem: "dixit joshi",
  description:
    "sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl",
},
{
  key: 3,
  searchItem: "dixit joshi",
  description:
    "disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl",
},
{
  key: 4,
  searchItem: "dixit joshi",
  description:
    "disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl disjif  kdsjl jl f lsjl  jflj sjf  jflj lj  jaldjf ljs jfjd ljfj jfjfldjflj jfj lj ljdls lj fjlsjdl jl jdl jfljfl jldjf lsjf ljlf jljfls djflj sdlfjl sjfl fjdsjfl  jlj fj fsdl jfl",
},];

const HomeComponent = (props) => {
  const [searchText, setSearchText] = useState("");

  const searchTitle = useSelector((state) => state.setting.defaultSearchType);
  const sortOrder = useSelector((state) => state.setting.defaultSortOrder);
  const resultOnPage = useSelector((state) => state.defaultResultsPerPage);

  const isLoading = useSelector((state) => state.home.isLoading);
  const hasErrors = useSelector((state) => state.home.hasErrors);
  const postData = useSelector((state) => state.home.posts);
  const dispatch = useDispatch();

  const onInputChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${searchText}&srlimit=20&srwhat=text&srsort=${sortOrder}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      const list = data.query.search.map((item) => {
        return {
          id: item.pageid,
          searchItem: item.title,
          description: item.snippet,
        };
      });
      dispatch(homeActions.postSuccess(list));
      // console.log(list)
    } catch (error) {
      dispatch(homeActions.postError());
    }
  };
  return (
    <Container>
      <Header />
      <div className={classes["box-wrap"]}>
        <div className={classes.top}>
          <div className={classes["input-box"]}>
            <div className={classes["input-rows"]}>
              <p>SEARCH ON</p>
              <input type="text" disabled value={searchTitle} />
            </div>
            <div className={classes["input-rows"]}>
              <p>SEARCH TERM</p>
              <input
                type="text"
                placeholder="Search Text.."
                onChange={onInputChangeHandler}
              />
            </div>
            <div className={classes["input-rows"]}>
              <p>SORT BY</p>
              <input type="text" disabled value={sortOrder} />
            </div>
          </div>
          <button className={classes["home-btn"]} onClick={onSubmitHandler}>
            Submit
          </button>
        </div>
        <hr />
        <div className={classes.center}>
          <p>Search Results</p>
        </div>
        {/* <div className="bottom-margin"></div> */}
      </div>
      <div className={classes.cards}>
        {postData.length === 0 && <p>no card element</p>}
        {postData.length > 0 &&
          postDataA.map((item) => (
            <Cards
              key={item.id}
              searchItem={item.searchItem}
              description={item.description}
            />
          ))}
      </div>
      <Pagination />
      <HomeLayout />
      <Footer />
    </Container>
  );
};

export default HomeComponent;
