import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex justify-center my-20 overflow-hidden px-4">
      <motion.div
        className=" bg-gradient-to-b from-blue-700 via-blue-700 to-transparent p-1 rounded-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8 },
        }}
      >
        <div className="mx-auto bg-white text-center py-10 grid grid-cols-2 gap-y-4 md:gap-y-0 md:grid-cols-4 rounded-3xl">
          <div className="flex flex-col justify-around text-black px-16 gap-1 border-r md:border-r-2 border-blue-700 md:border-blue-700">
            <div className="mx-auto ">
              <img src="/cus.svg" alt="cus" width={70} />
            </div>
            <h1 className="text-xl font-medium">Customer Ist</h1>
            <p className="">Customer Ist Approach</p>
          </div>

          <div className="flex flex-col justify-around text-black px-16 gap-1 border-r-2 border-transparent md:border-blue-700">
            <div className="mx-auto ">
              <img src="/sat.svg" alt="sat" width={70} />
            </div>
            <h1 className="text-xl font-medium">Satisfied</h1>
            <p className="">Policy Holder</p>
          </div>

          <div className="flex flex-col justify-around text-black px-16 gap-1 border-r md:border-r-2 border-blue-700 md:border-blue-700">
            <div className="mx-auto ">
              <img src="/top.svg" alt="top" width={70} />
            </div>
            <h1 className="text-xl font-medium">Top</h1>
            <p className="">Insurance Partners</p>
          </div>

          <div className="flex flex-col justify-around text-black px-16 gap-1">
            <div className="mx-auto ">
              <img src="/gur.svg" alt="" width={70} />
            </div>
            <h1 className="text-xl font-medium">Guaranteed</h1>
            <p className="">Claims Assistance</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
