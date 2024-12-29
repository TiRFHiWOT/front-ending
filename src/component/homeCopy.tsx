import React, { useState } from "react";
import { motion } from "framer-motion";
import CarCard from "./carCard";
import ToggleButtons from "./button";
import Back from "./back";

const cards = [
  { name: "Motorcycle", image: "/moto.svg" },
  { name: "Personal Cyber", image: "/house.svg" },
  { name: "Luxury Watch", image: "/watch.svg" },
  { name: "Jewellery", image: "/jewel.svg" },
  { name: "Home", image: "/house.svg" },
  { name: "Handbag", image: "/bag.svg" },
  { name: "Pet", image: "/pet.svg" },
  { name: "Personal Accident", image: "/acc.svg" },
  { name: "Travel", image: "/travel.svg" },
  { name: "Health and Medical", image: "/heart.svg" },
  { name: "Life ", image: "/life.svg" },
];

function Home() {
  const [activeTab, setActiveTab] = useState("personal");

  const firstGroupCount = 10;

  const firstGroup = cards.slice(0, firstGroupCount);
  const secondGroup = cards.slice(firstGroupCount);

  return (
    <div className="relative pt-20 pr-10 overflow-hidden min-h-screen">
      <Back />
      <div className="flex flex-col border border-gray-600 z-30 lg:flex-row justify-center">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 },
          }}
        >
          <img src="/home.svg" alt="home" width={400} />
        </motion.div>
        <div className="flex flex-col gap-3 mt-10">
          <motion.div
            className="text-center lg:text-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
          >
            <h1 className="text-lg lg:text-3xl font-semibold flex-wrap">
              The #1 Trusted Platform For Your Insurance Needs
            </h1>
            <p className="text-black font-medium">
              Your financial literacy journey starts here
            </p>
          </motion.div>
          <ToggleButtons activeTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === "personal" && (
            <div className="col-span-4 gap-5 grid grid-cols-5">
              {firstGroup.map((card, index) => (
                <CarCard
                  key={`first-${index}`}
                  name={card.name}
                  image={card.image}
                />
              ))}
            </div>
          )}
          {activeTab === "personal" && (
            <div className=" absolute bottom-0 ] flex flex-row justify-end ">
              <div className="grid grid-cols-7">
                {secondGroup.map((card, index) => (
                  <CarCard
                    key={`second-${index}`}
                    name={card.name}
                    image={card.image}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {activeTab === "business" && (
        <div className="text-center">Business content.</div>
      )}
    </div>
  );
}

export default Home;
