import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Header from "./components/header";
import Podcasts from "./components/podcasts";
import About from "./components/about";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" exact component={About} />
            <Route path="/podcasts" exact component={Podcasts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
