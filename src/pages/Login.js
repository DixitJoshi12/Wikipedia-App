import React from "react";

import Header from "../components/Header";
import Container from "../Layout/Container";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import HomeLayout from "../Layout/HomeLayout";
import SpacingTop from "../Layout/spacing";

const Login = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <SpacingTop />
        <LoginForm />
        <HomeLayout />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Login;
