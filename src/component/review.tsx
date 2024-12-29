import React from "react";
import { motion } from "framer-motion";
import Carousel from "./card";

function Review() {
  return (
    <div className="flex flex-col lg:flex-row text-black px-5 lg:px-20 py-10 mb-10 overflow-hidden">
      <motion.div
        className="mx-auto w-full"
        initial={{ opacity: 0, scale: 1.5, x: -70 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
      >
        <img src="/guy.svg" alt="guy" />
      </motion.div>
      <motion.div
        className="flex flex-col mt-5 lg:mt-0 gap-1 lg:gap-4 w-full"
        initial={{ opacity: 0, scale: 1.5, x: 70 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h1 className=" font-medium underline">Reviews</h1>
        <h1 className="text-3xl text-blue-600 font-semibold">What they say</h1>
        <div className="flex flex-col justify-between w-fit">
          <h1 className="text-3xl font-semibold">About us</h1>
          <div className="mx-auto ">
            <img src="/curve.svg" alt="curve" width={80} />
          </div>
        </div>
        <p className="text-lg lg:text-xl leading-9">
          We're honoured to have helped these begin a{" "}
          <span className="text-blue-600">SMILING FACES</span> new life abroad
        </p>
        <div className="relative py-3 flex flex-row">
          <div className=" absolute  z-50 top-0 right-5 lg:right-28 p-5 bg-blue-400 rounded-lg bg-opacity-50">
            <img src="/quote.svg" alt="quote" />
          </div>

          <Carousel />
        </div>
      </motion.div>
    </div>
  );
}

export default Review;
