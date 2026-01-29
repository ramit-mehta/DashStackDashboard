import { useState } from "react";
import { salesData } from "../../pages/data/salesData";
import SalesChart from "../../components/charts/SalesChart";

function SalesDetails() {
  const [month, setMonth] = useState("October");

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Sales Details</h3>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="text-sm bg-gray-50 border rounded-lg px-3 py-1.5 focus:outline-none"
        >
          {Object.keys(salesData).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="w-full overflow-x-hidden">
        <div className="h-[260px] sm:h-[300px]">
          <SalesChart data={salesData[month]} />
        </div>
      </div>
    </div>
  );
}

export default SalesDetails;
