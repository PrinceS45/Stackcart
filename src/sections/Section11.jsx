import React from "react";

const Section11 = () => {
  return (
    <section className="bg-[#001128] from-gray-100 to-gray-300">
      <div className="max-w-[1200px] mx-auto py-10 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#001128] p-6 rounded-lg shadow-lg">
          {/* Product Image */}
          <div className="relative ">
            {/* Placeholder for media-gallery */}
            <div className="relative ">
              <ul className="grid grid-cols-1 gap-4 list-none">
                <li className="relative overflow-hidden rounded-lg">
                  <div className="relative">
                    <img
                      src="//stackcart.in/cdn/shop/files/719yyzogikl-sl1170-1000x1000.webp?v=1732289693&width=1946"
                      alt="USB Wireless Console Game Stick"
                      className="w-full h-auto object-cover rounded-lg"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                    >
                      <span className="sr-only">Open media modal</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="w-4 h-4 text-black"
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
                          d="M12.832 3.03a6.931 6.931 0 1 0-9.802 9.802 6.931 6.931 0 0 0 9.802-9.802"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm font-medium text-gray-300 mb-1">StackCart</p>
            <h2 className="text-2xl font-bold mb-3 text-white">
              USB Wireless Console Game Stick Built-in 3000+ Classic Games |
              Dual Player Support
            </h2>

            {/* Price Section */}
            <div className="mb-2">
              <span className="text-lg font-bold text-red-600 mr-2">
                Rs. 1,799.00
              </span>
              <s className="text-gray-500">Rs. 2,199.00</s>
              <span className="ml-2 text-xs inline-block px-2 py-1 bg-yellow-300 rounded-full text-black">
                Sale
              </span>
              <span className="ml-2 text-xs inline-block px-2 py-1 bg-gray-400 rounded-full text-white">
                Sold out
              </span>
            </div>

            {/* Shipping Info */}
            <div className="text-xs text-gray-300 mb-4">
              <a href="/policies/shipping-policy" className="underline">
                Shipping
              </a>{" "}
              calculated at checkout.
            </div>

            {/* Quantity Input */}
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium">
                Quantity
              </label>
              <div className="flex items-center mt-1 space-x-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                  disabled
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  defaultValue={1}
                  min={1}
                  className="w-12 text-center border border-gray-300 rounded"
                />
                <button type="button" className="px-2 py-1 bg-gray-200 rounded">
                  +
                </button>
              </div>
              <p className="text-xs mt-1 text-gray-400">(0 in cart)</p>
            </div>

            {/* View Full Details */}
            <a
              href="/products/usb-wireless-console-game-stick-built-in-3000-classic-games-dual-player-support"
              className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
            >
              View full details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="ml-1 w-4 h-4"
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

export default Section11;
