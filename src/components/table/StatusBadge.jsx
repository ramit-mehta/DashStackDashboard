function StatusBadge({ status }) {
  const isDelivered = status === "Delivered";

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full
        ${
          isDelivered
            ? "bg-green-100 text-green-600"
            : "bg-orange-100 text-orange-600"
        }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
