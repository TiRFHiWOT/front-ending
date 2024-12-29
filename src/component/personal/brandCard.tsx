import React from "react";

function BrandCard({ name, image }) {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-transparent p-[1.5px] w-fit rounded-t-lg">
      <a
        href=""
        className="h-32 w-40 bg-white rounded-t-lg flex flex-col justify-center items-center gap-2"
      >
        <div className="mx-auto ">
          <img src={image} alt="cus" width={70} />
        </div>
        <h1>{name}</h1>
      </a>
    </div>
  );
}

export default BrandCard;
