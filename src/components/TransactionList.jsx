import TransactionItem from "./TransactionItem.jsx";

export default function TransactionList({ transactions, limit }) {
  if (transactions.length === 0) {
    return <p className="empty">No transactions yet. Make a deposit or withdrawal to see it here.</p>;
  }
  const shown = limit ? transactions.slice(0, limit) : transactions;
  return (
    <ul className="tx-list">
      {shown.map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </ul>
  );
}
