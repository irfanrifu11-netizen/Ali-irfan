import { AnnouncementBar } from "@/components/restaurant/announcement-bar";
import { CartDrawer } from "@/components/restaurant/cart-drawer";
import { SiteFooter } from "@/components/restaurant/site-footer";
import { SiteHeader } from "@/components/restaurant/site-header";
import { Toast } from "@/components/restaurant/toast";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <CartDrawer />
      <Toast />
      <SiteFooter />
    </div>
  );
}
