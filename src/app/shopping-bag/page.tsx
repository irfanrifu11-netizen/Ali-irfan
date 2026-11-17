import type { Metadata } from "next";
import { ShoppingBagPage } from "@/components/site/shopping-bag-page";

export const metadata: Metadata = {
  title: "Your Shopping Bag",
};

export default function Page() {
  return <ShoppingBagPage />;
}
