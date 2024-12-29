import React from "react";
import { HomeIcon } from "./homeIcon";

const BottomRow = ({ CATEGORIES, width, handleClick }) => {
  return (
    <div>
      <div>
        <div
          className={
            "w-full h-auto md:pl-[85px] lg:pl-[137px] mt-2 flex flex-row flex-wrap gap-x-10"
          }
        >
          {(width > 575
            ? CATEGORIES.slice(
                5,
                CATEGORIES.length
                // window.innerWidth <= 800 && window.innerWidth >= 500
                //   ? 4
                //   : 5,
                // window.innerWidth <= 800 && window.innerWidth >= 500 ? 8 : 7
              )
            : []
          ).map((value, index) => (
            <div
              data-aos="zoom-in"
              onClick={() => handleClick(value)}
              key={index}
              className={
                "w-[142.89px] max-w-[120px] h-32 max-[800px]:h-36 max-[500px]:h-20 flex flex-col justify-between text-center"
              }
            >
              <HomeIcon index={index} value={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
