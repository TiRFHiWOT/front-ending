import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedinIn, FaX } from "react-icons/fa6";

function CustomerService() {
  return (
    <div className="mx-auto text-black overflow-hidden">
      <div className="flex flex-col  gap-4 text-center px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 1.5, y: 50 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
        >
          <img src="/logo.svg" alt="logo" width={300} height={300} />
        </motion.div>

        <motion.h1
          className="text-[1.3rem]"
          initial={{ opacity: 0, scale: 1.5, y: 50 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
        >
          Powered by Worldbridge Insurance Broker
        </motion.h1>

        <motion.h1
          className="text-lg"
          initial={{ opacity: 0, scale: 1.5, y: 50 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
        >
          #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727
        </motion.h1>
      </div>

      <div className="relative flex flex-col gap-4 md:gap-10 md:flex-row justify-between items-center mt-24 mb-10 px-5 md:ps-36 lg:pe-20">
        <motion.div
          className="relative border border-gray-200 rounded-xl pl-20 lg:pl-40 py-5 pr-10 min-w-80 bg-white"
          style={{ boxShadow: "inset 0 0 3px rgb(156 163 175)" }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
        >
          <img
            src="/oprate.svg"
            alt="logo"
            className="absolute bottom-0 -left-3 md:-left-10 w-28 md:w-min"
          />
          <div className="flex flex-col justify-between items-center gap-3">
            <h1 className="text-gray-400 whitespace-nowrap">
              CUSTOMER SERVICE
            </h1>
            <h1 className="text-blue-300 whitespace-nowrap">1800 2333 533</h1>
          </div>
        </motion.div>

        <div className="-z-50 absolute w-full md:left-0 top-[25%] md:top-[50%] border border-gray-200"></div>

        <motion.div
          className="relative bg-white border border-gray-200 whitespace-nowrap min-w-80 rounded-xl flex flex-row justify-between items-center p-5 gap-5"
          style={{ boxShadow: "inset 0 0 3px rgb(156 163 175)" }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
        >
          <img src="/sb.png" alt="logo" width={80} />
          <img src="/cs.svg" alt="logo" width={60} />
          <img src="/mca.png" alt="logo" width={100} />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-8 text-sm font-medium leading-7 px-2 md:px-6 lg:px-20 mb-24"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h1>Remark</h1>
        <p>
          Please answer all the above questions truthfully. If the insured
          conceals the truth or making a false statement will result in the
          voiding of this insurance contract. The insurance company has the
          right to terminate the insurance contract under Section 865 of the
          Civil and Commercial Code, and may refuse to pay compensation
        </p>
        <p>
          The Company does not contact customers through other (communication)
          channels apart from the Company’s official channels under any
          circumstances.
        </p>
        <div>
          <p>
            Please note that under no circumstances shall the Company be held
            liable or responsible for any claims, losses, damages, expenses, or
            other inconvenience resulting from or in any way connected with such
            communication.
          </p>
          <p>Copyright 2024 Rielverse All Rights Reserved.</p>
        </div>
      </motion.div>
      <div className="h-10 grid grid-cols-3 lg:grid-cols-5">
        <div className="bg-[rgba(229,231,235,255)] col-span-1 lg:col-span-2 rounded-tr-full"></div>
        <div className="col-span-1 flex flex-row justify-around items-start text-blue-500 px-2 lg:px-8">
          <FaFacebookF size={24} />
          <FaX size={24} />
          <FaLinkedinIn size={24} />
          <FaInstagram size={24} />
        </div>
        <div className="bg-[rgba(229,231,235,255)] col-span-1 lg:col-span-2 rounded-tl-full"></div>
      </div>
    </div>
  );
}

export default CustomerService;
