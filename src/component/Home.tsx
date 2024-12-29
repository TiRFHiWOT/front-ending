import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "./Home/homeIcon";
import ToggleButton from "./Home/toggleButton";
import UpperRow from "./Home/upperRow";
import HeadText from "./Home/headText";
import UpperRowBus from "./Home/upperRowBus";
import BottomRow from "./Home/bottomRow";
import { CATEGORIES, BUSINESSCATEGORIES } from "./Home/categories";

export default function First_section() {
  const navigate = useNavigate();
  const [currentVariant, setCurrentVariant] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const categoryNo1 =
    window.innerWidth <= 800 && window.innerWidth >= 500 ? 4 : 5;

  window.addEventListener("resize", () => getWidth());

  function getWidth() {
    setWidth(window.innerWidth);
  }

  const VARIANTS = ["PERSONAL", "BUSINESS"];

  const handleClick = (item) => {
    window.scrollTo(0, 0);
    console.log(item.description);
    navigate(`/uat${item.card_href}`, {
      state: { description: item.description },
    });
  };

  return (
    <div>
      <div
        className={
          "w-full z-10 mt-44 max-[1440px]:px-6 max-[500px]:px-2 flex max-[1150px]:flex-col justify-center items-center relative"
        }
      >
        <img
          data-aos="zoom-in"
          src={"/home.svg"}
          className={
            "w-[450px] max-[800px]:w-[300px] max-[1350px]:w-[400px] max-w-[500px] max-h-[380px]  h-fit  object-contain mr-3 "
          }
          alt=""
        />
        <div
          className={
            "w-full max-[500px]:w-auto max-w-[800px] max-[500px]:max-w-[450px] flex flex-col text-start relative top-14 "
          }
        >
          <HeadText />

          <ToggleButton
            currentVariant={currentVariant}
            setCurrentVariant={setCurrentVariant}
          />

          {currentVariant === 0 ? (
            <UpperRow
              CATEGORIES={CATEGORIES}
              width={width}
              handleClick={handleClick}
            />
          ) : (
            <UpperRow
              CATEGORIES={BUSINESSCATEGORIES}
              width={width}
              handleClick={handleClick}
            />
          )}
        </div>
      </div>
      <div className={""}>
        {currentVariant === 0 ? (
          <BottomRow
            CATEGORIES={CATEGORIES}
            width={width}
            handleClick={handleClick}
          />
        ) : (
          <BottomRow
            CATEGORIES={BUSINESSCATEGORIES}
            width={width}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
