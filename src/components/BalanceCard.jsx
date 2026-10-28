export default function BalanceCard({ label, value, tone = "default", isMoney = true }) {
  return (
    <div className={`card stat stat-${tone}`}>
      <span className="stat-label">{label}</span>
      <span className="stat-value">
        {isMoney ? `৳${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2 })}` : value}
      </span>
    </div>
  );
}
