
import './App.css';
import {Route,Switch} from "react-router-dom";
import Header from './components/Header';
import Container from "./Layout/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Container/>
      <Footer />
      <Switch>
      <Route path="/home">
        {/* <p>home</p> */}
      </Route>
      <Route path="/">
        {/* <p>default</p> */}
      </Route>
      <Route path="/settings">
        {/* <p>setting</p> */}
      </Route>
      </Switch>
    </div>
  );
}

export default App;
