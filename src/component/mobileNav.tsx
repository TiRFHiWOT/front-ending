import React, { useEffect } from "react";
import { FaArrowRight, FaPhone, FaSearch } from "react-icons/fa";

function MobileNav({ isMobileMenuOpen }) {
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={`bg-white text-gray-700 text-lg -z-10 lg:hidden pt-32 pb-10 px-12 flex flex-col gap-6 fixed inset-0 transition-transform duration-500 ${
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col mt-4 gap-10 ">
        <a href="" className="flex items-center gap-2">
          <FaSearch size={24} />
        </a>
        <a href="" className="flex items-center gap-2 font-medium">
          <h1>Contact Us</h1>
          <FaArrowRight className="text-blue-600" />
        </a>
        <a href="" className="flex items-center gap-2 font-medium">
          <h1>Login</h1>
          <FaArrowRight className="text-blue-600" />
        </a>
        <a href="" className="flex items-center gap-2 font-medium">
          <h1>About Us</h1>
          <FaArrowRight className="text-blue-600" />
        </a>
        <a href="" className="flex items-center gap-2 font-medium">
          <h1>Products</h1>
          <FaArrowRight className="text-blue-600" />
        </a>
        <a href="" className="flex items-center gap-2 font-medium">
          <h1>About</h1>
          <FaArrowRight className="text-blue-600" />
        </a>
      </div>

      <div className="flex w-fit items-center text-black gap-4 mt-auto border-2 border-black rounded-lg p-4">
        <FaPhone />
        <div>
          <h1 className="text-lg ">+91 11 4678 1000</h1>
          <p className="text-sm">24 Hours</p>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
