import React from "react";

function Back() {
  return (
    <div className="inset-0 absolute z-[-999] bg-gradient-to-b from-[rgba(26,85,158,255)] to-transparent">
      <div className="absolute top-0 right-0">
        <img src="/Vector.svg" alt="Vector" width={650} />
      </div>
      <div className="absolute -top-10">
        <img src="/LogoVector.svg" alt="LogoVector" width={720} />
      </div>
    </div>
  );
}

export default Back;
