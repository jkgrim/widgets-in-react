import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>

      <div>
        <NavLink to="/coinflip">Coin Flip</NavLink>
      </div>

      <div>
        <NavLink to="/diceroll">Dice Roll</NavLink>
      </div>

      <div>
        <NavLink to="/greeting">Greeting</NavLink>
      </div>

      <div>
        <NavLink to="/tip-calculator">Tip Calculator</NavLink>
      </div>

      <div>
        <NavLink to="/secret-phrase">Secret Phrase</NavLink>
      </div>
    </div>
  );
}
