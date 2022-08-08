import { useState } from "react";

export default function SecretPhrase() {
  const [phrase, setPhrase] = useState("");

  if (phrase === "star wars") {
    alert("You may pass!");
  }

  function handleChange(e) {
    const lowerPhrase = e.target.value.toLowerCase();

    setPhrase(lowerPhrase);
  }

  return (
    <div className="phrase-container">
      <div className="phrase-wrapper">
        <h1>What's the Secret Phrase?</h1>
        <input type="text" onChange={handleChange} />
        <div className="hint">HINT: It's "Star Wars"</div>
      </div>
    </div>
  );
}
