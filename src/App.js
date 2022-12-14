import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";
import NavBar from "./navigation/NavBar";
import Home from "./pages/Home";
import DiceRoll from "./pages/DiceRoll";
import CoinFlip from "./pages/CoinFlip";
import Greeting from "./pages/Greeting";
import TipCalculator from "./pages/TipCalculator";
import SecretPhrase from "./pages/SecretPhrase";
import PizzaBuilder from "./pages/PizzaBuilder";
import BoxShadow from "./pages/BoxShadow";
import NoMatch from "./pages/NoMatch";

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
          <Route path="/tip-calculator" component={TipCalculator} />
          <Route path="/secret-phrase" component={SecretPhrase} />
          <Route path="/pizza-builder" component={PizzaBuilder} />
          <Route path="/box-shadow-generator" component={BoxShadow} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
