<<<<<<< HEAD
# Bank Management System

A frontend-only practice project built with **React + Vite**. The balance is simulated — no backend, database, or real money is involved.

## Features
- Dashboard with bank name, account holder, account number, current balance, total deposited and total withdrawn
- Deposit form (rejects empty, zero and negative amounts; shows success/error messages)
- Withdraw form (also rejects amounts above the balance; asks for confirmation first)
- Transaction history with type, amount and date, styled differently for deposits and withdrawals, plus an empty state
- Navigation with React Router DOM (`NavLink`)
- Context API (`BankContext`) shares account state across pages
- `localStorage` keeps balance and history after refresh
- `useRef` focuses the amount input
- Responsive CSS

## Concepts practiced
Functional components, props, `useState`, `useEffect`, `useRef`, Context API, controlled forms, conditional rendering, `map()`, React Router.

## Installation
```bash
git clone <your-repo-url>
cd bank-management
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

## Project structure
```
src/
├── components/  Navbar, BalanceCard, DepositForm, WithdrawForm, TransactionList, TransactionItem
├── pages/       Dashboard, Deposit, Withdraw, Transactions
├── context/     BankContext.jsx
├── App.jsx, main.jsx, index.css
```
=======
# bank_management_system_react
>>>>>>> a8f84aae417efeb000fb423dee92e0eb4ced4c30
