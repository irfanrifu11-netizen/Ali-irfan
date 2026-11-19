export function StatusBadge({ value }: { value: string }) {
  const normalized = value.toLowerCase();
  const tone =
    normalized === "approved" || normalized === "paid" || normalized === "confirmed"
      ? "bg-emerald-50 text-emerald-700"
      : normalized === "rejected" || normalized === "unpaid"
        ? "bg-red-50 text-red-700"
        : "bg-amber-50 text-amber-700";
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${tone}`}
    >
      {value}
    </span>
  );
}
