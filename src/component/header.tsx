import React, { useState } from "react";
import Dropdown from "./dropDown";
import MobileNav from "./mobileNav";
import Back from "./back";
import { PopUpFour, PopUpOne, PopUpThree, PopUpTwo } from "./popUp";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-20 lg:h-36 absolute z-50 top-0 mr-2 flex justify-center items-center w-full bg-gradient-to-t from-transparent to-white px-6 pt-2 lg:px-24">
      <div className=" flex items-center border-r-4 border-blue-600 py-2 px-5">
        <img src="/logo.svg" alt="Vector" className="w-60" />
      </div>

      <div className="hidden relative px-2 font-semibold lg:flex flex-row items-center text-blue-600 gap-[60px] h-fit pt-2 pb-4 mx-auto">
        <div className="flex flex-row items-center gap-2">
          <div className="group">
            <a href="">PERSONAL</a>
            <PopUpOne />
          </div>
          <img src="/ArrowDown.png" alt="arrow" width={20} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="group">
            <a href="">BUSINESS</a>
            <PopUpTwo />
          </div>
          <img src="/ArrowDown.png" alt="arrow" width={20} />
        </div>
        <div>ABOUT</div>
        <div>BLOGS</div>
        <Dropdown />
      </div>

      <div className="hidden relative lg:flex items-center space-x-6">
        <a href="" className="group">
          <img src="/lll.svg" alt="/mail" width={50} />
          <PopUpThree />
        </a>
        <div className="group flex flex-col text-center gap-1">
          <div className=" flex flex-row justify-center font-medium gap-2 items-center py-3 px-7 bg-white rounded-xl text-blue-600">
            <img src="/my.svg" alt="My" />
            <div className="flex flex-col items-center">
              <h1>MY</h1>
              <h1>ACCOUNT</h1>
            </div>
          </div>
          <p className="text-[12px] font-medium text-blue-600">
            Claim, renew, manage & more
          </p>
          <PopUpFour />
        </div>
      </div>

      <button
        className="lg:hidden flex items-center ml-auto text-blue-600"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <MobileNav isMobileMenuOpen={isMobileMenuOpen} />
    </div>
  );
}

export default Header;
