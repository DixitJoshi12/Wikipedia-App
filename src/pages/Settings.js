import Header from "../components/Header";
import Container from "../Layout/Container";
import Footer from "../components/Footer";
import ConfigurationSettings from "../components/ConfigurationSettings";
import HomeLayout from "../Layout/HomeLayout";

const Settings = () => {
  return (
    <Container>
      <Header />
      <ConfigurationSettings />
      <div height="5vh"></div>
      {/* <HomeLayout /> */}
      <Footer />
    </Container>
  );
};

export default Settings;
