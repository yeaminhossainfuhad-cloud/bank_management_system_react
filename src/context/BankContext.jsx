import { createContext, useContext, useEffect, useState } from "react";

const BankContext = createContext(null);

const ACCOUNT = {
  bankName: "Harbor Bank",
  holder: "Amina Rahman",
  number: "1002 3456 7890",
};
const OPENING_BALANCE = 1000;

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function BankProvider({ children }) {
  const [balance, setBalance] = useState(() => load("bank-balance", OPENING_BALANCE));
  const [transactions, setTransactions] = useState(() => load("bank-transactions", []));

  useEffect(() => {
    localStorage.setItem("bank-balance", JSON.stringify(balance));
    localStorage.setItem("bank-transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const totalDeposited = transactions
    .filter((t) => t.type === "Deposit")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalWithdrawn = transactions
    .filter((t) => t.type === "Withdrawal")
    .reduce((sum, t) => sum + t.amount, 0);

  function record(type, amount) {
    setTransactions((prev) => [
      { id: Date.now(), type, amount, date: new Date().toISOString() },
      ...prev,
    ]);
  }

  // Each action returns { ok, message } so forms can show feedback.
  function deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0)
      return { ok: false, message: "Enter an amount greater than zero." };
    setBalance((b) => b + amount);
    record("Deposit", amount);
    return { ok: true, message: `Deposited ৳${amount.toFixed(2)} successfully.` };
  }

  function withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0)
      return { ok: false, message: "Enter an amount greater than zero." };
    if (amount > balance)
      return { ok: false, message: "Insufficient funds. Your balance is ৳" + balance.toFixed(2) + "." };
    setBalance((b) => b - amount);
    record("Withdrawal", amount);
    return { ok: true, message: `Withdrew ৳${amount.toFixed(2)} successfully.` };
  }

  function resetData() {
    setBalance(OPENING_BALANCE);
    setTransactions([]);
  }

  return (
    <BankContext.Provider
      value={{ account: ACCOUNT, balance, transactions, totalDeposited, totalWithdrawn, deposit, withdraw, resetData }}
    >
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const ctx = useContext(BankContext);
  if (!ctx) throw new Error("useBank must be used inside BankProvider");
  return ctx;
}
