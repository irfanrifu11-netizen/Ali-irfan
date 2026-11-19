"use client";

import { useState } from "react";
import { Plus, UtensilsCrossed } from "lucide-react";
import { useRestaurant } from "@/components/restaurant/restaurant-provider";

export default function AdminMenuPage() {
  const { items, addMenuItem } = useRestaurant();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const numericPrice = Number(price);
    const numericStock = Number(stock);
    if (!name.trim() || !Number.isFinite(numericPrice) || numericPrice < 0 || !Number.isInteger(numericStock) || numericStock < 0) {
      setMessage("Enter a valid name, price and whole-number stock.");
      return;
    }
    setSaving(true);
    const result = await addMenuItem({
      name: name.trim(),
      price: numericPrice,
      stock: numericStock,
      image: image.trim(),
    });
    setMessage(result.message);
    if (result.success || result.message.includes("browser")) {
      setName("");
      setPrice("");
      setStock("");
      setImage("");
    }
    setSaving(false);
  };

  const inputClass =
    "w-full rounded-xl border border-outline bg-surface px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
        Catalogue
      </p>
      <h1 className="mt-2 font-display text-4xl text-on-surface">Menu items</h1>
      <p className="mt-2 text-sm text-on-surface-variant">
        Add new items to the menu. Items are written to your Apps Script sheet.
      </p>

      <div className="mt-8 grid gap-8 xl:grid-cols-[380px_1fr]">
        <form
          onSubmit={handleSubmit}
          className="h-fit rounded-3xl border border-outline-variant bg-surface p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-primary">
              <Plus size={17} />
            </span>
            <h2 className="font-display text-xl text-on-surface">Add an item</h2>
          </div>
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                Item name
              </span>
              <input
                className={inputClass}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Chicken Burger"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                  Price (₹)
                </span>
                <input
                  className={inputClass}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  inputMode="numeric"
                  placeholder="100"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                  Stock
                </span>
                <input
                  className={inputClass}
                  value={stock}
                  onChange={(event) => setStock(event.target.value)}
                  inputMode="numeric"
                  placeholder="20"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                Image URL (optional)
              </span>
              <input
                className={inputClass}
                value={image}
                onChange={(event) => setImage(event.target.value)}
                placeholder="https://..."
              />
            </label>
            {message && <p className="text-xs text-secondary">{message}</p>}
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-primary py-3 text-xs font-semibold uppercase tracking-widest text-on-primary hover:bg-brand-dark disabled:opacity-60"
            >
              {saving ? "Saving..." : "Add item"}
            </button>
          </div>
        </form>

        <div className="overflow-hidden rounded-3xl border border-outline-variant bg-surface">
          <div className="border-b border-outline-variant px-6 py-4">
            <h2 className="font-display text-xl text-on-surface">
              Current menu ({items.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface-container text-[11px] uppercase tracking-widest text-on-surface-variant">
                <tr>
                  <th className="px-6 py-3 font-semibold">Item</th>
                  <th className="px-6 py-3 font-semibold">Price</th>
                  <th className="px-6 py-3 font-semibold">Stock</th>
                  <th className="px-6 py-3 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-10 w-10 shrink-0 rounded-lg bg-cover bg-center"
                          style={{
                            backgroundImage: item.image
                              ? `url("${item.image}")`
                              : "linear-gradient(135deg, #fed7aa, #c2410c)",
                          }}
                        />
                        <div>
                          <p className="font-medium text-on-surface">{item.name}</p>
                          <p className="text-[11px] text-on-surface-variant">
                            ID {item.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-on-surface">
                      ₹{item.price}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                          item.stock > 0
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">
                      {item.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {items.length === 0 && (
            <div className="px-6 py-16 text-center">
              <UtensilsCrossed className="mx-auto mb-3 text-secondary" size={28} />
              <p className="font-display text-xl text-on-surface">
                No items yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
