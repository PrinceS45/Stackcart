import React from 'react';

function HeroSection() {
  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {/* Background Image */}
      <div className='flex max-w-full' >
        <img className='w-1/2 max-h-1/3' src="https://stackcart.in/cdn/shop/files/affordable-home-decor-9.jpg?v=1732860248&width=1500" alt="img1" />

        <img className='w-1/2 h-1/2' src="https://stackcart.in/cdn/shop/files/7_d9c7f027-dd8a-4ba9-8de1-1faf7f2f235a.jpg?v=1731675022&width=1500" alt="img2" />
      </div>

      {/* Centered Content with FULL transparency */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8 max-w-xl w-full z-10 text-white">
        <div className="text-lg font-bold mb-2 text-gray-200">
          <p>WELCOME TO STACKCART</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-100">
          GET BEST DEAL
        </h2>
        <div>
          <a
            href="/collections/all"
            className="inline-block bg-transparent text-white px-6 py-3 rounded-md border-2 border-white 
             transition duration-300 hover:shadow-lg hover:shadow-white hover:scale-105"
          >
            Shop Now
          </a>


        </div>
      </div>
    </div>
  );
}

export default HeroSection;
