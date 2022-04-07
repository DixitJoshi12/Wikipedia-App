import Cards from "../Layout/Cards";
import classes from "./components-styles/HomeComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";
import { homeActions } from "../store/homeSlice";
import Container from "../Layout/Container";
import Header from "./Header";
import Pagination from "../Layout/Pagination";
import HomeLayout from "../Layout/HomeLayout";
import Footer from "./Footer";
import HomeContainer from "../Layout/HomeContainer";
import { serachTextActions } from "../store/searchTextSlice";

const HomeComponent = (props) => {
  const [searchText, setSearchText] = useState("");
  const [index, setIndex] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  const defaultcurrentPage = useSelector(state => state.currentPage.defaultCurrentPage);

  const searchTitle = useSelector((state) => state.setting.defaultSearchType);
  const sortOrder = useSelector((state) => state.setting.defaultSortOrder);
  const resultOnPage = useSelector(
    (state) => state.setting.defaultResultsPerPage
  );

  const isLoading = useSelector((state) => state.home.isLoading);
  // const hasErrors = useSelector((state) => state.home.hasErrors);
  const postData = useSelector((state) => state.home.posts);
  const dispatch = useDispatch();

  const onInputChangeHandler = (event) => {
    setSearchText(event.target.value);
   
  };

  function onGetCurrentPageHandler (){
    setIndex(() => {
      var currentstartIndex = defaultcurrentPage * resultOnPage - resultOnPage;
      return {
        startIndex: currentstartIndex,
        endIndex: parseInt(currentstartIndex) + parseInt(resultOnPage) ,
      };
    });
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(serachTextActions.setSearchText(searchText));
   
    try {
      dispatch(homeActions.postData());
      const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${searchText}&srlimit=20&srwhat=text&srsort=${sortOrder}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      const list = data.query.search.map((item) => {
        return {
          key: Math.random() * 100,
          id: item.pageid,
          searchItem: item.title,
          description: item.snippet,
        };
      });
      dispatch(homeActions.postSuccess(list));
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
                value={searchText}
              />
            </div>
            <div className={classes["input-rows"]}>
              <p>SORT BY</p>
              <input type="text" disabled value={sortOrder} />
            </div>
          </div>
          <button className={`${ searchText === "" ? classes["home-btn"] : classes['home-active']}`} onClick={onSubmitHandler}>
            Submit
          </button>
        </div>
        <hr />
        <div className={classes.center}>
          <p>Search Results</p>
        </div>
      </div>
      <div className={classes.cards}>
        {isLoading && <HomeContainer>Loading Data please Wait</HomeContainer>}
        {postData.length === 0 && !isLoading && <HomeContainer>No Items Found!</HomeContainer>}

        {!isLoading &&
          postData
            .slice(index.startIndex, index.endIndex)
            .map((item) => (
              <Cards
                key={item.id}
                searchItem={item.searchItem}
                description={item.description}
              />
            ))}
      </div>
      {!isLoading && (
        <Pagination
          data={postData}
          numberOfButtons={resultOnPage}
          onGetCurrentPage = {onGetCurrentPageHandler}
        />
      )}
      <HomeLayout />
      <Footer />
    </Container>
  );
};

export default HomeComponent;
