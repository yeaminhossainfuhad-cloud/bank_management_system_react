export default function TransactionItem({ transaction }) {
  const isDeposit = transaction.type === "Deposit";
  return (
    <li className={`tx ${isDeposit ? "tx-deposit" : "tx-withdrawal"}`}>
      <div>
        <strong>{transaction.type}</strong>
        <span className="tx-date">{new Date(transaction.date).toLocaleString()}</span>
      </div>
      <span className="tx-amount">
        {isDeposit ? "+" : "−"}৳{transaction.amount.toFixed(2)}
      </span>
    </li>
  );
}
