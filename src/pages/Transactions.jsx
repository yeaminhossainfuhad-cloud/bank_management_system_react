import { useBank } from "../context/BankContext.jsx";
import TransactionList from "../components/TransactionList.jsx";

export default function Transactions() {
  const { transactions, resetData } = useBank();
  return (
    <>
      <h1>Transaction history</h1>
      <TransactionList transactions={transactions} />
      <button className="btn btn-ghost" onClick={() => window.confirm("Reset balance and history?") && resetData()}>
        Reset demo data
      </button>
    </>
  );
}
