import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { selecttotal } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const subtotal = useSelector(selecttotal);
  const taxes = subtotal * 0.13;
  const totalWithTax = subtotal * 0.13 + subtotal;
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto m-2">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/dyz"
            alt=""
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your shopping basket" : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap flex flex-col">
                <div>
                  Total ({items.length}items):{" "}
                  <span className="font-bold">
                    {" "}
                    <Currency quantity={subtotal} currency="CAD" />{" "}
                  </span>
                </div>
                <div>
                  Taxes ({items.length}items):{" "}
                  <span className="font-bold">
                    {" "}
                    <Currency quantity={taxes} currency="CAD" />{" "}
                  </span>
                </div>
                <div>
                  Subtotal ({items.length}items):{" "}
                  <span className="font-bold">
                    {" "}
                    <Currency quantity={totalWithTax} currency="CAD" />{" "}
                  </span>
                </div>
              </h2>
            </>
          )}

          <button
            disabled={!session}
            className={`button mt-2 ${
              !session &&
              "from-fray-300 to-gray-500 border-gray-200 cursor-not-allowed"
            }`}
          >
            {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
