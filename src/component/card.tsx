import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Carousel = () => {
  const items = [
    {
      name: "Justin Watt",
      role: "Doctor",
      text: "Here you will find a comparison between every health insurance cover proven to have provided world-class services to their customers.",
      imgSrc: "/photo.svg",
    },
    {
      name: "Jane Doe",
      role: "Surgeon",
      text: "We help you find the best health insurance plans tailored to your needs.",
      imgSrc: "/photo.svg",
    },
    {
      name: "Sam Smith",
      role: "Nurse",
      text: "Our goal is to provide a comprehensive analysis of insurance covers.",
      imgSrc: "/photo.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full h-72 flex justify-center items-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full flex justify-center items-center"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative w-full bg-white rounded-lg p-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="border-2 border-blue-600 rounded-full p-1">
                <img
                  src={items[currentIndex].imgSrc}
                  alt="photo"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-medium">
                  {items[currentIndex].name}
                </h1>
                <h1 className="text-xs">{items[currentIndex].role}</h1>
              </div>
            </div>
            <p className="px-5 leading-7 mt-4 pt-6 pb-20 rounded-lg bg-gradient-to-r from-transparent to-gray-200">
              {items[currentIndex].text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
