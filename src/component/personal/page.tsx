import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import BrandCard from "./brandCard";

const cards = [
  {
    name: "KIA",
    image: "/src/carLogos/kia.webp",
  },
  {
    name: "LAND ROVER",
    image: "/src/carLogos/landrover.webp",
  },
  {
    name: "LEXUS",
    image: "/src/carLogos/lexus.jpg",
  },
  {
    name: "MAZDA",
    image: "/src/carLogos/mazda.webp",
  },
  {
    name: "MINI",
    image: "/src/carLogos/mini.jpg",
  },
  {
    name: "NISSAN",
    image: "/src/carLogos/nissan.png",
  },
  {
    name: "BMW",
    image: "/src/carLogos/bmw.png",
  },
  {
    name: "PEUGEOT",
    image: "/src/carLogos/Peugeot.jpg",
  },
  {
    name: "SSANGYONG",
    image: "/src/carLogos/ssangyong.webp",
  },
  {
    name: "SUBARU",
    image: "/src/carLogos/subaru.webp",
  },
  {
    name: "SUZUKI",
    image: "/src/carLogos/suzuki.jpg",
  },
  {
    name: "TOYOTA",
    image: "/src/carLogos/toyota.webp",
  },
  {
    name: "VOLKSWAGEN",
    image: "/src/carLogos/volkswagen.jpg",
  },
  {
    name: "VOLVO",
    image: "/src/carLogos/volvo.webp",
  },
  {
    name: "ZOTYE",
    image: "/src/carLogos/zotye.jpg",
  },
  {
    name: "HONDA",
    image: "/src/carLogos/honda.webp",
  },
  {
    name: "BYD",
    image: "/src/carLogos/byd.png",
  },
  {
    name: "FORD",
    image: "/src/carLogos/ford.webp",
  },
  {
    name: "JEEP",
    image: "/src/carLogos/jeep.png",
  },
  {
    name: "PORSCHE",
    image: "/src/carLogos/porshce.webp",
  },
];

function Personal() {
  return (
    <div className="mx-2 lg:m-14">
      <div className="flex flex-row gap-10 text-sm text-blue-500 bg-blue-500 p-5">
        <h1 className="w-32 flex justify-center py-3 bg-gradient-to-r from-transparent to-white rounded-md">
          Car
        </h1>
        <h1 className="w-32 flex justify-center py-3 bg-gradient-to-r from-transparent to-white rounded-md">
          Driver
        </h1>
        <h1 className="w-32 flex justify-center py-3 bg-gradient-to-r from-transparent to-white rounded-md">
          Insurance
        </h1>
        <h1 className="w-32 flex justify-center py-3 bg-gradient-to-r from-transparent to-white rounded-md">
          Quotes
        </h1>
      </div>
      <div className=" bg-gradient-to-b from-gray-200 to-transparent text-black p-5 rounded-xl">
        <div className="mb-3">
          <h1 className="lg:text-3xl text-xl font-semibold mb-2">
            You are looking for a car insurance for…
          </h1>
          <p className="text-xs lg:text-base">
            Fill the questionnaire to get your personalised car insurance quote.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-sm lg:text-lg mb-3">
            Select car brand
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Select car brand"
              className="py-3 pl-12 bg-white rounded-lg border border-blue-300"
            />
            <FaSearch
              size={24}
              className=" absolute left-2 top-[50%] translate-y-[-50%]"
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium mt-4 text-blue-600">
            Popular Brands
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-2">
            {cards.map((car, index) => (
              <BrandCard key={index} name={car.name} image={car.image} />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-xl font-semibold">Remark</h1>
          <p className="text-sm font-medium mt-2">
            Please answer all the above questions truthfully. If the insured
            conceals the truth or making a false statement will result in the
            voiding of this insurance contract. The insurance company has the
            right to terminate the insurance contract under Section 865 of the
            Civil and Commercial Code, and may refuse to pay compensation
          </p>
          <p className="text-sm font-medium mt-6">
            The Company does not contact customers through other (communication)
            channels apart from the Company’s official channels under any
            circumstances.
          </p>
          <p className="text-sm font-medium mt-6">
            Please note that under no circumstances shall the Company be held
            liable or responsible for any claims, losses, damages, expenses, or
            other inconvenience resulting from or in any way connected with such
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Personal;
