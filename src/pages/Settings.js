import Header from "../components/Header";
import Container from "../Layout/Container";
import Footer from "../components/Footer";
import ConfigurationSettings from "../components/ConfigurationSettings";
import SettingsLayout from "../Layout/SettingsLayout";

const Settings = () => {
  return (
    <Container>
      <Header />
      <ConfigurationSettings />
      <SettingsLayout />
      <Footer />
    </Container>
  );
};

export default Settings;
