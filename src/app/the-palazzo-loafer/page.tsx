import type { Metadata } from "next";
import { PalazzoLoaferPage } from "@/components/site/palazzo-loafer-page";

export const metadata: Metadata = {
  title: "The Palazzo Loafer",
};

export default function Page() {
  return <PalazzoLoaferPage />;
}
