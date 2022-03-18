import React from "react";

import Header from "../components/Header";
import Container from "../Layout/Container";
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container><HomeComponent /></Container>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
