import './App.css';
import {Route,Switch} from "react-router-dom";

import Home from "./pages/Home";
import Login  from './pages/Login';
import Settings from './pages/Settings';

function App() {
  return (
    <div>
      
      <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
