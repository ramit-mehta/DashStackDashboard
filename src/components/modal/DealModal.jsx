import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const PRICE_PER_PIECE = 80; // example price

function DealModal({ open, onClose, onSave, form, setForm }) {
  const [errors, setErrors] = useState({});

  // 🔹 Auto calculate amount when piece changes
  useEffect(() => {
    if (form.piece && !isNaN(form.piece)) {
      const total = Number(form.piece) * PRICE_PER_PIECE;
      setForm((prev) => ({
        ...prev,
        amount: `$${total.toLocaleString()}`,
      }));
    } else {
      setForm((prev) => ({ ...prev, amount: "" }));
    }
  }, [form.piece]);

  if (!open) return null;

  // 🔹 Validation
  const validate = () => {
    const newErrors = {};

    if (!form.product) newErrors.product = "Product is required";
    if (!form.location) newErrors.location = "Location is required";
    if (!form.date) newErrors.date = "Date & time required";
    if (!form.piece) newErrors.piece = "Piece is required";
    if (!form.status) newErrors.status = "Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <div
        className="
          fixed z-50
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-white
          w-[90%] sm:w-[420px]
          rounded-xl
          shadow-xl
          p-6
        "
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            {form.id ? "Edit Deal" : "Add Deal"}
          </h3>
          <button onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-3 text-sm">
          <div>
            <input
              placeholder="Product Name"
              className="w-full border rounded-lg px-3 py-2"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
            />
            {errors.product && (
              <p className="text-red-500 text-xs mt-1">{errors.product}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Location"
              className="w-full border rounded-lg px-3 py-2"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <input
              type="datetime-local"
              className="w-full border rounded-lg px-3 py-2"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Piece"
              className="w-full border rounded-lg px-3 py-2"
              value={form.piece}
              onChange={(e) => setForm({ ...form, piece: e.target.value })}
            />
            {errors.piece && (
              <p className="text-red-500 text-xs mt-1">{errors.piece}</p>
            )}
          </div>

          <div className="relative">
            <input
              disabled
              className="w-full border rounded-lg px-6 py-2 bg-gray-100"
              value={form.amount || ""}
            />
          </div>

          <div>
            <select
              className="w-full border rounded-lg px-3 py-2"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="">Select status</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-xs mt-1">{errors.status}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Save Deal
        </button>
      </div>
    </>
  );
}

export default DealModal;
