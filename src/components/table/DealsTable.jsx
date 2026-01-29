import { useState } from "react";
import { dealsData } from "../../pages/data/dealsData";
import StatusBadge from "./StatusBadge";
import DealModal from "../modal/DealModal";

function DealsTable() {
  const [deals, setDeals] = useState(dealsData);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [form, setForm] = useState({
    product: "",
    location: "",
    date: "",
    piece: "",
    amount: "",
    status: "",
  });

  const filteredDeals = deals.filter((item) => {
    const matchSearch =
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" ? true : item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const handleSave = () => {
    const newDeal = {
      ...form,
      id: Date.now(),
    };

    setDeals((prev) => [...prev, newDeal]);
    setOpenModal(false);
    setForm({
      product: "",
      location: "",
      date: "",
      piece: "",
      amount: "",
      status: "",
    });
  };

  const formatDate = (value) => {
    if (!value) return "-";

    if (value.includes(".") && value.includes("-")) {
      return value;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) return value;

    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold">Deals Details</h3>
        <input
          type="text"
          placeholder="Search product or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-full sm:w-[250px]"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm w-full sm:w-[180px]
             appearance-none bg-white
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Status</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
        </select>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg"
        >
          + Add Deal
        </button>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500">
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Date-Time</th>
              <th className="px-4 py-3 text-left">Piece</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredDeals.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No results found
                </td>
              </tr>
            ) : (
              filteredDeals.map((item) => (
                <tr key={item.id} className="border-b last:border-none">
                  <td className="px-4 py-3">{item.product}</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="px-4 py-3"> {formatDate(item.date)}</td>
                  <td className="px-4 py-3">{item.piece}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Layout*/}
      <div className="lg:hidden space-y-4">
        {filteredDeals.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">No results found</p>
        ) : (
          filteredDeals.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">{item.product}</p>
                <StatusBadge status={item.status} />
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <b>Location:</b> {item.location}
                </p>
                <p>
                  <b>Date-Time:</b> {""}
                  {formatDate(item.date)}
                </p>
                <p>
                  <b>Piece:</b> {item.piece}
                </p>
                <p>
                  <b>Amount:</b> {item.amount}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      <DealModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}

export default DealsTable;
