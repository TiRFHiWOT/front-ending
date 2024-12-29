import React from "react";
import { HomeIcon } from "./homeIcon";

const UpperRow = ({ CATEGORIES, handleClick, width }) => {
  return (
    <div
      className={
        "w-full h-auto grid grid-cols-6 gap-40 max-[500px]:grid-cols-3 max-[600px]:grid-cols-3 max-[500px]:gap-10 mt-4 flex-wrap max-[500px]:flex max-[500px]:mr-[15px] max-[500px]:justify-center"
      }
    >
      {(width > 575 ? CATEGORIES.slice(0, 5) : CATEGORIES).map(
        (value, index) => (
          <div
            data-aos="zoom-in"
            onClick={() => handleClick(value)}
            key={index}
            className={
              "w-36 max-w-[120px] h-44 max-[800px]:h-36 max-[500px]:h-20 flex flex-col justify-between text-center"
            }
          >
            <HomeIcon index={index} value={value} />
          </div>
        )
      )}
    </div>
  );
};

export default UpperRow;
