import { FiUsers, FiBox, FiTrendingUp, FiClock } from "react-icons/fi";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";

const ICONS = {
  users: FiUsers,
  orders: FiBox,
  sales: FiTrendingUp,
  pending: FiClock,
};

function StatCard({ title, value, change, trend, subtitle, type }) {
  const isUp = trend === "up";
  const Icon = ICONS[type];

  return (
    <div className="bg-white rounded-2xl shadow-sm relative h-[140px] p-4">
      <div
        className={`absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center
          ${
            type === "users"
              ? "bg-indigo-100 text-indigo-600"
              : type === "orders"
                ? "bg-yellow-100 text-yellow-600"
                : type === "sales"
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-100 text-orange-600"
          }`}
      >
        <Icon className="text-lg" />
      </div>

      <p className="text-sm text-gray-400 leading-none">{title}</p>

      <h3 className="text-[24px] font-semibold mt-2 leading-tight">{value}</h3>

      <div className="flex items-center gap-2 mt-4 text-sm whitespace-nowrap">
        {isUp ? (
          <HiArrowTrendingUp className="text-green-500" />
        ) : (
          <HiArrowTrendingDown className="text-red-500" />
        )}

        <span
          className={`font-medium ${isUp ? "text-green-500" : "text-red-500"}`}
        >
          {change}
        </span>

        <span className="text-gray-400 truncate max-w-[170px]">{subtitle}</span>
      </div>
    </div>
  );
}

export default StatCard;
