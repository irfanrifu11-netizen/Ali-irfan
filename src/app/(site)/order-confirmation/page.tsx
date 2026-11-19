import { Suspense } from "react";
import { OrderConfirmationContent } from "./order-confirmation-content";

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
