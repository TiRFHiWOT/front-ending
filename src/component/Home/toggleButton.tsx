import React, { useState } from "react";

const ToggleButton = ({ currentVariant, setCurrentVariant }) => {
  const VARIANTS = ["PERSONAL", "BUSINESS"];

  return (
    <div
      className={
        "w-full max-w-[1200px] self-start max-[500px]:flex max-[500px]:justify-center h-auto"
      }
    >
      <div
        data-aos="fade-left"
        className={
          "w-[420px] max-[500px]:w-[200px] mx-auto lg:mx-0 max-[800px]:w-[280px] h-14 bg-white shadow-inner rounded-lg self-start p-1.5 flex gap-1 relative overflow-hidden"
        }
      >
        <div
          style={{ transform: `translateX(${currentVariant * 100}%)` }}
          className={"w-1/2 h-full bg-[#13519C4D]/40 rounded-lg duration-500"}
        ></div>
        <div
          className={
            "absolute  w-[97.5%] h-[43px] rounded-lg flex items-center gap-1"
          }
        >
          {VARIANTS.map((value, index) => (
            <div
              onClick={() => setCurrentVariant(index)}
              className={`w-1/2 h-full rounded-xl font-semibold flex flex-col items-center justify-center text-[12px] duration-500 cursor-pointer ${
                currentVariant === index ? `text-[#13519C]` : `text-black `
              } `}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
