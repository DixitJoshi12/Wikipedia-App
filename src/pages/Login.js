import React from "react";

import Header from "../components/Header";
import Container from "../Layout/Container";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <Container value={<LoginForm />} /> */}
      {/* <Container /> */}
      <Container><LoginForm /></Container>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
