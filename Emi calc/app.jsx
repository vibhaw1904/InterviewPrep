import { useState } from "react";
import "./styles.css";
import { tenureContent } from "./utils/tenureContent";
export default function App() {
  const [totalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(10);
  const [processingfee, setProcessingFee] = useState(1);
  const [downPayement, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEmi = (downpayment) => {
    // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]

    const loanAmnt = totalCost - downpayment;
    const rateOfInterest = 10 / 100;
    const numberOfYrs = tenure / 12;
    const EMI =
      (loanAmnt * rateOfInterest * (1 + rateOfInterest) ** numberOfYrs) /
      ((1 + rateOfInterest) ** numberOfYrs - 1);
    return Number(EMI / 12).toFixed(0);
  };
  const updateEmi = (e) => {
    if (!totalCost) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));
    const emi = calculateEmi(dp);
    setEmi(emi);
  };
  const updatedownPayment = (e) => {
    if (!totalCost) return;
    const emi1 = Number(e.target.value);
    setEmi(emi1.toFixed(0));
  };

  const calculateDownPayement = () => {};
  return (
    <div className="App">
      <span className="titleh"> Emi cal</span>
      <span className="title">Total cost</span>
      <input
        type="number"
        value={totalCost}
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
          min={0}
          max={totalCost}
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
          min={calculateDownPayement(totalCost)}
          max={calculateDownPayement(0)}
          className="slider"
          value={emi}
          onChange={updatedownPayment}
        />
        <div className="lables">
          <label>{calculateEmi(totalCost)}</label>
          <b>{emi}</b>
          <label>{calculateEmi(0)}</label>
        </div>
      </div>
      <span className="title">Tenure</span>
      <div className="tenureContainer">
        {tenureContent.map((t) => {
          return (
            <button
              className={`tenure ${t === tenure ? "selected" : ""}`}
              onClick={() => setTenure(t)}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
