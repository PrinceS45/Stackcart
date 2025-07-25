import React from 'react';

const Section10 = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-blue-950 text-5xl font-bold text-center">
         Subscribe Now
        </h1>
        
      </div>
        <p className='text-gray-600 text-center mt-7 font-semibold'>Sign up for our email to receive updates on new collections and exclusive offers.</p>

        {/* inpyt section */}
       <div className="mx-auto max-w-screen-sm mt-6 flex justify-center items-center">
  <div className="flex items-center border-2 border-gray-200 rounded-2xl px-4 py-2 shadow-sm focus-within:border-blue-500 transition duration-200 bg-white w-full max-w-md">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 bg-transparent outline-none placeholder:text-lg placeholder:text-gray-400 text-base px-2"
    />
    <button className="ml-2 text-gray-600 font-bold text-2xl hover:bg-blue-700 rounded-full p-2 transition">
      →
    </button>
  </div>
</div>


    </section>
  );
};

export default Section10;
