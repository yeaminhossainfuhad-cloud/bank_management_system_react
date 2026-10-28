import { useEffect, useRef, useState } from "react";
import { useBank } from "../context/BankContext.jsx";

export default function DepositForm() {
  const { deposit } = useBank();
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);

  function handleSubmit(e) {
    e.preventDefault();
    const res = deposit(parseFloat(amount));
    setResult(res);
    if (res.ok) setAmount("");
    inputRef.current?.focus();
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <label htmlFor="deposit-amount">Amount to deposit</label>
      <input id="deposit-amount" ref={inputRef} type="number" step="0.01" placeholder="0.00"
        value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit" className="btn btn-deposit">Deposit</button>
      {result && <p className={`msg ${result.ok ? "msg-ok" : "msg-error"}`} role="status">{result.message}</p>}
    </form>
  );
}
