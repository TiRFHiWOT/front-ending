import React from "react";
import { motion } from "framer-motion";

export function PopUpOne() {
  return (
    <div className="hidden group-hover:flex absolute whitespace-nowrap -left-[50%] top-[90%] bg-white flex-row justify-between pl-20 pr-10 py-10 rounded-2xl text-sm">
      <div className="grid grid-cols-2 font-semibold w-full gap-6 gap-x-20 text-blue-500 uppercase">
        <a href="" className="hover:text-black">
          Car
        </a>
        <a href="" className="hover:text-black">
          Motorcycle
        </a>
        <a href="" className="hover:text-black">
          Personal Cyber
        </a>
        <a href="" className="hover:text-black">
          Luxury Watch
        </a>
        <a href="" className="hover:text-black">
          Jewellery
        </a>
        <a href="" className="hover:text-black">
          Home
        </a>
        <a href="" className="hover:text-black">
          Handbag
        </a>
        <a href="" className="hover:text-black">
          Pet
        </a>
        <a href="" className="hover:text-black">
          Personal Accident
        </a>
        <a href="" className="hover:text-black">
          Travel
        </a>
        <a href="" className="hover:text-black">
          Health and Medical
        </a>
        <a href="" className="hover:text-black">
          Life
        </a>
      </div>
      <div className="w-full">
        <img src="/guy.svg" alt="guy" width={300} />
      </div>
    </div>
  );
}

export function PopUpTwo() {
  return (
    <div className="hidden w-fit group-hover:flex px-60 py-10 font-semibold justify-center absolute left-[-50%] top-[90%] bg-white flex-row rounded-2xl text-sm">
      <div className=" flex flex-row whitespace-nowrap text-blue-600 uppercase">
        <div className="flex flex-col gap-6">
          <a href="" className="hover:text-black px-10">
            Architects and Surveyors
          </a>
          <a href="" className="hover:text-black px-10">
            Engineers
          </a>
          <a href="" className="hover:text-black px-10">
            IT/Technology Services
          </a>
          <a href="" className="hover:text-black px-10">
            Consultingy
          </a>
          <a href="" className="hover:text-black px-10">
            Retail
          </a>
          <a href="" className="hover:text-black px-10">
            Professional Services
          </a>
          <a href="" className="hover:text-black px-10">
            Food and Beverage
          </a>
          <a href="" className="hover:text-black px-10">
            Interior Design and Renovation
          </a>
          <a href="" className="hover:text-black px-10">
            Construction
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <a href="" className="hover:text-black px-10">
            Logistics
          </a>
          <a href="" className="hover:text-black px-10">
            Manufacturing and Storage
          </a>
          <a href="" className="hover:text-black px-10">
            Wellness and Fitness
          </a>
          <a href="" className="hover:text-black px-10">
            Healthcare Services
          </a>
          <a href="" className="hover:text-black px-10">
            Education
          </a>
          <a href="" className="hover:text-black px-10">
            Charity
          </a>
          <a href="" className="hover:text-black px-10">
            Real Estate
          </a>
          <a href="" className="hover:text-black px-10">
            Entertainment
          </a>
        </div>
      </div>

      <img src="/guy.svg" alt="guy" width={400} />
    </div>
  );
}

export function PopUpThree() {
  return (
    <div className="absolute whitespace-nowrap hidden group-hover:flex -left-80 top-[80%] py-5 pl-5 pr-10 bg-white rounded-xl text-blue-500 flex-col justify-center">
      <div className="text-black border-b border-gray-300 pb-3">
        <h1 className="font-bold">How can we help you?</h1>
        <h1 className="text-xs mt-2">Contact our support team now!</h1>
      </div>
      <div className="grid grid-cols-2 gap-y-5 gap-x-10">
        <a href="" className="flex flex-row gap-1 mt-3">
          <img src="/call1.svg" alt="call" width={35} />
          <div className="flex flex-col">
            <h1 className="text-xs text-gray-800">Call Center</h1>
            <h1 className="text-sm  font-medium">+65 6287 7537</h1>
          </div>
        </a>

        <a href="" className="flex flex-row gap-1 mt-3">
          <img src="/call1.svg" alt="call" width={35} />
          <div className="flex flex-col">
            <h1 className="text-xs text-gray-800">Call Center</h1>
            <h1 className="text-sm  font-medium">+65 6287 7537</h1>
          </div>
        </a>

        <a href="" className="flex flex-row gap-1 mt-3">
          <img src="/call1.svg" alt="call" width={35} />
          <div className="flex flex-col">
            <h1 className="text-xs text-gray-800">Call Center</h1>
            <h1 className="text-sm  font-medium">+65 6287 7537</h1>
          </div>
        </a>

        <a href="" className="flex flex-row gap-1 mt-3">
          <img src="/call1.svg" alt="call" width={35} />
          <div className="flex flex-col">
            <h1 className="text-xs text-gray-800">Call Center</h1>
            <h1 className="text-sm  font-medium">+65 6287 7537</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export function PopUpFour() {
  return (
    <div className="hidden group-hover:flex bg-white rounded-xl py-8 pr-8 absolute -left-60 top-[80%] flex-row gap-2">
      <div>
        <img src="/LogoVector.svg" alt="LogoVector" width={400} />
      </div>

      <div className="w-full text-start">
        <img src="/my1.svg" alt="call" width={300} />
        <div>
          <h1 className="text-blue-600 text-lg font-semibold mt-1">
            Customer Login
          </h1>
          <h1 className="text-gray-900 text-sm leading-6">
            Manage, Update policies through your dedicated Self Services Portal
          </h1>
        </div>

        <button className="relative w-fit font-semibold py-2 pl-8 pr-10 mt-4 items-center flex whitespace-nowrap justify-start bg-blue-700 rounded-md text-white overflow-hidden">
          <p className="z-20 text-xs">LOGIN</p>
          <span className="-top-6 right-8 rotate-45 absolute w-20 h-20 border-t-[6px] border-r-[6px] border-gray-500 rounded-lg"></span>
        </button>
      </div>

      <div className="w-full text-start">
        <img src="/my2.svg" alt="call" width={300} />
        <div>
          <h1 className="text-blue-600 text-lg font-semibold mt-1">
            Agent Login
          </h1>
          <h1 className="text-gray-900 text-sm leading-6">
            Manage, Update policies through your dedicated Self Services Portal
          </h1>
        </div>
        <button className="relative w-fit font-semibold py-2 pl-8 pr-10 mt-4 items-center flex whitespace-nowrap justify-start bg-blue-700 rounded-md text-white overflow-hidden">
          <p className="z-20 text-xs">LOGIN</p>
          <span className="-top-6 right-8 rotate-45 absolute w-20 h-20 border-t-[6px] border-r-[6px] border-gray-500 rounded-lg"></span>
        </button>
      </div>
    </div>
  );
}
