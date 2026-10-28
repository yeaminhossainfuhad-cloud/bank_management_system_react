# Bank Management System – React

A simple, responsive **Bank Management System** built with React and Vite. This frontend practice project simulates basic banking operations, including viewing account details, depositing money, withdrawing money, and reviewing transaction history.

> **Note:** This is a frontend-only demo. It does not connect to a real bank, backend, or database, and no real money is transferred.

## 📸 Project Screenshots

### Dashboard
![Bank Management System Dashboard](./Project%20Screenshot/Dashboard.png)

### Deposit
![Deposit Money Page](./Project%20Screenshot/Deposit.png)

### Withdraw
![Withdraw Money Page](./Project%20Screenshot/Withdraw.png)

### Transaction History
![Transaction History Page](./Project%20Screenshot/Transaction.png)

## ✨ Features

- **Dashboard:** View the account holder's name, account number, current balance, total deposits, and total withdrawals.
- **Deposit money:** Enter an amount, validate the input, and update the simulated balance.
- **Withdraw money:** Withdraw funds when the amount is valid and does not exceed the available balance.
- **Transaction history:** View deposit and withdrawal records with amounts and dates.
- **Navigation:** Move between Dashboard, Deposit, Withdraw, and Transaction History pages.
- **Reusable components:** Organize the interface into reusable React components.
- **Form validation:** Prevent empty, zero, negative, or invalid amounts and handle insufficient funds.
- **Responsive design:** Use the app on desktop and mobile-sized screens.
- **Persistent data (optional):** If implemented, account data and transactions can be saved in `localStorage`.

## 🛠️ Technologies Used

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- HTML5
- CSS3
- React Hooks (`useState`, `useEffect`)

## 📁 Project Structure

```text
bank_management_system_react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BalanceCard.jsx
│   │   └── TransactionItem.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Deposit.jsx
│   │   ├── Withdraw.jsx
│   │   └── Transactions.jsx
│   ├── context/
│   │   └── BankContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Project Screenshot/
│   ├── Dashboard.png
│   ├── Deposit.png
│   ├── Transaction.png
│   └── Withdraw.png
├── package.json
└── README.md
```

*The structure above is a suggested example. Update it to match the actual files in your repository.*

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yeaminhossainfuhad-cloud/bank_management_system_react.git
   ```

2. Open the project directory:

   ```bash
   cd bank_management_system_react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal (Vite commonly uses `http://localhost:5173`).

## 📜 Available Scripts

Run these scripts from the project directory if they are defined in your `package.json`:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint, if configured |

## 🧪 Validation and Banking Rules

- Deposit and withdrawal amounts must be greater than zero.
- Empty or invalid amounts are rejected.
- A withdrawal cannot exceed the available balance.
- Successful operations update the simulated balance and transaction history.
- When no transactions exist, the app should show an appropriate empty-state message.

## 🎯 Learning Objectives

This project practices:

- React functional components and component composition
- Passing data through props
- State management with React Hooks
- Form submission and input validation
- Conditional rendering and rendering lists with `map()`
- Client-side routing with React Router DOM
- Responsive CSS styling

## 🔮 Possible Improvements

- Share account state with the Context API.
- Persist the balance and transaction history using `localStorage`.
- Focus the amount input with `useRef`.
- Add a withdrawal confirmation step.
- Add automated tests and improve accessibility.

## 👨‍💻 Author

**Md Yeamin Hossain Fuhad**

- GitHub: [yeaminhossainfuhad-cloud](https://github.com/yeaminhossainfuhad-cloud)

---

If you find this project useful for learning, feel free to explore the source code and suggest improvements.
