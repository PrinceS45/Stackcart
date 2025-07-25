import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-[#001128] py-6 md:py-7 text-white my-2 ">
      <div className="max-w-[120rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Image */}
          <div className="relative w-full pt-[95%] ">
            <img
              src="https://stackcart.in/cdn/shop/files/718auuw7fil-sl1500-1000x1000.webp?v=1731842580"
              alt="Karaoke Speaker"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center px-4 py-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                Karaoke Machine for Kids &amp; Adults - Mini Portable Bluetooth Speaker K12
              </h2>
              <div className="mb-8"></div>
              <a
                href="/products/%F0%9F%8E%A4-karaoke-machine-for-kids-adults-mini-portable-bluetooth-speaker-k12-%F0%9F%8E%B6"
                className="inline-block bg-transparent ring-1 text-gray-300 font-semibold mx-auto px-6 py-3 rounded-md transition hover:ring-gray-400 hover:scale-105 "
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
