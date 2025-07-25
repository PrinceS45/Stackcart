// Section6.jsx
import React from "react";

const Section6 = () => {
  return (
    <section className="bg-[#001128] text-[#eceaed] my-2">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Media */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="//stackcart.in/cdn/shop/files/astronaut-galaxy-projector-with-remote-control-360-adjustable-timer-kids-500x500.webp?v=1731941664&width=990"
              alt="Astronaut Galaxy Projector"
              className="w-full object-cover"
            />
            <button
              type="button"
              className="absolute top-2 right-2 p-2 bg-[#cbb3d5] text-white rounded-full"
              aria-label="Zoom image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 19 19"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.667 7.94a.5.5 0 0 1 .499-.501l5.534-.014a.5.5 0 1 1 .002 1l-5.534.014a.5.5 0 0 1-.5-.5"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.926 4.665a.5.5 0 0 1 .501.498l.014 5.534a.5.5 0 1 1-1 .003l-.014-5.534a.5.5 0 0 1 .499-.501"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.832 3.03a6.931 6.931 0 1 0-9.802 9.802 6.931 6.931 0 0 0 9.802-9.802M2.323 2.323a7.931 7.931 0 0 1 11.296 11.136l4.628 4.628a.5.5 0 0 1-.707.707l-4.662-4.662A7.932 7.932 0 0 1 2.323 2.323"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Right: Info */}
          <div>
            <p className="text-sm font-semibold mb-1">StackCart</p>
            <h2 className="text-2xl font-bold mb-4">
              Astronaut Galaxy Projector with Remote Control (360° Adjustable, Timer, Kids)
            </h2>

            <div className="mb-2">
              <span className="text-lg font-bold text-white">Rs. 799.00</span>
              <span className="line-through text-sm text-gray-400 ml-2">Rs. 1,001.00</span>
              <span className="ml-3 text-xs bg-[#001128] text-[#eceaed] px-2 py-1 rounded-full">
                Sale
              </span>
              <span className="ml-2 text-xs bg-[#001128] text-[#eceaed] px-2 py-1 rounded-full">
                Sold Out
              </span>
            </div>

            <p className="text-sm mb-4">
              <a href="/policies/shipping-policy" className="underline text-white">Shipping</a> calculated at checkout.
            </p>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium">Quantity</label>
              <div className="flex items-center border border-gray-600 w-max rounded">
                <button className="px-3 py-1 text-white disabled:opacity-50" disabled>-</button>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-12 text-center bg-transparent text-white border-l border-r border-gray-600 outline-none"
                />
                <button className="px-3 py-1 text-white">+</button>
              </div>
            </div>

            <a
              href="/products/astronaut-galaxy-projector-with-remote-control-360-adjustable-timer-kids"
              className="inline-flex items-center text-white underline"
            >
              View full details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                viewBox="0 0 14 10"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.537.808a.5.5 0 0 1 .817-.162l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L11.793 5.5H1a.5.5 0 0 1 0-1h10.793L8.646 1.354a.5.5 0 0 1-.109-.546"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
