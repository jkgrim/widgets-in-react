import React, { useState } from "react";

export default function App() {
  const [percentageTip, setPercentageTip] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
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
    <div className="tip-calc-container">
      <div className="tip-calc-wrapper">
        <h1>BILL:</h1>
        <form className="bill" onSubmit={calculateBill}>
          <div>
            <label>Bill Amount: </label>
            <input
              className="bill-amount"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
            />
          </div>

          <div>
            <label>Percentage Tip: </label>
            <input
              value={percentageTip}
              onChange={(e) => setPercentageTip(e.target.value)}
            />
          </div>

          <button className="calculate" type="submit">
            Calculate
          </button>
        </form>

        <div className="tip-amount">Tip Amount: ${tipAmount.toFixed(2)}</div>
        <div className="total">Total: ${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
