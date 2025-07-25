import React, { useEffect, useState } from 'react';

const Header2 = () => {
  const messages = [
    '" Exclusive Deal! Extra 5% Off on all your prepaid orders at StackCart!',
    'Order above ₹199: You Get FREE Delivery!',
    'Order Above ₹999: Get 5% Off.',
    'Order Above ₹1499: Get 10% Off.',
    'Order Above ₹2999: Get 15% Off and A Free Custom Tea Mug with Your Favorite Photo! 🖼☕'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <h2 className="w-full bg-[#001128] text-white">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        {/* Left Arrow */}
        <button
          type="button"
          aria-label="Previous"
          className="p-2 hover:bg-white/10 rounded"
          onClick={() =>
            setIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length)
          }
        >
          <svg className="w-4 h-4 rotate-90 text-white" viewBox="0 0 10 6" fill="currentColor">
            <path d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" />
          </svg>
        </button>

        {/* Rotating Message */}
        <div className="w-full max-w-5xl text-center overflow-hidden transition-all duration-300">
          <p className="text-sm sm:text-base font-medium animate-fade">
            {messages[index]}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          aria-label="Next"
          className="p-2 hover:bg-white/10 rounded"
          onClick={() => setIndex((prevIndex) => (prevIndex + 1) % messages.length)}
        >
          <svg className="w-4 h-4 -rotate-90 text-white" viewBox="0 0 10 6" fill="currentColor">
            <path d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" />
          </svg>
        </button>
      </div>
    </h2>
  );
};

export default Header2;
