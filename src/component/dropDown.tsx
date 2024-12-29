import React from "react";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-2 py-1 bg-transparent border-2 border-blue-600 text-blue-600 rounded-md hover:bg-gray-300 focus:outline-none"
      >
        <span>ቋንቋ ይምረጡ</span>
        <FaChevronDown
          className={`ml-2 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 pl-1 w-fit bg-white border border-gray-200 shadow-lg z-10">
          <ul className="py-2">
            <li
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Amharic selected")}
            >
              እንግሊዝኛ
            </li>
            <li
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Amharic selected")}
            >
              ቻይንኛ (ቀላሉ)
            </li>
            <li
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("English selected")}
            >
              ክመርኛ
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
