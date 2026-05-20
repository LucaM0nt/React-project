import { useContext } from "react";
import { Link } from "react-router-dom";
import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";

import ShopContext from "../store/shop-context";

export default function Checkout() {
  const { cartData } = useContext(ShopContext);
  const { items, changeItemQuantity } = cartData || {};

  const safeItems = items || [];
  const itemCount = safeItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = safeItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (safeItems.length === 0) {
    return (
      <section className="container my-10">
        <h1 className="text-primary font-heading text-heading-medium mb-4">
          Checkout
        </h1>
        <div className="py-10 text-center">
          <p className="mb-6">Your cart is empty.</p>
          <Link
            to="/"
            className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80 transition-colors"
          >
            Go to shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container my-10">
      <h1 className="text-primary font-heading text-heading-medium mb-6">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-[#C7C7C7]">
            {safeItems.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-6 gap-3 py-4 items-center"
              >
                <div className="col-span-1 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] p-2">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain aspect-square"
                  />
                </div>
                <div className="col-span-3">
                  <h4 className="font-semibold text-md">{item.title}</h4>
                  <p className="text-neutral-100">€ {item.price.toFixed(2)}</p>
                  <p className="text-sm text-neutral-100">
                    Line total: € {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="col-span-2 flex items-center justify-end gap-2">
                  <button onClick={() => changeItemQuantity(item.id, -1)}>
                    <MinusCircleIcon size={24} />
                  </button>
                  <span className="min-w-[24px] text-center">
                    {item.quantity}
                  </span>
                  <button onClick={() => changeItemQuantity(item.id, 1)}>
                    <PlusCircleIcon size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="bg-white border border-[#C7C7C7] rounded-md p-6 h-fit">
          <h2 className="text-primary font-semibold text-xl mb-4">
            Order summary
          </h2>
          <div className="flex items-center justify-between mb-2 text-neutral-100">
            <span>Items ({itemCount})</span>
            <span>€ {totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>€ {totalPrice.toFixed(2)}</span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full bg-primary text-white px-4 py-2 rounded-md hover:opacity-80 transition-colors"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
