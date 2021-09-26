import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
