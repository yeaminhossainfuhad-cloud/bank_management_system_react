import { useBank } from "../context/BankContext.jsx";
import BalanceCard from "../components/BalanceCard.jsx";
import TransactionList from "../components/TransactionList.jsx";

export default function Dashboard() {
  const { account, balance, totalDeposited, totalWithdrawn, transactions } = useBank();
  return (
    <>
      <h1>{account.bankName} Account Manager</h1>
      <p className="subtitle">
        {account.holder} · Account {account.number}
      </p>
      <div className="grid">
        <BalanceCard label="Current balance" value={balance} tone="main" />
        <BalanceCard label="Total deposited" value={totalDeposited} tone="deposit" />
        <BalanceCard label="Total withdrawn" value={totalWithdrawn} tone="withdraw" />
      </div>
      <h2>Recent activity</h2>
      <TransactionList transactions={transactions} limit={3} />
    </>
  );
}
