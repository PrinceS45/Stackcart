import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate() ; 
  return (
    <header className="sticky top-0 z-50 bg-[#fdfdfd] text-[#001128] shadow-md ">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="//stackcart.in/cdn/shop/files/header_image_1.jpg?v=1731846781&width=200"
            alt="StackCart"
            width="200"
            height="70"
            className="h-[70px] object-contain"
          />
        </a>

        {/* Hamburger for mobile */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6 text-black"
              viewBox="0 0 18 16"
            >
              <path
                fill="currentColor"
                d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
              ></path>
            </svg>
          </summary>
          <nav className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 space-y-2 z-50">
            {[
              { href: "/", label: "Home" },
              { href: "/collections/toys-baby/toys+hat", label: "Toys & Baby" },
              { href: "/collections/home-decor", label: "Home Decor" },
              { href: "/collections/gifts", label: "Gifts" },
              { href: "/collections/gadgets", label: "Gadgets" },
              { href: "/collections", label: "Collection" },
              { href: "/pages/contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/ToyBaby", label: "Toys & Baby" },
            { href: "/HomeDecore", label: "Home Decor" },
            { href: "/Gifts", label: "Gifts" },
            { href: "/Gadgets", label: "Gadgets" },
            { href: "/Collections", label: "Collection" },
            { href: "/Contact", label: "Contact" },
          ].map((item) => (
            
            <div onClick={()=> navigate(item.href)} key={item.href} className="text-sm font-medium hover:text-blue-600 cursor-pointer">
                  {item.label}
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
            {/* Search icon */}
             <a href="/account/login" className="text-sm hover:text-blue-600">
         <img className="h-8" src="/assets/Search.png" alt="Search" />
          </a>
      {/* Login icon */}
          <a href="/account/login" className="text-sm hover:text-blue-600">
         <img className="h-8" src="/assets/logins.png" alt="Login" />
          </a>



          <a href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              width="40"
              height="40"
              className="fill-current text-black"
            >
              <path d="M50 60 H260 L240 180 H80 Z" fill="none" stroke="#666" strokeWidth="3" />
              <line x1="60" y1="70" x2="250" y2="70" stroke="#999" strokeWidth="2" />
              <line x1="80" y1="80" x2="230" y2="80" stroke="#999" strokeWidth="2" />
              <line x1="100" y1="90" x2="210" y2="90" stroke="#999" strokeWidth="2" />
              <line x1="50" y1="50" x2="70" y2="60" stroke="#FF0000" strokeWidth="5" strokeLinecap="round" />
              <rect x="90" y="50" width="30" height="40" fill="#FFC107" />
              <rect x="130" y="50" width="25" height="50" fill="#4CAF50" />
              <rect x="165" y="50" width="35" height="30" fill="#F44336" />
              <circle cx="120" cy="45" r="10" fill="#2196F3" />
              <rect x="200" y="60" width="20" height="30" fill="#9C27B0" />
              <circle cx="100" cy="200" r="10" fill="#000" />
              <circle cx="200" cy="200" r="10" fill="#000" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
