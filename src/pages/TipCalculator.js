import React, { useState } from "react";

export default function App() {
  const [percentageTip, setPercentageTip] = useState(null);
  const [billAmount, setBillAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateBill = (e) => {
    e.preventDefault();
    const formValid = +billAmount > 0 && +percentageTip > 0;

    if (!formValid) {
      alert("Please enter valid input");
      return;
    }

    const tipAmount = +billAmount * (+percentageTip / 100);
    const total = +billAmount * (1 + percentageTip / 100);
    setTipAmount(tipAmount);
    setTotal(total);
  };

  return (
    <div className="App">
      <form onSubmit={calculateBill}>
        <div>
          <label>Bill Amount</label>
          <input
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Percentage Tip</label>
          <input
            value={percentageTip}
            onChange={(e) => setPercentageTip(e.target.value)}
          />
        </div>

        <button type="submit">calculate</button>
      </form>

      <div>Tip Amount: {tipAmount.toFixed(2)}</div>
      <div>Total: {total.toFixed(2)}</div>
    </div>
  );
}
