import { useState } from "react";

export default function Greeting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setFirstName(e.target.fname.value);
    setLastName(e.target.lname.value);
  }

  function clearForm() {
    setFirstName("");
    setLastName("");
    document.getElementById("nameForm").reset();
  }

  return (
    <div>
      <h1>{`Hello ${
        firstName && firstName[0].toUpperCase() + firstName.slice(1)
      } ${lastName && lastName[0].toUpperCase() + lastName.slice(1)}`}</h1>

      <form onSubmit={handleSubmit} id="nameForm">
        <input placeholder="First Name" type="text" name="fname" />
        <input placeholder="Last Name" type="text" name="lname" />

        <button>Click Me!</button>
      </form>

      <button onClick={clearForm}>Clear</button>
    </div>
  );
}
