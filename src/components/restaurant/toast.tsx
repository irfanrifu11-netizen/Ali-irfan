"use client";

import { CheckCircle2 } from "lucide-react";
import { useRestaurant } from "./restaurant-provider";

export function Toast() {
  const { notice } = useRestaurant();
  if (!notice) return null;
  return (
    <div className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-white shadow-2xl">
      <CheckCircle2 size={16} className="text-emerald-400" />
      {notice}
    </div>
  );
}
