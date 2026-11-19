"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AdminShell } from "@/components/restaurant/admin-shell";
import { localStore, useLocalValue } from "@/lib/local-store";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAdmin = useLocalValue<boolean>(localStore.keys.admin, false);
  const isLogin = pathname === "/admin/login";
  const allowed = isLogin || isAdmin;

  useEffect(() => {
    if (!allowed) {
      router.replace("/admin/login");
    }
  }, [allowed, router]);

  if (!allowed) {
    return <div className="min-h-screen bg-surface" />;
  }

  if (isLogin) {
    return <>{children}</>;
  }

  return <AdminShell>{children}</AdminShell>;
}
