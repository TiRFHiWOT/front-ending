import React from "react";
import { motion } from "framer-motion";

function CarCard({ name, image }) {
  return (
    <div>
      <motion.div
        className="relative border-2 w-fit group border-transparent hover:border-blue-500 hover:border-dashed transition-all duration-300 rounded-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8 },
        }}
      >
        <div
          className=" mx-auto shadow w-36 min-h-28 gap-2 flex flex-col bg-white rounded-xl text-sm text-center text justify-center 
            group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300"
        >
          <img
            src={image}
            alt="car"
            width={50}
            className="mx-auto  absolute bottom-12 left-[50%] translate-x-[-50%]"
          />
          <p className="text-xs absolute left-[50%] whitespace-nowrap translate-x-[-50%] bottom-5 font-semibold text-blue-600">
            {name}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default CarCard;
