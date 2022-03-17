import React from "react";

import Header from "../components/Header";
import Container from "../Layout/Container";
import Footer from "../components/Footer";
import ConfigurationSettings from "../components/ConfigurationSettings";

const Settings = () => {
  return (
    <React.Fragment>
      <Header />
      <Container><ConfigurationSettings /></Container>
      <Footer />
    </React.Fragment>
  );
};

export default Settings;
