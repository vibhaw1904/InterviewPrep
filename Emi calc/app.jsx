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
  const calculateEmi = () => {};
  const calculateDownPayement = () => {};
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
      <div>
        <input
          type="range"
          min={calculateEmi(totoalCost)}
          max={calculateEmi(0)}
          className="slider"
          value={downPayement}
          onChange={updateEmi}
        />
        <div className="lables">
          <label>0%</label>
          <b>{downPayement}</b>
          <label>100%</label>
        </div>
      </div>

      <span className="title">Loan per month</span>
      <div>
        <input
          type="range"
          min={calculateDownPayement(totoalCost)}
          max={calculateDownPayement(0)}
          className="slider"
          value={emi}
          onChange={updatedownPayment}
        />
        <div className="lables">
          <label>{calculateEmi(totoalCost)}</label>
          <b>{downPayement}</b>
          <label>{calculateEmi(0)}</label>
        </div>
      </div>
      <span className="title">Tenure</span>
    </div>
  );
}
