import React from "react";

const UpperRowBus = ({ width, BUSINESSCATEGORIES, handleClick }) => {
  return (
    <div
      className={
        "w-full h-auto grid grid-cols-8 max-[800px]:grid-cols-3 max-[500px]:grid-cols-2 gap-40 max-[500px]:gap-10 mt-4"
      }
    >
      {(width > 575 ? BUSINESSCATEGORIES.slice(0, 5) : BUSINESSCATEGORIES).map(
        (value, index) => (
          <div
            data-aos="zoom-in"
            onClick={() => handleClick(value)}
            key={index}
            className={
              "w-36 max-w-[120px] max-[800px]:h-36 max-[500px]:h-20 flex flex-col justify-between text-center"
            }
          >
            <div
              className={
                "w-36 h-28 max-[800px]:h-26 border-t-2 border-r-2 border-transparent rounded-2xl duration-300 hover:border-dashed hover:border-[#2983D399] cursor-pointer "
              }
            >
              <div
                className={
                  "w-36 h-28 max-[800px]:h-26 flex flex-col items-center pt-4 pb-4 rounded-2xl bg-white shadow border border-[#2983D399] duration-300 hover:translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0"
                }
              >
                <div
                  className={
                    "flex h-full justify-between flex-col items-center"
                  }
                >
                  <img
                    className={`w-fit ${
                      index === 0
                        ? `h-[30px] max-[800px]:h-5 translate-y-4`
                        : `h-[50px] max-[800px]:h-10`
                    }  object-contain`}
                    src={value.card_image}
                    alt={"Car logo"}
                  />

                  <span
                    className={` ${
                      index === 0 ? `max-[800px]:translate-y-3` : ``
                    } text-[14px] text-center max-[800px]:text-[16px] font-[400]  text-[#13519C]`}
                  >
                    {value.card_title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default UpperRowBus;
