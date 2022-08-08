import { useState } from "react";

export default function PizzaBuilder() {
  const [selected, setSelected] = useState("large");

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <div className="pizza-builder-container">
      <h1>Lets Order a Pizza!</h1>

      <div className="size-wrapper">
        <h3>What size would you like?</h3>
        <form className="radio-btn-wrapper">
          <input
            type="radio"
            name="service-btn"
            value="small"
            checked={selected === "small"}
            onChange={handleChange}
          />{" "}
          Small
          <input
            type="radio"
            name="service-btn"
            value="medium"
            checked={selected === "medium"}
            onChange={handleChange}
          />{" "}
          Medium
          <input
            type="radio"
            name="service-btn"
            value="large"
            checked={selected === "large"}
            onChange={handleChange}
          />{" "}
          Large
        </form>

        <div className="selected-pizza">
          One {selected} pizza, coming right up!
        </div>
      </div>
    </div>
  );
}
