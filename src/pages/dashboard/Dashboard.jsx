import DashboardLayout from "../../layout/DashboardLayout";
import StatCard from "../../components/cards/StatCard";
import data from "../../pages/data/dashboard.json";
import SalesDetails from "./SalesDetails";
import DealsTable from "../../components/table/DealsTable";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>
      {/* Sales chart  */}
      <SalesDetails />

      {/* Deals  */}
      <DealsTable />
    </DashboardLayout>
  );
}
