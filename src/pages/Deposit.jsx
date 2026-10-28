import { useBank } from "../context/BankContext.jsx";
import DepositForm from "../components/DepositForm.jsx";

export default function Deposit() {
  const { balance } = useBank();
  return (
    <>
      <h1>Deposit money</h1>
      <p className="subtitle">Current balance: ৳{balance.toFixed(2)}</p>
      <DepositForm />
    </>
  );
}
