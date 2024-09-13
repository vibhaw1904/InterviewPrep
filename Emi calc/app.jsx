import { useState } from "react";
import "./styles.css";

export default function App() {
  const [totoalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(10);
  const [processingfee, setProcessingFee] = useState(0);
  const [downPayement, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  return (
    <div className="App">
      <div></div>
    </div>
  );
}
