import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./navigation/NavBar";
import Home from "./pages/Home";
import DiceRoll from "./pages/DiceRoll";
import CoinFlip from "./pages/CoinFlip";
import Greeting from "./pages/Greeting";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="*" component={NavBar} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coinflip" component={CoinFlip} />
          <Route path="/diceroll" component={DiceRoll} />
          <Route path="/greeting" component={Greeting} />
        </Switch>
      </Router>

      {/* 
      add 2 numbers 
      greeter (first name, last name, greet button with alert "hello -fname -lname")
      search filter
      */}
    </div>
  );
}

export default App;
