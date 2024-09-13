import { useState } from "react";
import "./styles.css";

export default function App() {
  const [totoalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(10);
  const [processingfee, setProcessingFee] = useState(0);
  const [downPayement, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const updateEmi = () => {};
  const updatedownPayment = () => {};

  return (
    <div className="App">
      <span className="titleh"> Emi cal</span>
      <span className="title">Total cost</span>
      <input
        type="number"
        value={totoalCost}
        onChange={(e) => setTotalCost(e.target.value)}
        placeholder="total cost here"
      />
      <span className="title">Interest rate in (%)</span>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <span className="title">Processing fee</span>
      <input
        type="number"
        value={processingfee}
        onChange={(e) => setProcessingFee(e.target.value)}
      />
      <span className="title">Downpayment</span>
      <input
        type="range"
        min={0}
        max={totoalCost}
        value={downPayement}
        onChange={updateEmi}
      />
      <span className="title">Loan per month</span>
      <input
        type="range"
        min={0}
        max={totoalCost}
        value={emi}
        onChange={updatedownPayment}
      />

      <span className="title">Tenure</span>
    </div>
  );
}
