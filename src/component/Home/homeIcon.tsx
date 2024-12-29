import React, { useState } from "react";

export function HomeIcon({ index, value }) {
  return (
    <div
      className={
        "w-[142.89px] h-28 max-[800px]:h-24 border-r-2 border-t-2 border-transparent  rounded-2xl duration-300 hover:border-dashed hover:border-[#2983D399] cursor-pointer "
      }
    >
      <div
        className={
          "w-[142.89px]  h-28 max-[800px]:h-24 flex flex-col items-center pt-4 pb-4 rounded-2xl bg-white shadow border border-[#2983D399] duration-300 hover:translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0"
        }
      >
        <div className={"flex h-full justify-between flex-col items-center"}>
          <img
            className={`w-fit ${
              index === 0
                ? `h-[25px] max-[800px]:h-5 translate-y-4`
                : `h-[45px] max-[800px]:h-10`
            }  object-contain`}
            src={value.card_image}
            alt={"Car logo"}
          />

          <span
            className={` ${
              index === 0 ? `max-[800px]:translate-y-3` : ``
            } text-[14px] font-semibold text-center max-[800px]:text-[16px]  text-[#13519C]`}
          >
            {value.card_title}
          </span>
        </div>
      </div>
    </div>
  );
}
