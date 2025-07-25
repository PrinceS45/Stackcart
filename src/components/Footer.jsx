import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001128] text-white border-t border-white/10 mt-0 pt-6 pb-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Consumer Policy */}
          <div>
            <h2 className="text-lg font-semibold mb-3">CONSUMER POLICY</h2>
            <ul className="space-y-2">
              <li><a href="/pages/return-and-refund-policy" className="hover:underline">Cancellation & Returns</a></li>
              <li><a href="/pages/terms-of-service" className="hover:underline">Terms of Use</a></li>
              <li><a href="/pages/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/pages/refund-policy" className="hover:underline">Refund Policy</a></li>
              <li><a href="/pages/shipping-policy" className="hover:underline">Shipping Policy</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-3">ABOUT</h2>
            <ul className="space-y-2">
              <li><a href="/search" className="hover:underline">Search</a></li>
              <li><a href="/pages/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/pages/about-us" className="hover:underline">About Us</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-lg font-semibold mb-3">HELP</h2>
            <ul className="space-y-2">
              <li><a href="/pages/payments" className="hover:underline">Payments</a></li>
              <li><a href="/pages/shipping-policy" className="hover:underline">Shipping</a></li>
              <li><a href="/pages/return-and-refund-policy" className="hover:underline">Cancellation & Returns</a></li>
              <li><a href="/pages/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-lg font-semibold mb-3">ADDRESS</h2>
            <div className="space-y-2 text-sm">
              <p>A-21 The Greenview Apartment Sector-5, Rohini, New Delhi-110085.</p>
              <p>Support Email: customercare.stackcart@gmail.com</p>
              <p>Contact: 9289916169</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com/profile.php?id=61572672278830" aria-label="Facebook" className="hover:text-blue-400">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://www.instagram.com/stackcart11/" aria-label="Instagram" className="hover:text-pink-500">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://www.youtube.com/@StackCart_1411" aria-label="YouTube" className="hover:text-red-500">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>

        {/* Payment Icons */}
        <div className="text-center space-y-4">
          <div>
            <img
              src="//stackcart.in/cdn/shop/files/razorpay-icon.png?v=970615779369349052"
              alt="Razorpay"
              className="mx-auto max-w-[250px] mb-2"
            />
          </div>
          <ul className="flex justify-center flex-wrap gap-3">
            {[
              { src: "//stackcart.in/cdn/shop/files/Visa-icon.png", alt: "Visa" },
              { src: "//stackcart.in/cdn/shop/files/rupay-icon.png", alt: "Rupay" },
              { src: "//stackcart.in/cdn/shop/files/mastercard-icon.png", alt: "MasterCard" },
              { src: "//stackcart.in/cdn/shop/files/american-express-icon.png", alt: "AmericanExpress" },
              { src: "//stackcart.in/cdn/shop/files/upi-icon.png", alt: "BHIMUPI" },
              { src: "//stackcart.in/cdn/shop/files/net-banking-icon.png", alt: "Net Banking" },
              { src: "//stackcart.in/cdn/shop/files/cash-on-delivery-icon.png", alt: "Cash on Delivery" }
            ].map(({ src, alt }, i) => (
              <li key={i}>
                <img src={src} alt={alt} title={alt} className="h-5" />
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-6">
          <p>© 2025, <a href="/" className="hover:underline">StackCart</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
