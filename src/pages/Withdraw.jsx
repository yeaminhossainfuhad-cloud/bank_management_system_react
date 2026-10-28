import { useBank } from "../context/BankContext.jsx";
import WithdrawForm from "../components/WithdrawForm.jsx";

export default function Withdraw() {
  const { balance } = useBank();
  return (
    <>
      <h1>Withdraw money</h1>
      <p className="subtitle">Available to withdraw: ৳{balance.toFixed(2)}</p>
      <WithdrawForm />
    </>
  );
}
