import React from "react";

const HeadText = () => {
  return (
    <div className="flex flex-col">
      <span
        data-aos="fade-left"
        className={
          "max-[1150px]:self-center lg:whitespace-nowrap font-semibold self-start max-[1150px]:text-center min-[1800px]:text-[40px] max-[500px]:text-[30px] text-[36px] text-[#13519C] tracking-[-1px]"
        }
      >
        The #1 Trusted Platform For Your Insurance Needs
      </span>
      <span
        data-aos="fade-left"
        className={
          "mb-2 max-[1150px]:self-center font-semibold self-start text-[18px] text-[#000000]"
        }
      >
        Your financial literacy journey starts here
      </span>
    </div>
  );
};

export default HeadText;
