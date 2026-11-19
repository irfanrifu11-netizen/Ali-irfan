import { Suspense } from "react";
import { TrackOrderContent } from "./track-order-content";

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <TrackOrderContent />
    </Suspense>
  );
}
