import React from "react";

// import Header from "../components/Header";
// import Container from "../Layout/Container";
// import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
// import HomeLayout from "../Layout/HomeLayout";
// import Pagination from "../Layout/Pagination";

const Home = () => {
  // let number = 0;
  const onNumOfResults = (value)=>{
    console.log(value);
    // number = value;
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
      {/* <Container><HomeComponent numOfResults={onNumOfResults} /></Container> */}
      {/* <Pagination /> */}
       {/* <HomeLayout /> */}
      {/* <Footer /> */}
      <HomeComponent />
    </React.Fragment>
  );
};

export default Home;