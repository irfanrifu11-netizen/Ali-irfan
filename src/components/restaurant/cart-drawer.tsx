"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useRestaurant } from "./restaurant-provider";

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    cartTotal,
    setCartOpen,
    setQuantity,
    removeFromCart,
  } = useRestaurant();

  return (
    <>
      {cartOpen && (
        <button
          type="button"
          aria-label="Close cart"
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface shadow-2xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-outline-variant px-6 py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
              Your order
            </p>
            <h2 className="font-display text-2xl text-on-surface">Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-outline text-on-surface-variant hover:text-primary"
          >
            <X size={17} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container text-secondary">
                <ShoppingBag size={26} />
              </span>
              <p className="font-display text-xl text-on-surface">
                Your cart is empty
              </p>
              <p className="mt-2 max-w-[240px] text-sm text-on-surface-variant">
                Add something delicious from the menu to get started.
              </p>
              <Link
                href="/#menu"
                onClick={() => setCartOpen(false)}
                className="mt-6 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary"
              >
                Browse menu
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-outline-variant bg-surface p-3"
                >
                  <div
                    className="h-20 w-20 shrink-0 rounded-xl bg-cover bg-center"
                    style={{
                      backgroundImage: item.image
                        ? `url("${item.image}")`
                        : "linear-gradient(135deg, #fed7aa, #fdba74)",
                    }}
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-on-surface">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-on-surface-variant hover:text-error"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-secondary">
                      ₹{item.price} each
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3 rounded-full border border-outline px-2 py-1">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, quantity - 1)}
                          aria-label="Decrease quantity"
                          className="text-on-surface-variant hover:text-primary"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="text-xs font-semibold text-on-surface">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.id, quantity + 1)}
                          aria-label="Increase quantity"
                          className="text-on-surface-variant hover:text-primary"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-on-surface">
                        ₹{item.price * quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-outline-variant bg-surface px-6 py-5">
            <div className="mb-1 flex items-center justify-between text-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="mb-4 flex items-center justify-between text-xs text-secondary">
              <span>Delivery calculated at checkout</span>
              <span>{cart.length} items</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setCartOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-brand-dark"
            >
              Proceed to checkout
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
