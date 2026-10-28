import { useEffect, useRef, useState } from "react";
import { useBank } from "../context/BankContext.jsx";

export default function WithdrawForm() {
  const { withdraw } = useBank();
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);

  function handleSubmit(e) {
    e.preventDefault();
    const value = parseFloat(amount);
    // Bonus: confirm before withdrawing (only when the amount looks valid)
    if (value > 0 && !window.confirm(`Withdraw ৳${value.toFixed(2)}?`)) return;
    const res = withdraw(value);
    setResult(res);
    if (res.ok) setAmount("");
    inputRef.current?.focus();
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <label htmlFor="withdraw-amount">Amount to withdraw</label>
      <input id="withdraw-amount" ref={inputRef} type="number" step="0.01" placeholder="0.00"
        value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit" className="btn btn-withdraw">Withdraw</button>
      {result && <p className={`msg ${result.ok ? "msg-ok" : "msg-error"}`} role="status">{result.message}</p>}
    </form>
  );
}
